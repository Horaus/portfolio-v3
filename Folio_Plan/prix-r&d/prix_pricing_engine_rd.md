# PRIX — Pricing Engine Logic R&D

**Tài liệu nghiên cứu nội bộ**  
**Dự án:** Prix. (Pricing Copilot)  
**Phiên bản:** 1.0  
**Ngày tạo:** 2026-06-07  
**Tác giả:** R&D Team

---

## 1. Design Philosophy

### 1.1 Core Principle: Strict Separation

Pricing Engine không phải hàm tính toán đơn giản, mà là **Financial Simulation Model**.

```
Production Cost ≠ Selling Cost ≠ Pricing Decision
```

### 1.2 Why Separation Matters

Cho phép trả lời các câu hỏi chiến lược mà công cụ tính giá thông thường bỏ qua:

> *"Nếu tôi chuyển từ bán tại shop sang bán trên ShopeeFood, tôi cần tăng giá bao nhiêu để giữ nguyên mức lợi nhuận?"*

---

## 2. Cost Layers Architecture

### 2.1 Layer 1: Production Cost (Static)

Chi phí "tĩnh" cho một đơn vị sản phẩm, không phụ thuộc vào nơi bán.

#### 2.1.1 Material Cost (Chi phí nguyên liệu)

**Công thức:**
```
Material Cost = Σ (Giá nhập × Lượng dùng × (1 + Waste Rate))
```

**Ví dụ - Bánh Mì Thịt:**
| Nguyên liệu | Giá nhập | Lượng | Waste | Chi phí |
|---|---|---|---|---|
| Bột mì | 25.000đ/kg | 0.15kg | 5% | 3.938đ |
| Thịt | 120.000đ/kg | 0.1kg | 3% | 12.360đ |
| Rau | 20.000đ/kg | 0.05kg | 10% | 1.100đ |
| **Tổng Material** | | | | **17.398đ** |

**R&D Note:** Tích hợp `waste_rate` cho từng nguyên liệu thể hiện sự am hiểu đặc thù ngành F&B.

#### 2.1.2 Direct Labor (Nhân công trực tiếp)

**Công thức:**
```
Direct Labor = (Thời gian thao tác / 60) × Giá nhân công/giờ
```

**Ví dụ:**
```
Thời gian làm 1 bánh: 3 phút
Giá nhân công: 25.000đ/giờ
Direct Labor = (3/60) × 25.000 = 1.250đ
```

#### 2.1.3 Overhead & Utility

**Công thức:**
```
Overhead = (Production Cost × Overhead Rate) + Fixed Overhead
```

**Ví dụ:**
```
Overhead Rate: 10%
Fixed Overhead (điện, nước, mặt bằng): 2.000đ/sản phẩm
Overhead = (17.398 + 1.250) × 0.10 + 2.000 = 3.865đ
```

#### 2.1.4 Production Waste Buffer

Lớp bảo vệ cuối cùng để bù đắp sai số không tên.

```
Production Cost = Material + Labor + Overhead + Buffer
               = 17.398 + 1.250 + 3.865 + 500
               = 23.013đ
```

---

### 2.2 Layer 2: Selling Cost (Dynamic)

Chi phí "động", thay đổi theo từng kênh phân phối.

#### 2.2.1 Fixed Selling Cost

Các khoản phí không đổi bất kể giá bán:
- Phí đóng gói
- Phí vận chuyển hỗ trợ
- Chi phí nhân viên sale

**Ví dụ:**
```
Fixed Selling Cost = 3.000đ (đóng gói) + 2.000đ (ship hỗ trợ) = 5.000đ
```

#### 2.2.2 Rate-based Selling Fee

**Đây là "điểm mù" lớn nhất của SME.**

**Công thức:**
```
Selling Fee Rate = Commission + Payment Fee + Tax Rate + Affiliate Fee
```

**Ví dụ - ShopeeFood:**
| Loại phí | Tỷ lệ |
|---|---|
| Commission sàn | 18% |
| Phí thanh toán | 2% |
| Thuế GTGT | 10% |
| Affiliate (nếu có) | 5% |
| **Tổng** | **25%** |

**R&D Note:** Tính trên **Gross Selling Price** (Giá bán cuối cùng), không phải Net Price.

---

### 2.3 Layer 3: Pricing Decision

Sử dụng phương pháp giải ngược (Reverse Engineering).

#### 2.3.1 Break-even Price

**Công thức:**
```
Break-even Price = (Production Cost + Fixed Selling Cost) / (1 - Selling Fee Rate)
```

**Ví dụ:**
```
Break-even Price = (23.013 + 5.000) / (1 - 0.25)
                 = 28.013 / 0.75
                 = 37.351đ
```

**Ý nghĩa:** Giá tối thiểu để KHÔNG lỗ (lợi nhuận = 0).

