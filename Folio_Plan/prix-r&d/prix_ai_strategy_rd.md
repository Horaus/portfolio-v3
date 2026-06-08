# PRIX — AI Strategy R&D

**Tài liệu nghiên cứu nội bộ**  
**Dự án:** Prix. (Pricing Copilot)  
**Phiên bản:** 1.0  
**Ngày tạo:** 2026-06-07  
**Tác giả:** R&D Team

---

## 1. AI Philosophy

### 1.1 Core Principle: Separation of Concerns

```
┌─────────────────────────────────────────────────────────────┐
│                    PRIX. INTELLIGENCE                       │
├─────────────────────────┬─────────────────────────────────┤
│   PRICING ENGINE         │   AI LAYER                       │
│   (Deterministic)       │   (Probabilistic)               │
├─────────────────────────┼─────────────────────────────────┤
│ • Profit calculation    │ • Plain language explanation     │
│ • Margin computation    │ • Business recommendation       │
│ • Break-even analysis   │ • Promotion optimization        │
│ • Scenario simulation   │ • Data quality assessment       │
├─────────────────────────┼─────────────────────────────────┤
│ Mục tiêu: CHÍNH XÁC     │ Mục tiêu: HỮU ÍCH                │
└─────────────────────────┴─────────────────────────────────┘
```

**Nguyên tắc vàng:**
- **Engine** chịu trách nhiệm về tính chính xác (mọi con số bằng công thức toán)
- **AI** chịu trách nhiệm về diễn giải và gợi ý (chuyển số thành hành động)

**Lý do:** Loại bỏ hoàn toàn rủi ro "ảo giác" (hallucination) trong các con số tài chính nhạy cảm.

---

## 2. AI Data Pipeline

### 2.1 Data Flow Architecture

```
Pricing Engine 
    → JSON Snapshot 
    → AI Prompt Template 
    → Business Insight
```

### 2.2 Input Structure (Context Injection)

AI nhận dữ liệu đã được chuẩn hóa, KHÔNG phải dữ liệu thô:

```json
{
  "product": {
    "name": "Bánh Mì Thịt",
    "currentPrice": 35000,
    "targetMargin": 0.45
  },
  "calculation": {
    "productionCost": 19250,
    "totalEffectiveCost": 24600,
    "profit": 10400,
    "margin": 0.297,
    "status": "watch"
  },
  "channel": {
    "name": "ShopeeFood",
    "commissionRate": 0.22,
    "paymentFee": 0.02,
    "totalFeeRate": 0.24
  },
  "confidence": {
    "score": 0.85,
    "missingFields": [],
    "warnings": []
  }
}
```

---

## 3. Prompt Engineering Strategy

### 3.1 Prompt Template Types

| Template | Purpose | Tone |
|---|---|---|
| **ExplainPricing** | Giải thích "Tại sao con số này?" | Educational, Encouraging |
| **SuggestPromotion** | So sánh scenarios, đề xuất tối ưu | Analytical, Direct |
| **AlertDanger** | Cảnh báo sản phẩm đang lỗ | Urgent, Action-oriented |
| **DataQuality** | Giải thích missing/estimated data | Honest, Transparent |

### 3.2 ExplainPricing Template

```
## Role
Bạn là một chuyên gia tài chính F&B, giải thích mọi thứ bằng ngôn ngữ đơn giản.

## Context
- Sản phẩm: {productName}
- Giá hiện tại: {currentPrice}đ
- Chi phí sản xuất: {productionCost}đ
- Chi phí hiệu quả (đã bao gồm phí kênh): {totalEffectiveCost}đ
- Lợi nhuận: {profit}đ
- Margin hiện tại: {margin}%
- Margin mục tiêu: {targetMargin}%
- Trạng thái: {status}

## Task
Giải thích tình trạng pricing của sản phẩm này theo cách:
1. Dễ hiểu cho chủ quán không có nền tảng tài chính
2. Cho biết VÌ SAO con số này như vậy
3. Đề xuất 1-2 hành động cụ thể

## Constraints
- Không đề xuất giá cố định (để Engine tính)
- Tập trung vào INSIGHT và ACTION
- Dùng ngôn ngữ tiếng Việt thân thiện
```

### 3.3 SuggestPromotion Template

```
## Role
Bạn là một chuyên gia marketing F&B, tối ưu hóa khuyến mãi để bảo vệ margin.

## Context
Sản phẩm: {productName}
Giá gốc: {basePrice}đ
Margin hiện tại: {currentMargin}%
Margin mục tiêu: {targetMargin}%

Các kịch bản khuyến mãi đang xem xét:
{scenariosList}

## Task
1. Phân tích từng kịch bản: Lợi/hại gì?
2. Xếp hạng các kịch bản theo mức độ bảo vệ margin
3. Đề xuất kịch bản TỐI ƯU NHẤT
4. Cảnh báo nếu có kịch bản gây LỖ

## Output Format
- Dùng bullet points
- Đánh dấu ⚠️ cho các kịch bản rủi ro
- Kết luận bằng 1 câu action-oriented
```

