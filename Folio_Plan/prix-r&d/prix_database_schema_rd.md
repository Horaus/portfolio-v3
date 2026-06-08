# PRIX — Database Schema R&D

**Tài liệu nghiên cứu nội bộ**  
**Dự án:** Prix. (Pricing Copilot)  
**Phiên bản:** 1.0  
**Ngày tạo:** 2026-06-07  
**Tác giả:** R&D Team

---

## 1. Data Modeling Strategy

### 1.1 Core Principles

| Principle | Implementation | Benefit |
|---|---|---|
| **Multi-tenancy** | All tables scoped by `business_id` | Data isolation between businesses |
| **Temporal Data** | Snapshot-first architecture | Track history, support decisions |
| **Normalized Schema** | Separate concerns into dedicated tables | Flexibility, maintainability |
| **Referential Integrity** | PostgreSQL Foreign Keys | No orphan data |

### 1.2 Why Snapshot-First?

Thay vì chỉ lưu giá hiện tại, hệ thống lưu `pricing_snapshots`:

- **Track history:** Xem biến động chi phí theo thời gian
- **Preserve truth:** Không mất dữ liệu khi Master Data thay đổi
- **Support decisions:** Bằng chứng cho việc ra quyết định tăng giá
- **Audit trail:** Ai đã thay đổi giá, khi nào, tại sao

---

## 2. Entity Relationship Diagram

### 2.1 Core Entities

```
┌──────────────┐       ┌──────────────┐       ┌──────────────────┐
│   users      │──────<│  businesses  │──────<│  business_profiles│
└──────────────┘       └──────────────┘       └──────────────────┘
                              │
                              │ 1:n
                              ▼
┌──────────────┐       ┌──────────────┐       ┌──────────────────┐
│  ingredients │──────<│product_ingre-│>──────│    products      │
└──────────────┘       │   dents      │       └──────────────────┘
                              │                │
                              │                │ 1:n
                              ▼                ▼
                       ┌──────────────┐  ┌──────────────────┐
                       │product_direct│  │ product_channels │
                       │    _costs    │  └──────────────────┘
                       └──────────────┘         │
                                                │ 1:n
                                                ▼
                                        ┌──────────────────┐
                                        │pricing_snapshots │
                                        └──────────────────┘
```

---

## 3. Core Tables

### 3.1 users

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'staff',  -- 'owner', 'manager', 'staff'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 3.2 businesses

```sql
CREATE TABLE businesses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50),  -- 'restaurant', 'cafe', 'fnb'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 3.3 business_profiles

**Đây là "bộ não" điều khiển các cảnh báo toàn hệ thống.**

```sql
CREATE TABLE business_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES businesses(id) UNIQUE,
  
  -- Default targets
  default_target_margin DECIMAL(5,4) DEFAULT 0.45,    -- 45%
  safe_margin_threshold DECIMAL(5,4) DEFAULT 0.35,    -- 35%
  danger_margin_threshold DECIMAL(5,4) DEFAULT 0.20,  -- 20%
  
  -- Labor defaults
  default_labor_cost_per_hour DECIMAL(10,2),
  default_labor_time_minutes INTEGER,
  
  -- Overhead defaults
  default_overhead_rate DECIMAL(5,4) DEFAULT 0.10,    -- 10%
  default_fixed_overhead DECIMAL(10,2) DEFAULT 0,
  
  -- Tax
  default_tax_rate DECIMAL(5,4) DEFAULT 0.10,         -- 10%
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 3.4 ingredients

**Thư viện nguyên liệu dùng chung cho tất cả sản phẩm.**

