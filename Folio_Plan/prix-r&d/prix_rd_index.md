# PRIX — Pricing Intelligence System

## R&D Documentation Index

**Tài liệu nghiên cứu nội bộ**  
**Dự án:** Prix. (Pricing Copilot)  
**Phiên bản:** 1.0  
**Ngày tạo:** 2026-06-07  
**Tác giả:** R&D Team

---

## 🗺️ System Overview

Prix. là một **Pricing Intelligence SaaS** dành cho chủ doanh nghiệp SME F&B, giúp họ chuyển dịch từ quản trị cảm tính sang quản trị dựa trên dữ liệu tài chính.

### Core Value Proposition

| Vấn đề SME đang gặp | Giải pháp Prix. |
|---|---|
| Không biết giá bán bao nhiêu để có lãi trên từng kênh | Break-even Calculator + Recommended Price |
| Không hiểu phí các sàn (Shopee, Grab...) ăn bao nhiêu % | Channel Cost Analyzer với Real-time Simulation |
| Không theo dõi được biến động chi phí nguyên liệu | Ingredient Price Tracking + Auto Repricing |
| Không có ai tư vấn chiến lược giá | AI-powered Business Insights |

---

## 📂 R&D Document Catalog

### Core R&D Reports

| # | Document | Layer | Mục đích |
|---|---|---|---|
| 01 | [prix_technical_architecture_rd.md](prix_technical_architecture_rd.md) | L1 - Foundation | Kiến trúc kỹ thuật tổng thể |
| 02 | [prix_product_strategy_rd.md](prix_product_strategy_rd.md) | L2 - Strategy | Chiến lược sản phẩm & Roadmap |
| 03 | [prix_design_system_rd.md](prix_design_system_rd.md) | L3 - Visual | Design System & UX Guidelines |
| 04 | [prix_ai_strategy_rd.md](prix_ai_strategy_rd.md) | L4 - Intelligence | AI Integration & Prompt Engineering |
| 05 | [prix_pricing_engine_rd.md](prix_pricing_engine_rd.md) | L5 - Core Engine | Pricing Engine Logic & Formulas |
| 06 | [prix_database_schema_rd.md](prix_database_schema_rd.md) | L6 - Data | Database Design & Data Model |

### Reference Materials

| Document | Nguồn | Mô tả |
|---|---|---|
| [pricing_copilot/research/*](file:///Users/horaus/Documents/pricing_copilot/research/) | External | Research gốc từ hệ thống đã kiểm thử |
| [Folio_Plan/MARKETING_BLOCKS_OVERVIEW.md](MARKETING_BLOCKS_OVERVIEW.md) | Internal | Framework reference cho việc viết narrative |

---

## 🔑 Key R&D Decisions

### 1. Separation of Concerns
```
Pricing Engine (Deterministic) ≠ AI Layer (Probabilistic)
```
- **Engine**: Tính toán chính xác Profit, Margin, Break-even bằng công thức toán học
- **AI**: Diễn giải kết quả thành lời khuyên kinh doanh bằng ngôn ngữ tự nhiên

### 2. Snapshot-first Architecture
Thay vì chỉ lưu giá hiện tại, hệ thống lưu `pricing_snapshots` để:
- Theo dõi lịch sử biến động chi phí
- Hỗ trợ ra quyết định tăng giá dựa trên dữ liệu
- Đảm bảo tính nhất quán khi Master Data thay đổi

### 3. Decision Card Pattern
UI không hiển thị bảng số liệu khô khan mà chuyển thành các **Decision Cards**:
- *Sản phẩm này có an toàn không?* → Safe/Watch/Danger Status
- *Tôi nên bán giá bao nhiêu?* → Recommended Price
- *Khuyến mãi này có làm tôi lỗ không?* → Scenario Simulation

---

## 🎯 Positioning & Branding

### Visual Identity
- **Phong cách:** Modern European SaaS, Premium, Analytical
- **Cảm giác:** Trustworthy, Transparent, Professional
- **Anti-patterns:** Tránh "Fintech Flashy" (gradient tím, neon, cyberpunk)

### Color Palette
| Role | Color | Hex | Usage |
|---|---|---|---|
| Primary | Deep Azure | `#112031` | Text, Headings |
| Accent | Ice Blue | `#8EC9DB` | CTA, Active States |
| Supporting | Rich Teal | `#345B63` | Charts, Progress Bars |
| Background | Mist Gray | `#D8DADA` | Page Background |

### Typography Strategy
- **Outfit:** English labels, Brand name, Eyebrow text
- **Google Sans Flex:** Vietnamese content

---

## 🚀 Development Roadmap

| Phase | Mục tiêu | Trạng thái |
|---|---|---|
| **V1 (Current)** | Core Pricing Engine + Basic UI | ✅ Research Complete |
| **V2** | Multi-tenant + AI Copilot | 🔄 Planning |
| **V3** | Advanced Analytics + Forecasting | 📋 Backlog |

---

## 📌 Next Steps

1. [ ] Hoàn thiện chi tiết từng R&D document (đã tạo 6 docs)
2. [ ] Tạo mockup/prototype dựa trên Design System
3. [ ] Xây dựng MVP với core features
4. [ ] User testing với sample SME customers

---

*Kết luận: Prix. không chỉ là một công cụ tính giá, mà là một **Financial Intelligence System** giúp SME F&B chuyển dịch từ "bán bao nhiêu thì bán" sang "bán bao nhiêu để tối ưu lợi nhuận".*

---

*Cập nhật lần cuối: 2026-06-07 - R&D Team*