# Portfolio Visual & Design Standards
## (Ghi nhớ sau kiểm duyệt - Hạn chế lỗi thiết kế)

Tài liệu này lưu trữ các nguyên tắc thiết kế bắt buộc để duy trì tính thẩm mỹ cao cấp (Premium Aesthetics) cho hệ thống Portfolio.

### 1. Đồng bộ Màu sắc (Color Consistency)
- **Hệ màu chủ đạo**: Monochrome (Đen, Trắng, Xám).
- **Quy tắc sử dụng Accent**: 
    - Không sử dụng các khối màu xanh (`bg-accent`) lớn cạnh các khối màu đen/trắng nếu không có mục đích nhấn mạnh đặc biệt.
    - Màu `accent` chỉ dùng cho các điểm nhấn nhỏ (dot, line, link hover) để giữ sự tinh tế.
    - Phải đồng bộ tất cả các thẻ KPI (KPI Cards) trong cùng một hàng/khối.

### 2. Xử lý Văn bản & Bố cục (Typography & Layout)
- **Tránh tràn chữ (Text Overflow)**:
    - Hạn chế sử dụng `tracking-[0.4em]` (khoảng cách chữ quá rộng) cho các đoạn văn dài hoặc chú thích biểu đồ.
    - Sử dụng `tracking-widest` hoặc `tracking-wider` thay thế.
    - Chú thích biểu đồ (Captions) nếu quá dài phải được ngắt dòng (`<br/>`) hoặc giới hạn chiều rộng (`max-w`).
- **Font Size**: 
    - Chú thích biểu đồ nên để `text-[7px]` hoặc `text-[8px]` để trông gọn gàng, sạch sẽ.
    - Độ rộng của caption không được vượt quá độ rộng của biểu đồ.

### 3. Quy trình Kiểm duyệt (Checklist)
- [ ] Kiểm tra lỗi chính tả và danh xưng "Chúng tôi".
- [ ] Đảm bảo không có màu "lạc quẻ" (giống trường hợp hộp màu xanh trong nền xám).
- [ ] Kiểm tra responsive trên các kích thước màn hình phổ biến để tránh tràn chữ.