```sql
CREATE TABLE ingredients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES businesses(id),
  
  name VARCHAR(255) NOT NULL,
  unit VARCHAR(50) NOT NULL,           -- 'kg', 'liter', 'piece'
  current_price DECIMAL(10,2),          -- Giá nhập hiện tại
  waste_rate DECIMAL(5,4) DEFAULT 0,    -- Tỷ lệ hao hụt
  
  -- Supplier info
  supplier_name VARCHAR(255),
  supplier_contact VARCHAR(255),
  
  -- Metadata
  category VARCHAR(100),               -- 'meat', 'vegetable', 'packaging'
  notes TEXT,
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Index for fast lookup
  INDEX idx_ingredients_business (business_id)
);
```

### 3.5 products

```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES businesses(id),
  
  name VARCHAR(255) NOT NULL,
  sku VARCHAR(100),
  status VARCHAR(50) DEFAULT 'draft_pricing',  -- 'draft_pricing', 'selling', 'discontinued'
  product_type VARCHAR(50) DEFAULT 'manufactured',  -- 'manufactured', 'trading'
  
  -- Combo support
  is_combo BOOLEAN DEFAULT FALSE,
  
  -- Metadata
  category VARCHAR(100),
  description TEXT,
  image_url VARCHAR(500),
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_products_business (business_id),
  INDEX idx_products_status (status)
);
```

### 3.6 product_ingredients

**BOM (Bill of Materials) - Định mức sử dụng cho từng sản phẩm.**

```sql
CREATE TABLE product_ingredients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  ingredient_id UUID REFERENCES ingredients(id),
  
  quantity DECIMAL(10,4) NOT NULL,      -- Lượng dùng (theo unit của ingredient)
  is_optional BOOLEAN DEFAULT FALSE,
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Ensure unique combination
  UNIQUE(product_id, ingredient_id),
  
  INDEX idx_product_ingredients_product (product_id)
);
```

### 3.7 product_direct_costs

**Chi phí sản xuất trực tiếp KHÔNG phải nguyên liệu.**

```sql
CREATE TABLE product_direct_costs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  
  cost_type VARCHAR(50) NOT NULL,  -- 'labor', 'packaging', 'overhead', 'buffer'
  amount DECIMAL(10,2) NOT NULL,
  is_percentage BOOLEAN DEFAULT FALSE,  -- TRUE nếu là % của material cost
  
  description VARCHAR(255),
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_product_direct_costs_product (product_id)
);
```

### 3.8 selling_channels

**Cấu hình phí của từng kênh bán.**

```sql
CREATE TABLE selling_channels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES businesses(id),
  
  name VARCHAR(255) NOT NULL,           -- 'ShopeeFood', 'Grab', 'Store'
  channel_type VARCHAR(50),             -- 'aggregator', 'delivery', 'offline', 'online'
  
  -- Fee structure
  commission_rate DECIMAL(5,4) DEFAULT 0,     -- % hoa hồng sàn
  payment_fee_rate DECIMAL(5,4) DEFAULT 0,   -- % phí thanh toán
  tax_rate DECIMAL(5,4) DEFAULT 0,            -- % thuế
  affiliate_rate DECIMAL(5,4) DEFAULT 0,      -- % affiliate
  
  -- Fixed fees per order
  fixed_fee_per_order DECIMAL(10,2) DEFAULT 0,
  packaging_cost DECIMAL(10,2) DEFAULT 0,
  shipping_support DECIMAL(10,2) DEFAULT 0,
  
  -- Calculated
  total_fee_rate GENERATED ALWAYS AS (
    commission_rate + payment_fee_rate + tax_rate + affiliate_rate
  ) STORED,
  
  is_active BOOLEAN DEFAULT TRUE,
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_selling_channels_business (business_id)
);
```

### 3.9 product_channels

**Bảng trung gian: Một sản phẩm có thể bán trên nhiều kênh với giá khác nhau.**

```sql
CREATE TABLE product_channels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  channel_id UUID REFERENCES selling_channels(id),
  
  custom_price DECIMAL(10,2),            -- Custom price cho kênh này (NULL = use default)
  is_active BOOLEAN DEFAULT TRUE,
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Each product-channel combo is unique
  UNIQUE(product_id, channel_id),
  
  INDEX idx_product_channels_product (product_id),
  INDEX idx_product_channels_channel (channel_id)
);
```

