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

Tuyệt vời\! Đây là phần còn lại của tài liệu README.md được định dạng theo yêu cầu, đảm bảo tính nhất quán với các phần trước.

-----

## ⚡ Cài đặt & Chạy Dự án

### 1️⃣ Khởi động Backend

```bash
cd server
npm install
npm run dev
```

### 2️⃣ Khởi động Frontend

```bash
cd client
npm install
npm start
```

### 💡 Gợi ý: Chạy đồng thời

Sử dụng **concurrently** để chạy cả hai dịch vụ cùng lúc (cần cài đặt: `npm install -g concurrently`):

```bash
concurrently "cd server && npm run dev" "cd client && npm start"
```

-----

## 🔐 Cấu hình Biến Môi trường

### Backend (`server/.env`)

```plaintext
PORT=5000
MONGO_URI=mongodb://localhost:27017/chatty
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

### Frontend (`client/.env`)

```plaintext
REACT_APP_API_URL=http://localhost:5000/api
```

-----

## 🌐 API Endpoints

| Method | Endpoint | Mô tả |
| :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Đăng ký người dùng mới |
| `POST` | `/api/auth/login` | Đăng nhập người dùng |
| `GET` | `/api/users/:id` | Lấy thông tin người dùng |
| `PUT` | `/api/users/:id` | Cập nhật hồ sơ cá nhân |
| `POST` | `/api/posts` | Tạo bài viết mới |
| `GET` | `/api/posts` | Lấy danh sách bài viết |
| `POST` | `/api/posts/:id/like` | Thích/Bỏ thích bài viết |
| `POST` | `/api/posts/:id/comments` | Thêm bình luận vào bài viết |

-----

## 🖼️ Upload File

  - **Môi trường Dev**: Sử dụng **Multer** để lưu ảnh vào thư mục `uploads/`.
  - **Môi trường Prod**: Sử dụng dịch vụ **Cloudinary** để lưu trữ ảnh trên cloud.

-----

## 🧠 Bảo mật

  - **Tuyệt đối** không commit file `.env` lên repository.
  - Sử dụng middleware để kiểm tra **token JWT** cho các route cần xác thực.
  - Kiểm tra quyền sở hữu trước khi cho phép sửa hoặc xóa bài viết.
  - Sử dụng các thư viện bảo mật như **helmet** và **rate-limit**.

-----

## 🚢 Triển khai (Deployment)

  - **Backend**: Heroku, Render, Railway, hoặc Docker.
  - **Frontend**: Netlify, Vercel, hoặc GitHub Pages.
  - **Database**: MongoDB Atlas.

-----

## 🧪 Testing

  - **Backend**: Kiểm tra API bằng **Jest** và **Supertest**.
  - **Frontend**: Kiểm tra giao diện người dùng bằng **React Testing Library**.

-----

## 💡 Ý tưởng Phát triển Thêm

  - **Chat Thời gian Thực**: Tích hợp **Socket.io** để hỗ trợ trò chuyện trực tuyến.
  - **Thông báo**: Gửi thông báo khi có tương tác mới (thích, bình luận, theo dõi).
  - **Reaction**: Thêm biểu tượng cảm xúc nâng cao (❤️, 😂, 😢, ...).
  - **Feed Thời gian Thực**: Cập nhật bài viết ngay lập tức mà không cần làm mới trang.
  - **Caching**: Sử dụng **Redis** để tối ưu hiệu suất truy vấn.
  - **Microservices**: Tách dịch vụ để dễ dàng mở rộng và quản lý.

-----

## 👥 Đóng góp

Chúng tôi hoan nghênh mọi đóng góp\!

1.  **Fork** repository.
2.  Tạo branch mới: `git checkout -b feature/ten-tinh-nang`.
3.  Commit và push: `git commit -m "Mô tả thay đổi" && git push`.
4.  Gửi **Pull Request** để được xem xét.

-----

## 📜 Giấy phép

Dự án được phát hành theo **MIT License**.

```
```
