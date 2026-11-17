# Kế hoạch CV AI & Automation

## Mục tiêu và phạm vi

Tạo một phiên bản CV riêng cho công việc AI ứng dụng và tự động hóa quy trình, giữ nguyên CV Marketing. Đây là bản kế hoạch nội dung để duyệt trước khi triển khai giao diện; chưa thay đổi CV đang công khai.

Định vị đề xuất: **AI & Automation Specialist — Workflow & Applied AI**. Điều chỉnh chức danh theo mô tả công việc khi ứng tuyển; chưa dùng chức danh ML Engineer hoặc tuyên bố kinh nghiệm huấn luyện mô hình khi chưa có bằng chứng.

## Cấu trúc đề xuất

Ưu tiên 1–2 trang A4, giữ hệ thống trình bày hiện tại nhưng giảm các đoạn mô tả dài và điểm nhấn trùng lặp:

1. Thông tin liên hệ và chức danh mục tiêu.
2. Giới thiệu 3–4 dòng: nền tảng marketing, tư duy hệ thống, chuyển bài toán nghiệp vụ thành quy trình và sản phẩm có AI hỗ trợ.
3. Năng lực: phân tích quy trình; thiết kế workflow và dữ liệu; xác định vai trò AI, prompt và fallback; kiểm tra đầu ra. Chỉ đưa năng lực cá nhân đã xác nhận.
4. Dự án đã thực hiện: Prix đứng đầu; mỗi dự án có bài toán, đóng góp cá nhân, đầu ra và liên kết bằng chứng. Không cần đủ số lượng mới xuất bản.
5. Kinh nghiệm Marketing liên quan: rút gọn phần nghiên cứu, tổ chức công việc, dữ liệu và báo cáo. Không chuyển kinh nghiệm marketing thành kinh nghiệm xây automation nếu chưa thực hiện.
6. Công cụ, học vấn và ngôn ngữ: chỉ ghi công cụ thực sự đã dùng, phân biệt công cụ AI hỗ trợ phát triển với công nghệ của sản phẩm.

Không đưa Alpha/Beta/Gamma/Delta hoặc các ý tưởng chưa làm vào mục kinh nghiệm. Các dự án đã làm nhưng chưa viết hồ sơ R&D có thể được bổ sung sau khi thu thập thông tin; không yêu cầu dựng một báo cáo R&D dài trước.

## Dự án đầu tiên: Prix

### Bản nháp ngắn cho CV

**Prix — Hệ thống hỗ trợ quyết định giá cho SME F&B**  
**Trạng thái:** Beta theo hồ sơ portfolio; cần xác nhận đóng góp cá nhân và thời gian trước khi xuất bản CV.

- Nghiên cứu bài toán giá vốn, phí kênh bán và biên lợi nhuận; xây dựng phạm vi sản phẩm xoay quanh giá bán an toàn và mô phỏng khuyến mãi.
- Thiết kế luồng tính toán tách chi phí sản xuất, chi phí bán hàng và quyết định giá; sử dụng snapshot để lưu bối cảnh và kết quả của từng lần tính.
- Xác định vai trò AI trong diễn giải kết quả và gợi ý hành động, với dữ liệu đầu vào có cấu trúc và rule-based fallback; số liệu tài chính do pricing engine tính toán.

