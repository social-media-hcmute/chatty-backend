# Chatty - Mạng Xã Hội

**Chatty** là một ứng dụng mạng xã hội full-stack để học và thực hành công nghệ hiện đại. Người dùng có thể đăng ký, đăng nhập, đăng bài, bình luận, thích bài, theo dõi bạn bè và chỉnh sửa hồ sơ cá nhân.

## 🧩 Mô tả dự án
Chatty là nền tảng mạng xã hội cho phép kết nối, chia sẻ và tương tác. Dự án sử dụng **Node.js**, **Express.js**, **React.js**, **MongoDB** (với Mongoose) và **Bootstrap CSS** để tạo ứng dụng web hiện đại, thân thiện.

## 🎯 Mục tiêu
- Học và thực hành phát triển **Full-Stack**.
- Xây dựng **RESTful API** với xác thực **JWT**.
- Làm việc với **MongoDB** qua **Mongoose**.
- Tạo giao diện responsive với **React** và **Bootstrap**.

## 🚀 Tính năng chính
- **Đăng ký / Đăng nhập**: Xác thực bằng JWT.
- **Hồ sơ**: Cập nhật avatar, bio, thông tin cá nhân.
- **Bài viết**: Tạo, sửa, xóa bài viết (văn bản + hình ảnh).
- **Tương tác**: Thích, bình luận bài viết.
- **Theo dõi**: Theo dõi hoặc bỏ theo dõi người dùng.
- **Tìm kiếm**: Tìm người dùng hoặc bài viết.
- **Upload ảnh**: Lưu cục bộ (dev) hoặc trên **Cloudinary** (prod).
- **API**: Hỗ trợ phân trang, lọc, sắp xếp.

## ⚙️ Công nghệ sử dụng
| Thành phần       | Công nghệ                     |
|------------------|-------------------------------|
| Backend         | Node.js, Express.js          |
| Frontend        | React.js                     |
| Database        | MongoDB + Mongoose           |
| UI Framework    | Bootstrap CSS                |
| Xác thực        | JSON Web Token (JWT)         |
| Upload ảnh      | Multer (local) / Cloudinary  |
| Code Quality    | ESLint + Prettier            |

## 🧱 Cấu trúc thư mục
```plaintext
chatty/
├── server/                     # Backend của ứng dụng
│   ├── src/                   # Mã nguồn backend
│   │   ├── controllers/       # Xử lý logic nghiệp vụ
│   │   ├── models/            # Định nghĩa schema MongoDB
│   │   ├── routes/            # Định tuyến API
│   │   ├── middlewares/       # Middleware (xác thực, kiểm tra quyền, ...)
│   │   ├── utils/             # Hàm tiện ích
│   │   └── index.js           # Điểm khởi chạy backend
│   ├── package.json           # Quản lý thư viện backend
│   └── .env                   # Biến môi trường backend
├── client/                     # Frontend của ứng dụng
│   ├── src/                   # Mã nguồn frontend
│   │   ├── components/        # Thành phần giao diện React
│   │   ├── pages/             # Các trang giao diện
│   │   ├── services/          # Hàm gọi API
│   │   ├── contexts/          # Quản lý trạng thái ứng dụng
│   │   └── index.js           # Điểm khởi chạy frontend
│   ├── package.json           # Quản lý thư viện frontend
│   └── .env                   # Biến môi trường frontend
└── README.md                   # Tài liệu dự án