---

## 4. Snapshot System

### 4.1 pricing_snapshots

**Đây là thành phần quan trọng nhất trong thiết kế dữ liệu.**

```sql
CREATE TABLE pricing_snapshots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Scope
  business_id UUID REFERENCES businesses(id),
  product_id UUID REFERENCES products(id),
  channel_id UUID REFERENCES selling_channels(id),  -- NULL = all channels
  
  -- Snapshot metadata
  snapshot_type VARCHAR(50) DEFAULT 'manual',  -- 'manual', 'auto', 'repricing'
  triggered_by VARCHAR(50),                    -- 'user', 'system', 'ingredient_change'
  
  -- Production Cost breakdown
  material_cost DECIMAL(10,2),
  labor_cost DECIMAL(10,2),
  overhead_cost DECIMAL(10,2),
  buffer_cost DECIMAL(10,2),
  total_production_cost DECIMAL(10,2),
  
  -- Selling Cost
  fixed_selling_cost DECIMAL(10,2),
  selling_fee_rate DECIMAL(5,4),
  total_effective_cost DECIMAL(10,2),
  
  -- Pricing Results
  selling_price DECIMAL(10,2),
  profit DECIMAL(10,2),
  margin DECIMAL(5,4),
  
  -- Status
  status VARCHAR(50),  -- 'safe', 'watch', 'danger'
  
  -- Confidence
  confidence_score DECIMAL(3,2),
  missing_fields JSONB,  -- ['labor_cost', 'waste_rate']
  
  -- Snapshot data at this point
  ingredient_prices JSONB,  -- Snapshot of ingredient prices used
  calculation_params JSONB,  -- All parameters used in calculation
  
  created_at TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_snapshots_business (business_id),
  INDEX idx_snapshots_product (product_id),
  INDEX idx_snapshots_created (created_at),
  INDEX idx_snapshots_product_channel (product_id, channel_id)
);
```

### 4.2 Why Snapshots Matter

**Use Case 1: Biến động chi phí**
```
01/01: Ingredient A = 100đ → Snapshot shows margin = 35%
15/01: Ingredient A = 150đ → New snapshot, margin = 22%
→ User có bằng chứng để tăng giá
```

**Use Case 2: Quyết định kinh doanh**
```
Manager: "Tại sao tháng này lợi nhuận giảm?"
→ So sánh snapshots: Ingredient B tăng giá 20%
```

---

## 5. Simulation Tables

### 5.1 promotion_scenarios

**Lưu các kịch bản "giả định" - không ảnh hưởng đến giá thực.**

```sql
CREATE TABLE promotion_scenarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  business_id UUID REFERENCES businesses(id),
  product_id UUID REFERENCES products(id),
  channel_id UUID REFERENCES selling_channels(id),
  
  -- Scenario definition
  promotion_type VARCHAR(50) NOT NULL,  -- 'discount_percent', 'discount_amount', 'freeship', 'gift', 'affiliate'
  promotion_value DECIMAL(10,2) NOT NULL,
  
  -- Calculated results
  new_price DECIMAL(10,2),
  new_margin DECIMAL(5,4),
  new_profit DECIMAL(10,2),
  profit_change DECIMAL(10,2),
  margin_change DECIMAL(5,4),
  
  -- Comparison
  compared_to_snapshot_id UUID REFERENCES pricing_snapshots(id),
  
  -- AI recommendation
  ai_recommendation TEXT,
  ai_score DECIMAL(3,2),  -- AI's assessment of this scenario
  
  created_at TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_promotion_scenarios_product (product_id)
);
```

### 5.2 combos & combo_items