---

## 4. AI Features

### 4.1 Plain Language Explanation

**Before (Raw Numbers):**
> "Margin của bạn là 36.6% trong khi target là 45%. deviation: -8.4%"

**After (AI Explanation):**
> "Chiếc bánh này tốn khoảng 135.000đ để sản xuất. Khi bán trên ShopeeFood, phí kênh cao khiến bạn không đạt được mức lãi mong muốn là 45%. Hiện tại bạn đang lãi 32%, tức là thấp hơn mục tiêu 13 điểm phần trăm. **Gợi ý:** Cân nhắc tăng giá bán lên 5.000đ hoặc chuyển bán trực tiếp tại quầy để giữ margin tốt hơn."

### 4.2 Promotion Optimization

AI phân tích và đề xuất:

| Kịch bản | Margin dự kiến | Đánh giá |
|---|---|---|
| Giảm giá 10% | 22% | ⚠️ Rủi ro - dưới ngưỡng an toàn |
| Freeship | 28% | ⚠️ Chấp nhận được nhưng không tối ưu |
| Tặng thêm đồ uống nhỏ | 34% | ✅ Tốt - giữ margin cao |
| Giảm giá 5% + Freeship | 18% | ⚠️ Lỗ - không nên áp dụng |

**AI Recommendation:**
> "Thay vì giảm giá trực tiếp, hãy thử chiến lược 'Tặng thêm đồ uống nhỏ'. Cách này giữ margin ở mức 34%, cao hơn 12 điểm so với giảm giá 10%, đồng thời vẫn tạo cảm giác 'có lời' cho khách hàng."

### 4.3 Data Quality Guard

AI sử dụng `confidenceScore` để điều chỉnh độ уверенности:

| Confidence | AI Tone | Example |
|---|---|---|
| **High (0.9+)** | Quyết đoán | "Chắc chắn rằng..." |
| **Medium (0.7-0.9)** | Cân bằng | "Dựa trên dữ liệu hiện có..." |
| **Low (0.5-0.7)** | Thận trọng | "Vì bạn chưa nhập đủ chi phí nhân công, con số này chỉ mang tính tham khảo..." |
| **Very Low (<0.5)** | Cảnh báo | "⚠️ Dữ liệu chưa đủ để đưa ra khuyến nghị chính xác. Vui lòng bổ sung..." |

---

## 5. Implementation Architecture

### 5.1 AI Service Layer

```
┌─────────────────────────────────────────────────────────────┐
│                    AI SERVICE                              │
├─────────────────────────────────────────────────────────────┤
│  PromptBuilder    →  LLM Client  →  ResponseParser         │
│  (Template mgmt)     (OpenAI)      (JSON/Text extraction)  │
└─────────────────────────────────────────────────────────────┘
         ↓                  ↓                  ↓
    Context prep      API call          Result formatting
```

### 5.2 Caching Strategy

| Data Type | Cache Duration | Reason |
|---|---|---|
| Product insights | 5 minutes | Giá có thể thay đổi nhanh |
| Channel analysis | 1 hour | Phí kênh ít thay đổi |
| Promotions | 10 minutes | Scenario có thể test liên tục |

### 5.3 Fallback Strategy

Nếu AI unavailable:
1. Hiển thị raw data với basic interpretation
2. Không block user workflow
3. Log error để improve

---

## 6. Future Roadmap

### 6.1 V2 Features

| Feature | Description | Priority |
|---|---|---|
| **AI Copilot** | Chat interface cho truy vấn tự nhiên | P0 |
| **Comparative Analysis** | So sánh sản phẩm A vs B | P1 |
| **Seasonal Suggestions** | Gợi ý điều chỉnh giá theo mùa | P1 |
| **Competitor Context** | Tham chiếu giá thị trường | P2 |

### 6.2 V3 Features

| Feature | Description | Priority |
|---|---|---|
| **Proactive Alerts** | AI push notification khi margin giảm | P0 |
| **Natural Language Query** | "Sản phẩm nào của tôi đang lỗ?" | P1 |
| **Automated Reports** | Tổng hợp tuần/tháng bằng AI | P1 |

---

## 7. Evaluation Metrics

| Metric | Target | Measurement |
|---|---|---|
| **AI Response Time** | < 3 seconds | Server-side latency |
| **User Satisfaction** | > 4/5 | In-app rating |
| **Action Rate** | > 30% insights lead to action | Tracking clicks |
| **Fallback Rate** | < 5% requests fallback | Error logging |

---

*Kết luận: Hệ thống AI của Prix. là sự kết hợp giữa tính chính xác của toán học (Deterministic) và sự linh hoạt của ngôn ngữ (Probabilistic), tạo ra một trợ lý thực sự hữu ích cho chủ SME mà không gây rủi ro về sai số tài chính.*

---

*Cập nhật lần cuối: 2026-06-07 - R&D Team*