**Liên kết:** [Hồ sơ R&D](https://studio.pdl.io.vn/vi/rd/prix) · [Sản phẩm](https://prix.pdl.io.vn/)

Đây là bản nháp mô tả dự án từ `src/pages/PrixProject.jsx`, chưa phải xác nhận rằng cá nhân đã thực hiện toàn bộ các đầu việc trên. Khi biên tập cuối, thay các động từ bằng đúng vai trò thực tế: trực tiếp xây dựng, thiết kế, điều phối hoặc tham gia.

Không ghi số giờ tiết kiệm, tỷ lệ tăng hiệu suất, lượng người dùng, mức chính xác hoặc doanh thu nếu chưa có dữ liệu. Không khẳng định external AI đã chạy production chỉ từ tài liệu thiết kế; tài liệu hiện nêu provider là tùy chọn và có fallback. Chưa đưa repricing job, RBAC hoặc hạng mục backlog thành tính năng hoàn tất.

### English draft

**Prix — Pricing Decision Support for F&B SMEs**

- Researched product costs, channel fees and margin risks to define a focused pricing and promotion simulation workflow.
- Designed a calculation flow separating production costs, selling costs and pricing decisions, with snapshots preserving calculation context and results.
- Defined an AI explanation layer with structured inputs and a rule-based fallback, keeping financial calculations within the deterministic pricing engine.

The same role, implementation-status and evidence checks apply before publishing this English draft.

## Thông tin cần chốt trước khi viết CV cuối

- Vị trí ưu tiên: AI Automation, AI Operations hay phát triển ứng dụng AI; mô tả công việc nếu có.
- Với Prix: thời gian, vai trò cá nhân, phần trực tiếp thực hiện, công cụ đã dùng và trạng thái external AI thực tế.
- Với từng dự án khác đã làm: tên, vấn đề, workflow trước/sau, đóng góp, trạng thái, bằng chứng và kết quả đo được nếu có.
- Kinh nghiệm làm việc và học vấn: giữ thông tin hiện tại nhưng xác nhận chức danh, thời gian và mức độ đóng góp trước khi bổ sung chi tiết.

## Kế hoạch triển khai sau khi duyệt nội dung

1. Chốt nội dung tiếng Việt, sau đó biên tập bản tiếng Anh tương đương.
2. Thêm CV riêng tại `/vi/team/horaus-minh/cv/ai-automation` và `/en/team/horaus-minh/cv/ai-automation`; thêm nút trên hồ sơ cá nhân.
3. Tái sử dụng renderer và CSS CV hiện tại, tách dữ liệu Marketing và AI & Automation. Không ghi đè dữ liệu Marketing.
4. Kiểm tra trực quan hai ngôn ngữ, desktop/mobile, liên kết, nút quay lại và print A4: không cắt nội dung hoặc tạo trang trắng.
5. Chạy `rtk npm run lint` và `rtk npm run build`; chỉ commit file thuộc nhiệm vụ và push `origin/main` khi đạt. Push mã nguồn chưa đồng nghĩa với đã deploy; báo trạng thái deploy riêng.

## Prompt bổ sung các dự án đã làm nhưng chưa có hồ sơ R&D

```text
Tôi đang xây CV ứng tuyển AI & Automation trong repository portfolio 3.0.
Đọc AGENTS.md và docs/cv-ai-automation-plan.md trước khi làm.

Mục tiêu: biên tập các dự án tôi đã thực hiện thành nội dung CV ngắn gọn,
và nội dung portfolio R&D phù hợp nếu có đủ bằng chứng.
Giữ Prix là dự án đầu tiên. Không tạo dự án giả hoặc biến ý tưởng/backlog
thành kinh nghiệm đã hoàn thành. Giữ nguyên bản CV Marketing.

Thông tin từng dự án tôi cung cấp:
- Tên / thời gian / trạng thái:
- Bài toán và người sử dụng:
- Vai trò và phần tôi trực tiếp làm:
- Quy trình trước và sau khi triển khai:
- Công cụ thực sự sử dụng:
- Vai trò cụ thể của AI và phần automation:
- Đầu ra đã chạy được / phần còn dang dở:
- Bằng chứng (source, demo, tài liệu, ảnh, log):
- Kết quả đo được và cách đo, hoặc ghi chưa đo:
- Giới hạn công khai thông tin:

Trước tiên đối chiếu thông tin với nguồn có sẵn, nêu các điểm còn thiếu
và soạn mỗi dự án thành: tiêu đề, một câu mô tả, 2–3 gạch đầu dòng
về đóng góp và kết quả, liên kết bằng chứng. Không tự thêm chỉ số,
chức danh, công nghệ hoặc mức độ triển khai. Phân biệt AI hỗ trợ viết
code với AI là tính năng của sản phẩm; phân biệt automation đã chạy
với workflow mới thiết kế.

Cho tôi duyệt nội dung trước khi xuất bản. Sau khi tôi duyệt, triển khai
CV AI & Automation tiếng Việt/Anh theo cấu trúc hiện có, kiểm tra giao
diện và print A4, chạy lint/build, commit đúng phạm vi và push origin/main.
Nếu có phần không kiểm chứng được, báo rõ thay vì ghi là đã hoàn thành.
```