```sql
CREATE TABLE combos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  business_id UUID REFERENCES businesses(id),
  name VARCHAR(255) NOT NULL,
  
  -- Pricing
  combo_price DECIMAL(10,2),
  target_margin DECIMAL(5,4),
  
  -- Intent
  combo_intent VARCHAR(50),  -- 'lead_magnet', 'profit_builder', 'inventory_clearance'
  
  -- Costs
  total_production_cost DECIMAL(10,2),
  packaging_cost DECIMAL(10,2),
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE combo_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  combo_id UUID REFERENCES combos(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  
  quantity INTEGER DEFAULT 1,
  is_free BOOLEAN DEFAULT FALSE,  -- TRUE nếu là item miễn phí trong combo
  
  created_at TIMESTAMP DEFAULT NOW(),
  
  UNIQUE(combo_id, product_id)
);
```

---

## 6. Indexing Strategy

### 6.1 Performance Indexes

```sql
-- Fast product lookup by business
CREATE INDEX idx_products_business_status ON products(business_id, status);

-- Fast snapshot queries for dashboard
CREATE INDEX idx_snapshots_product_channel_date 
  ON pricing_snapshots(product_id, channel_id, created_at DESC);

-- Fast ingredient search
CREATE INDEX idx_ingredients_business_category 
  ON ingredients(business_id, category);

-- Fast channel lookup
CREATE INDEX idx_selling_channels_business_active 
  ON selling_channels(business_id, is_active);
```

### 6.2 Composite Indexes for Common Queries

```sql
-- "Get all products with their current margin on active channels"
CREATE INDEX idx_products_channels_margin 
  ON products(business_id, status) 
  INCLUDE (id);

-- "Get all danger products"
CREATE INDEX idx_snapshots_danger 
  ON pricing_snapshots(business_id, status) 
  WHERE status = 'danger';
```

---

## 7. Data Integrity Rules

### 7.1 Constraints

```sql
-- Margin must be between 0 and 1
ALTER TABLE pricing_snapshots 
  ADD CONSTRAINT chk_margin_range 
  CHECK (margin >= 0 AND margin <= 1);

-- Confidence score must be between 0 and 1
ALTER TABLE pricing_snapshots 
  ADD CONSTRAINT chk_confidence_range 
  CHECK (confidence_score >= 0 AND confidence_score <= 1);

-- No negative prices
ALTER TABLE products 
  ADD CONSTRAINT chk_no_negative_price 
  CHECK (custom_price IS NULL OR custom_price >= 0);
```

### 7.2 Cascade Rules

| Parent Table | Child Behavior |
|---|---|
| `products` | DELETE → removes `product_ingredients`, `product_direct_costs`, `product_channels` |
| `combos` | DELETE → removes `combo_items` |
| `businesses` | DELETE → removes ALL related data (CASCADE) |

---

## 8. Migration Strategy

### 8.1 Prisma Schema Example

```prisma
model Business {
  id        String   @id @default(uuid())
  name      String
  ownerId   String
  owner     User     @relation(fields: [ownerId], references: [id])
  
  ingredients        Ingredient[]
  products            Product[]
  sellingChannels     SellingChannel[]
  pricingSnapshots    PricingSnapshot[]
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Product {
  id           String   @id @default(uuid())
  name         String
  businessId   String
  business     Business @relation(fields: [businessId], references: [id])
  status       String   @default("draft_pricing")
  
  ingredients      ProductIngredient[]
  directCosts      ProductDirectCost[]
  channels         ProductChannel[]
  snapshots        PricingSnapshot[]
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

*Kết luận: Data Model của Prix. không chỉ đơn thuần là lưu trữ, mà là một cấu trúc hỗ trợ phân tích tài chính chuyên sâu, cho phép doanh nghiệp nhìn thấy quá khứ, hiện tại và mô phỏng tương lai của lợi nhuận.*

---

*Cập nhật lần cuối: 2026-06-07 - R&D Team*