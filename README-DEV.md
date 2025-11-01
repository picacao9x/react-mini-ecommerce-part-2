# React Mini E-commerce — Hướng dẫn dành cho nhà phát triển

Tài liệu này mô tả nhanh các chức năng trong source, cách chạy project, và những chỗ cần chỉnh sửa khi muốn mở rộng.

Ngôn ngữ: Tiếng Việt

## Mục lục
- Tổng quan
- Chạy dự án (dev)
- Cấu trúc thư mục chính
- Các trang (pages)
- Các component quan trọng
- Dữ liệu mẫu
- Phân trang (Pagination)
- CSS / layout
- Thêm sản phẩm / ảnh
- Vấn đề thường gặp & cách khắc phục
- Gợi ý mở rộng

---

## Tổng quan
Project là một demo storefront nhỏ sử dụng Vite + React + React Router. Mục tiêu: hiển thị danh sách sản phẩm, trang theo category, trang chi tiết sản phẩm, và một header + giỏ hàng mẫu.

## Chạy dự án (dev)
Môi trường Windows (PowerShell):

```powershell
# Cài dependency lần đầu
npm install

# Chạy dev server
npm run dev

# Build sản phẩm để deploy
npm run build
```

Mặc định Vite sẽ mở ở `http://localhost:5173` (cổng có thể khác nếu đã dùng trước đó).

## Cấu trúc thư mục chính

src/
- App.jsx              — entry routes
- main.jsx             — mount React, bọc `BrowserRouter`
- pages/
  - Home.jsx
  - Products.jsx
  - Category.jsx
  - ProductDetail.jsx
  - Cart.jsx
- components/
  - Header.jsx
  - ProductCard.jsx
  - Pagination.jsx
- data/
  - products.json
-- styles/
  - app.css

## Các trang (pages)

- `Home.jsx` — Trang chủ, hiện thị (có thể dùng để hiển thị banner, featured products, v.v.).
- `Products.jsx` — Danh sách tất cả sản phẩm, có tìm kiếm, sắp xếp và phân trang.
- `Category.jsx` — Hiển thị sản phẩm theo category (param: `:categoryName`), có tìm kiếm, sắp xếp và phân trang giống `Products`.
- `ProductDetail.jsx` — Chi tiết sản phẩm (param: `:id`).
- `Cart.jsx` — Trang giỏ hàng (hiện placeholder).

Lưu ý: `App.jsx` định nghĩa các route. Nếu muốn thay đổi trang chủ, chỉnh `/` route để render `Home`.

## Các component quan trọng

- `Header.jsx` — Header cố định (fixed) chứa điều hướng. Khi header fixed, layout chính đã có margin-top để tránh bị che.
- `ProductCard.jsx` — Component chứa layout của một sản phẩm. (Các pages hiện đang render card trực tiếp; bạn có thể refactor để dùng ProductCard)
- `Pagination.jsx` — Component phân trang đơn giản, hiển thị prev/next và danh sách số trang. Nếu `totalPages <= 1` thì hiện tại component sẽ ẩn (không hiển thị control).

## Dữ liệu mẫu
- `src/data/products.json` chứa mốc dữ liệu mẫu với trường: id, name, price, category, image.
- Ảnh hiện đang dùng URL (picsum). Nếu bạn muốn dùng ảnh local, copy ảnh vào `public/` và sửa `image` thành `/images/xxx.jpg`.

## Phân trang (Pagination)

- Logic: trong `Products.jsx` và `Category.jsx` có kiểu cấu hình:
  - `const [currentPage, setCurrentPage] = useState(1)`
  - `const itemsPerPage = 4` (mặc định hiện tại là 4)
  - Tính tổng trang: `Math.ceil(filtered.length / itemsPerPage)`
  - Lấy slice: `filtered.slice((currentPage-1)*itemsPerPage, start + itemsPerPage)`

- Thay đổi số items / trang: chỉnh `itemsPerPage` trong từng file hoặc implement dropdown để thay đổi runtime.
- Ẩn/hiện control: `Pagination.jsx` hiện ẩn khi `totalPages <= 1`. Nếu bạn muốn hiển thị luôn, sửa return condition.

## CSS / layout

- File chứa style: `src/styles/app.css`.
- Grid layout sản phẩm dùng CSS Grid với `grid-template-columns: repeat(4, minmax(200px, 1fr))` và `row-gap`/`gap` đã tối ưu để tránh dính nhau.
- `Header` fixed — nội dung chính được đẩy xuống bằng margin-top trong `App.jsx` (80px). Nếu bạn chỉnh header cao hơn, nhớ tăng margin-top.

## Thêm sản phẩm / ảnh

1. Mở `src/data/products.json` và thêm object mới với `id` duy nhất.
2. Nếu ảnh là URL, thêm `image` = full URL. Nếu ảnh local:
   - copy ảnh vào `public/images/` và set `image` = `/images/your.jpg`.
   - hoặc import ảnh trong code (cần rebuild để import local assets).

## Vấn đề thường gặp & khắc phục

- "Trang trắng" khi chạy: kiểm tra `main.jsx` có bọc `BrowserRouter` chưa, và `App.jsx` có route cho `/` hay redirect đúng không.
- Ảnh không hiện: kiểm tra `p.image` có giá trị hợp lệ không; nếu local, hãy dùng đường dẫn bắt đầu bằng `/` trỏ tới `public/`.
- Không thấy phân trang: nếu `itemsPerPage` >= tổng sản phẩm thì `totalPages` = 1, và `Pagination.jsx` ẩn control. Giải pháp: giảm `itemsPerPage` hoặc sửa `Pagination.jsx` để luôn hiển thị.

## Gợi ý mở rộng

- Lưu trang & bộ lọc vào query string (ví dụ `?page=2&search=iphone`) để linkable/shareable.
- Thêm context / redux để quản lý giỏ hàng.
- Thêm chức năng thêm/xóa sản phẩm (form admin) và lưu ra backend (mock server hoặc Firebase).
- Cải thiện pagination: ellipsis khi nhiều trang, jump-to-first/last, keyboard navigation.

---
