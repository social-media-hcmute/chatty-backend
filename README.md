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
⚡ Cài đặt & chạy dự án
1️⃣ Backend
bashcd server
npm install
npm run dev
2️⃣ Frontend
bashcd client
npm install
npm start
Gợi ý: Chạy đồng thời backend và frontend với concurrently:
bashnpm install -g concurrently
concurrently "cd server && npm run dev" "cd client && npm start"
🔐 Cấu hình biến môi trường
Backend (server/.env)
plaintextPORT=5000
MONGO_URI=mongodb://localhost:27017/chatty
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
Frontend (client/.env)
plaintextREACT_APP_API_URL=http://localhost:5000/api
🌐 API Endpoints
MethodEndpointMô tảPOST/api/auth/registerĐăng ký người dùngPOST/api/auth/loginĐăng nhậpGET/api/users/:idLấy thông tin người dùngPUT/api/users/:idCập nhật hồ sơPOST/api/postsTạo bài viếtGET/api/postsLấy danh sách bài viếtPOST/api/posts/:id/likeThích/Bỏ thích bài viếtPOST/api/posts/:id/commentsThêm bình luận
🖼️ Upload file

Dev: Sử dụng Multer để lưu ảnh vào thư mục uploads/.
Prod: Sử dụng Cloudinary để lưu trữ ảnh trên cloud.

🧠 Bảo mật

Không commit file .env lên repository.
Sử dụng middleware để kiểm tra token JWT cho các route bảo mật.
Kiểm tra quyền sở hữu trước khi sửa hoặc xóa bài viết.
Sử dụng helmet và rate-limit để tăng cường bảo mật.

🚢 Triển khai

Backend: Heroku, Render, Railway, hoặc Docker.
Frontend: Netlify, Vercel, hoặc GitHub Pages.
Database: MongoDB Atlas.

🧪 Testing

Backend: Kiểm tra API với Jest và Supertest.
Frontend: Kiểm tra giao diện với React Testing Library.

💡 Ý tưởng phát triển thêm

Chat thời gian thực: Tích hợp Socket.io để hỗ trợ trò chuyện.
Thông báo: Gửi thông báo khi có tương tác mới.
Reaction: Thêm biểu tượng cảm xúc (❤️, 😂, 😢, ...).
Feed thời gian thực: Cập nhật bài viết ngay lập tức.
Caching: Sử dụng Redis để tối ưu hiệu suất.
Microservices: Tách dịch vụ để dễ mở rộng.

👥 Đóng góp

Fork repository.
Tạo branch mới: git checkout -b feature/ten-tinh-nang.
Commit và push: git commit -m "Mô tả thay đổi" && git push.
Gửi Pull Request để được xem xét.

📜 Giấy phép
Dự án được phát hành theo MIT License.
