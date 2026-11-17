# Mốc đối chiếu nội dung runtime

Cập nhật: 2026-11-17. Đây là mốc đối chiếu mã nguồn portfolio, không phải biên bản xác nhận kết quả kinh doanh hay tình trạng production của các sản phẩm.

## Thứ tự tham chiếu

1. Nội dung đang được render trong `src/pages/` và `public/cv-edit/`.
2. Bản đối chiếu này ghi lại các khác biệt đã biết.
3. Các tài liệu khác trong `Folio_Plan/` là bản kế hoạch/tham khảo lịch sử. Chúng không được đồng nhất với hiện trạng đã triển khai.

## Marketing

| Nội dung | Runtime hiện tại | Khác biệt với bản kế hoạch cũ |
| --- | --- | --- |
| Tổng ngân sách | 1.500 triệu VNĐ, ngân sách kế hoạch | Không phải chi phí thực chi đã xác minh |
| Cơ cấu | Media 400; Ads 750; KOC/PR 200; Operations/Tech 150 triệu | Bản cũ: Ads 450; Media 400; KOC/PR 300; CRM/Tech 200; dự phòng 150 |
| Thời gian chiến lược | 10 tháng, 01/04–31/01 | Bản cũ nhấn mùa hè hoặc T4–T8 |
| Phân vùng | Bắc T4–T5: 450; Trung T6–T8: 550; Nam T11–T1: 500 triệu | Bản cũ có khung tháng và phân bổ khác |
| Báo cáo growth | Bao gồm kịch bản báo cáo 5 tháng | Không được hiểu là bằng chứng triển khai đủ 10 tháng |
| Biểu đồ, KPI, kết quả | Khai báo trực tiếp trong mã; đánh dấu kế hoạch/minh họa | Chưa có hồ sơ nguồn xác minh kết quả chiến dịch |

## Prix

Trang `/vi/rd/prix` và `/en/rd/prix` dùng cùng 5 phần, mỗi phần 3 trang:

1. Khảo sát & vấn đề.
2. Engine tính giá tất định.
3. Mô hình dữ liệu theo business và lịch sử snapshot.
4. AI diễn giải, ràng buộc dữ liệu và fallback bằng quy tắc.
5. Kiến trúc, triển khai và ưu tiên kiểm thử/RBAC.

Roadmap V1/V2/V3 trong hồ sơ ngày 2026-06-07 là kế hoạch lịch sử. Không dùng các nhãn đó để suy ra tính năng đã phát hành. External AI được mô tả là lớp bổ trợ; không mặc nhiên coi là đã tích hợp production. Điểm readiness, security và biểu đồ là minh họa, không phải kết quả audit.

## CV AI Product & Automation

- Hai bản Việt/Anh dùng chung cấu trúc A4 Marketing và thứ tự: to.on → worKITool → Prix.
- Nhãn loại sản phẩm: App / Web. worKITool có tag bảo trì.
- Nội dung dựa trên thông tin chủ hồ sơ xác nhận. Nhãn App/Web chỉ là loại sản phẩm, không chứng minh trạng thái phát hành.
- Con số 5+ do chủ hồ sơ xác nhận; danh mục trong CV hiện trình bày ba dự án được cung cấp, không tự bổ sung dự án còn thiếu.

## Quy trình cập nhật

- Dùng `rtk pnpm run lint` và `rtk pnpm run build`.
- Build tạo HTML metadata riêng cho từng route VI/EN; nội dung ứng dụng vẫn render phía client, chưa phải SSR toàn trang.
- Kiểm tra route bằng trình duyệt, chụp ảnh trước/sau, giữ nguyên layout CV đã chốt.
- Bản sửa này chờ người dùng duyệt local trước khi deploy. Khi deploy phải kiểm tra Dockerfile/CI dùng pnpm và nginx phục vụ HTML theo route; không áp dụng mặc định lệnh npm hoặc reset dữ liệu cũ.
