# PRIX — Product Strategy R&D

**Tài liệu nghiên cứu nội bộ**  
**Dự án:** Prix. (Pricing Copilot)  
**Phiên bản:** 1.0  
**Ngày tạo:** 2026-06-07  
**Tác giả:** R&D Team

---

## 1. Product Vision

### 1.1 Mission Statement

**Prix. giúp chủ doanh nghiệp SME F&B chuyển dịch từ "bán bao nhiêu thì bán" sang "bán bao nhiêu để tối ưu lợi nhuận".**

### 1.2 Core Value Proposition

| SME Pain Point | Prix. Solution |
|---|---|
| Không biết giá bán bao nhiêu để có lãi trên từng kênh | Break-even Calculator + Recommended Price |
| Không hiểu phí các sàn (Shopee, Grab...) ăn bao nhiêu % | Channel Cost Analyzer với Real-time Simulation |
| Không theo dõi được biến động chi phí nguyên liệu | Ingredient Price Tracking + Auto Repricing |
| Không có ai tư vấn chiến lược giá | AI-powered Business Insights |

### 1.3 Target User Profile

**Primary User:** Chủ quán ăn, cafe, F&B business owner
- **Tech literacy:** Trung bình, dùng được Excel nhưng không rành công cụ phức tạp
- **Pain point cụ thể:** Bán trên nhiều sàn (ShopeeFood, Grab, Store) với mức phí khác nhau, không biết đặt giá sao cho không lỗ
- **Decision maker:** Trực tiếp ra quyết định giá

**Secondary User:** Quản lý, nhân viên vận hành
- Cập nhật giá nguyên liệu hàng ngày
- Theo dõi margin của các sản phẩm

---

## 2. Product Architecture

### 2.1 Core Modules

```
┌─────────────────────────────────────────────────────────────┐
│                        PRIX. SUITE                          │
├─────────────┬─────────────┬─────────────┬──────────────────┤
│   PRICING   │  CHANNEL    │  INGREDIENT │    AI INSIGHTS   │
│   ENGINE    │  ANALYZER   │  TRACKER    │                  │
├─────────────┼─────────────┼─────────────┼──────────────────┤
│ • BOM Calc  │ • Fee Setup │ • Price Log │ • Plain Language │
│ • Margin    │ • Multi-ch  │ • Waste %   │   Explanation    │
│ • Break-    │   Pricing   │ • Supplier  │ • Promotion Opt  │
│   even      │ • Scenario  │   Info      │ • Data Quality   │
│             │   Sim       │             │   Guard          │
└─────────────┴─────────────┴─────────────┴──────────────────┘
```

### 2.2 Feature Hierarchy

| Priority | Feature | Description | Status |
|---|---|---|---|
| **P0** | Pricing Engine | Tính Production Cost, Selling Cost, Margin | ✅ Done |
| **P0** | Channel Configuration | Setup phí các kênh bán | ✅ Done |
| **P0** | Product Management | CRUD sản phẩm + BOM | ✅ Done |
| **P1** | Ingredient Tracker | Theo dõi giá nguyên liệu | ✅ Done |
| **P1** | Promotion Simulator | Mô phỏng khuyến mãi | ✅ Done |
| **P1** | AI Explanation | Giải thích kết quả bằng ngôn ngữ tự nhiên | 🔄 V2 |
| **P2** | Combo Builder | Tạo combo với margin calculation | 🔄 V2 |
| **P2** | Auto Repricing | Tự động tính lại giá khi chi phí thay đổi | 🔄 V2 |
| **P3** | Forecasting | Dự đoán biến động chi phí | 📋 Backlog |

---

## 3. User Flow Analysis

### 3.1 Primary Flow: Pricing a New Product

```
1. User tạo sản phẩm mới
       ↓
2. Thêm nguyên liệu (BOM) - Autocomplete từ Ingredient Library
       ↓
3. Nhập định mức (lượng dùng, waste_rate)
       ↓
4. Nhập chi phí khác (nhân công, bao bì, overhead)
       ↓
5. Chọn kênh bán → Xem Break-even Price + Recommended Price
       ↓
6. Điều chỉnh giá bán → Real-time margin preview
       ↓
7. Save → Tạo Snapshot
```

### 3.2 Secondary Flow: Reacting to Cost Change

```
1. User cập nhật giá nguyên liệu
       ↓
2. System trigger Repricing Job
       ↓
3. Tính lại Production Cost cho tất cả sản phẩm liên quan
       ↓
4. Tạo new snapshots
       ↓
5. Alert User: "12 sản phẩm bị ảnh hưởng, 3 sản phẩm margin giảm dưới ngưỡng an toàn"
       ↓
6. User review & approve price changes
```

---

## 4. Competitive Analysis

### 4.1 Market Positioning

| Competitor | Strength | Weakness | Prix. Advantage |
|---|---|---|---|
| Excel/Spreadsheet | Free, familiar | Manual, error-prone, no simulation | Auto-calc, real-time preview |
| POS Software | All-in-one | Pricing là feature phụ, không sâu | Deep pricing analytics |
| Accounting Software | Accurate | Complex, not user-friendly | SME-friendly, decision-focused |
| Competitor SaaS | Specialized | Often expensive, complex setup | Simple, affordable, AI-powered |

### 4.2 Differentiation Strategy

1. **Decision-first:** Không chỉ hiển thị số, mà hướng dẫn hành động
2. **Channel-native:** Hiểu đặc thù từng sàn (Shopee, Grab, Baemin...)
3. **AI-powered:** Giải thích "Tại sao?" thay vì chỉ "Cái gì?"
4. **SME-focused:** Giao diện đơn giản, không cần đào tạo

---

## 5. Roadmap

### 5.1 Version 1 (Current)
- [x] Pricing Engine core
- [x] Channel configuration
- [x] Product + BOM management
- [x] Ingredient tracking
- [x] Promotion simulation
- [x] Basic dashboard

### 5.2 Version 2 (Q3 2026)
- [ ] AI Copilot (chat-based interaction)
- [ ] Auto Repricing with approval workflow
- [ ] Combo builder
- [ ] Mobile app (React Native)
- [ ] Multi-user collaboration

### 5.3 Version 3 (Q4 2026+)
- [ ] Advanced forecasting
- [ ] Competitor price monitoring
- [ ] Supplier integration
- [ ] API for POS integration
- [ ] Enterprise features (RBAC, Audit log)

---

## 6. Success Metrics

| Metric | Target (V1) | Target (V2) |
|---|---|---|
| **Activation Rate** | >70% users create 5+ products | >80% |
| **Retention (30-day)** | >50% | >65% |
| **Margin improvement** | +10% average | +15% |
| **Time to first price** | <5 minutes | <3 minutes |
| **NPS** | >40 | >50 |

---

*Kết luận: Prix. được định vị là **Financial Intelligence System** cho SME F&B, không phải công cụ tính giá đơn thuần. Sản phẩm tập trung vào việc đơn giản hóa các khái niệm tài chính phức tạp thành những tín hiệu thị giác và hành động rõ ràng.*

---

*Cập nhật lần cuối: 2026-06-07 - R&D Team*