#### 2.3.2 Recommended Price

**Công thức:**
```
Recommended Price = (Production Cost + Fixed Selling Cost) / (1 - Selling Fee Rate - Target Margin)
```

**Ví dụ (Target Margin = 45%):**
```
Recommended Price = (23.013 + 5.000) / (1 - 0.25 - 0.45)
                   = 28.013 / 0.30
                   = 93.377đ
```

**Ý nghĩa:** Giá đề xuất để đạt được margin mục tiêu.

---

## 3. Total Effective Cost

**Công thức:**
```
Total Effective Cost = Production Cost + Fixed Selling Cost + (Selling Price × Selling Fee Rate)
```

**Ví dụ (bán 50.000đ trên ShopeeFood):**
```
Total Effective Cost = 23.013 + 5.000 + (50.000 × 0.25)
                     = 23.013 + 5.000 + 12.500
                     = 40.513đ

Profit = Selling Price - Total Effective Cost
       = 50.000 - 40.513
       = 9.487đ

Margin = Profit / Selling Price
       = 9.487 / 50.000
       = 18.97%
```

---

## 4. Status Classification

### 4.1 Status Logic

| Status | Điều kiện | Hành động |
|---|---|---|
| **Safe** | Margin ≥ Safe Threshold (configurable) | Yên tâm |
| **Watch** | Margin < Safe but ≥ Danger | Cần theo dõi |
| **Danger** | Margin < Danger Threshold | Hành động ngay |

### 4.2 Threshold Configuration

Thresholds được cấu hình trong Business Profile:

```javascript
const businessProfile = {
  default_target_margin: 0.45,    // 45%
  safe_margin_threshold: 0.35,     // 35%
  danger_margin_threshold: 0.20,   // 20%
};
```

---

## 5. Simulation Logic

### 5.1 Promotion Simulator

| Loại KM | Tác động | Công thức |
|---|---|---|
| **Giảm giá %** | Giảm Selling Price | `Selling Price × (1 - Discount%)` |
| **Giảm tiền cố định** | Giảm Selling Price | `Selling Price - Discount Amount` |
| **Freeship** | Tăng Fixed Selling Cost | `Fixed Cost + Shipping Cost` |
| **Tặng quà** | Tăng Fixed Selling Cost | `Fixed Cost + Gift Cost` |
| **Affiliate** | Tăng Selling Fee Rate | `Fee Rate + Affiliate Rate` |

### 5.2 Combo Simulator

**Combo Cost:**
```
Combo Cost = Σ(Product Production Cost) + Combo Packaging Cost
```

**Combo Intent Classification:**
| Intent | Điều kiện | Chiến lược |
|---|---|---|
| **Lead Magnet** | Margin thấp, AOV cao | Dùng để attract khách |
| **Profit Builder** | Margin cao | Tập trung upsell |
| **Inventory Clearance** | Margin thấp, AOV thấp | Bán nhanh, giảm tồn kho |

---

## 6. Confidence Score

### 6.1 Calculation

**Công thức:**
```
Confidence Score = 1.0
                 - (Missing Labor × 0.15)
                 - (Missing Waste × 0.10)
                 - (Missing Overhead × 0.10)
                 - (Estimated Price × 0.20)
```

### 6.2 Missing Data Penalties

| Missing Field | Penalty | Impact |
|---|---|---|
| Labor cost | -0.15 | High |
| Waste rate | -0.10 | Medium |
| Overhead | -0.10 | Medium |
| Estimated ingredient price | -0.20 | High |

### 6.3 Score Interpretation

| Score | Interpretation | UI Display |
|---|---|---|
| 0.9 - 1.0 | Excellent data | "Con số chính xác" |
| 0.7 - 0.9 | Good data | "Con số đáng tin cậy" |
| 0.5 - 0.7 | Partial data | "Con số ước tính" |
| < 0.5 | Poor data | "⚠️ Cần bổ sung dữ liệu" |

---

## 7. Repricing Logic

### 7.1 Trigger Flow

```
Ingredient Price Change
    ↓
Find Affected Products (via product_ingredients)
    ↓
Calculate New Production Cost
    ↓
Create New Snapshots
    ↓
Compare with Old Snapshots
    ↓
Alert if Margin Changes > Threshold
```

### 7.2 Batch Processing

```javascript
const repricingConfig = {
  immediateLimit: 50,      // Max products per immediate update
  batchSize: 100,          // Products per batch job
  batchDelay: 1000,        // Delay between batches (ms)
};
```

---

*Kết luận: Pricing Engine của Prix. không chỉ là một máy tính, mà là một khung tư duy tài chính được mã hóa thành code, giúp SME chuyển dịch từ quản trị cảm tính sang quản trị dựa trên dữ liệu.*

---

*Cập nhật lần cuối: 2026-06-07 - R&D Team*