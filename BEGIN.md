```markdown
# Hướng dẫn nhanh (BEGIN)

npm create vite@latest . --template react
Dấu `.` nghĩa là: "tạo project trong thư mục hiện tại"

npm install
npm run dev

Sau đó mở trình duyệt tại http://localhost:5173
→ Nếu thấy dòng chữ Vite + React là bạn đã thành công

## Giải thích câu lệnh

- `npm create vite@latest . --template react`
  - Tạo project Vite mới sử dụng template React vào thư mục hiện tại.
  - Nếu muốn đặt tên thư mục: `npm create vite@latest my-app --template react`
  - Có thể dùng `npm init vite@latest` hoặc `yarn create vite` tương đương.

- `npm install`
  - Cài tất cả phụ thuộc trong `package.json` vào thư mục `node_modules`.
  - Nếu gặp lỗi dependency hoặc muốn cài lại sạch, chạy (PowerShell):
```powershell
Remove-Item -Recurse -Force .\node_modules
Remove-Item -Force .\package-lock.json
npm install
```
  - Trên macOS/Linux thay bằng: `rm -rf node_modules package-lock.json && npm install`

- `npm run dev`
  - Chạy Vite ở chế độ phát triển (hot-reload). Mặc định sẽ lắng nghe port 5173.
  - Muốn đổi port: `npm run dev -- --port 5174` (tham số `--` chuyển tiếp cho Vite).
  - Dừng server: nhấn Ctrl + C trong terminal.

- `npm run build`
  - (Thường có trong `package.json`) Build mã nguồn cho production vào thư mục `dist`.

- `npm run preview`
  - (Nếu có) Khởi chạy server tĩnh để xem bản build production cục bộ.

- `node -v` và `npm -v`
  - Kiểm tra phiên bản Node và npm trước khi cài đặt:
```powershell
node -v
npm -v
```

## Ghi chú nhanh
- Nếu port 5173 bị chiếm, Vite sẽ đề xuất port khác hoặc bạn có thể chạy với tham số `--port`.
- Nếu gặp lỗi do phiên bản Node, cân nhắc nâng/downgrade Node (hoặc dùng nvm) theo thông báo lỗi.
- Các lệnh xóa/đường dẫn trong ví dụ dùng PowerShell trên Windows; trên bash/sh hãy dùng cú pháp tương ứng (`rm -rf ...`).

```
npm create vite@latest . --template react
Dấu . nghĩa là: "tạo project trong thư mục hiện tại"

npm install
npm run dev

Sau đó mở trình duyệt tại http://localhost:5173
→ Nếu thấy dòng chữ Vite + React là bạn đã thành công

Bước 1: Chuẩn bị cấu trúc
Trong thư mục src/, tạo sẵn cấu trúc:
```
src/
 ├─ components/
 │   └─ ProductCard.jsx
 ├─ pages/
 │   ├─ Home.jsx
 │   └─ ProductDetail.jsx
 ├─ data/
 │   └─ products.json
 ├─ styles/
 │   ├─ reset.css
 │   └─ app.css
 ├─ App.jsx
 └─ main.jsx

```