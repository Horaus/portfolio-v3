# Prix R&D — Content Guidelines & Lưu ý

**Mục đích:** Ghi lại các quy tắc nội dung cho trang Prix R&D Report trên portfolio, tránh lặp lỗi.
**Cập nhật lần cuối:** 2026-06-16

---

## 1. KHÔNG sử dụng nội dung local / internal

Các thông tin sau KHÔNG ĐƯỢC hiển thị trực tiếp trên portfolio:

| Loại | Ví dụ bị cấm | Lý do |
|---|---|---|
| IP nội bộ | `192.168.68.9:32000` | Lộ hạ tầng mạng nội bộ |
| Environment variables | `COOKIE_SECURE=true`, `SEED_DEMO_DATA=true` | Cấu hình bảo mật |
| Production URL cụ thể | `https://prix.pdl.io.vn` | Có thể thay đổi, không cần public |
| File paths nội bộ | `docs/13_CURRENT_STATUS.md`, `server/app.ts` | Cấu trúc source code |
| OAuth callback paths | `/api/v1/auth/google/callback` | Endpoint bảo mật |
| Docker/K3s namespace | `namespace prix` | Chi tiết DevOps |

### Cách xử lý khi buộc phải đề cập:

Mã hóa thành **khối trừu tượng (Encrypted Block)**:

```
┌─────────────────────────────────────┐
│ Container Registry    [INTERNAL]    │
│ Auth Provider         [OAUTH_2.0]  │
│ Session Security      [ENCRYPTED]  │
│ Environment Config    [PRODUCTION] │
└─────────────────────────────────────┘
```

Trong code, sử dụng component `EncryptedBlock` với cặp `{ label, value }`.

---

## 2. Thuật ngữ chuyên ngành PHẢI có chú thích

Panel bên phải ("Chú thích & Thuật ngữ") phải giải thích:
- Thuật ngữ tài chính: Margin Safety, COGS, Break-even, AOV
- Thuật ngữ kỹ thuật: Deterministic Engine, Snapshot, ORM, Multi-tenancy
- Viết tắt: MVP, BOM, ERP, POS, CI/CD, RBAC

Format mỗi entry:
```javascript
{ term: 'Margin Safety', definition: 'Ngưỡng lợi nhuận tối thiểu...' }
```

KHÔNG chỉ liệt kê nguồn file code:
```javascript
// ❌ SAI
{ source: 'docs/13_CURRENT_STATUS.md', desc: '...' }
// ✅ ĐÚNG
{ term: 'Pricing Snapshot', definition: 'Bản ghi kết quả engine tại một thời điểm...' }
```

---

## 3. Kết luận PHẢI đủ mạnh

Mỗi phase kết luận cần:
- **Ít nhất 3-4 câu** (không phải 1-2 câu ngắn)
- **Nêu rõ quyết định chính** đã đưa ra
- **Giải thích lý do** cho quyết định đó
- **Kết nối** với báo cáo tiếp theo

❌ Yếu: "Đã xác định đúng bài toán. Báo cáo 2 sẽ đi vào engine."
✅ Mạnh: "Nghiên cứu khảo sát xác nhận bài toán cốt lõi không phải thiếu doanh thu mà là thiếu khả năng nhìn thấy lợi nhuận thật. Phạm vi V1 được khóa chủ đích vào ba trụ... Quyết định này bảo vệ R&D khỏi feature creep..."

---

## 4. Cover Page bắt buộc có metadata

Trang bìa báo cáo phải hiển thị:
- **Tên dự án**: Prix. Pricing Intelligence System
- **Thời gian R&D**: T3 — T6/2026 (16 tuần)
- **Đơn vị thực hiện**: PDL Studio — R&D Division
- **Phạm vi**: V1 MVP — SME F&B Pricing

Tham khảo bố cục từ Strategy Planning page (Aurelia Strategy Board).

---

## 5. Trang Closing bắt buộc

Sử dụng `ReportClosing` component với:
- Tiêu đề kết luận tổng thể
- Tóm tắt 3-5 câu bao quát toàn bộ nội dung
- Chữ ký: "R&D Technical Lead"

---

## 6. Tham khảo bố cục từ Strategy Planning

Khi thiết kế lại trang R&D report, luôn tham khảo:
- `/vi/strategy-planning` — chuẩn về bố cục A4, metadata grid, kết luận
- `src/components/layout/ReportClosing.jsx` — component sign-off
- `src/pages/StrategyPlanning.jsx` — file source code tham khảo

---

*Tài liệu này được cập nhật mỗi khi phát hiện lỗi nội dung mới trên trang Prix R&D.*
