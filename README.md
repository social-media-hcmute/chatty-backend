**Chatty — Mạng xã hội
**
Ngôn ngữ: Tiếng Việt

🧩 Mô tả dự án

Chatty là một dự án mạng xã hội được xây dựng bằng Node.js, Express.js, React.js, Mongoose và Bootstrap CSS.
Người dùng có thể đăng ký, đăng nhập, đăng bài viết, bình luận, thích, theo dõi người khác và chỉnh sửa hồ sơ cá nhân.

🎯 Mục tiêu

Học và thực hành xây dựng ứng dụng Full-Stack hiện đại.

Xây dựng RESTful API sử dụng JWT Authentication.

Làm việc với MongoDB thông qua Mongoose.

Tạo giao diện người dùng hiện đại bằng React + Bootstrap.

🚀 Tính năng chính

Đăng ký / Đăng nhập (JWT)

Xác thực và phân quyền (User / Admin)

Hồ sơ người dùng (Avatar, Bio, Thông tin cơ bản)

Tạo / Sửa / Xóa bài viết (Text + Ảnh)

Like / Comment bài viết

Theo dõi / Bỏ theo dõi người dùng

Tìm kiếm người dùng hoặc bài viết

Upload ảnh (local hoặc Cloudinary)

API chuẩn RESTful có Pagination, Lọc, Sắp xếp

⚙️ Công nghệ sử dụng
Thành phần	Công nghệ
Backend	Node.js, Express.js
Frontend	React.js
Database	MongoDB + Mongoose
UI	Bootstrap CSS
Auth	JSON Web Token (JWT)
Upload	Multer / Cloudinary
Lint / Format	ESLint + Prettier
🧱 Cấu trúc thư mục
chatty/
│
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── utils/
│   │   └── index.js
│   ├── package.json
│   └── .env
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── contexts/
│   │   └── index.js
│   ├── package.json
│   └── .env
│
└── README.md

⚡ Cài đặt & chạy dự án
1️⃣ Backend
cd server
npm install
npm run dev

2️⃣ Frontend
cd client
npm install
npm start


Gợi ý: có thể dùng concurrently để chạy cả server & client cùng lúc.

🔐 Cấu hình biến môi trường
Backend (server/.env)
PORT=5000
MONGO_URI=mongodb://localhost:27017/chatty
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
NODE_ENV=development

Frontend (client/.env)
REACT_APP_API_URL=http://localhost:5000/api

🌐 API Endpoints (ví dụ)
Method	Endpoint	Mô tả
POST	/api/auth/register	Đăng ký người dùng
POST	/api/auth/login	Đăng nhập
GET	/api/users/:id	Lấy thông tin user
PUT	/api/users/:id	Cập nhật profile
POST	/api/posts	Tạo bài viết
GET	/api/posts	Lấy danh sách bài viết
POST	/api/posts/:id/like	Like / Unlike bài viết
POST	/api/posts/:id/comments	Thêm bình luận
🖼️ Upload file

Local (Dev): Dùng multer, lưu ảnh trong thư mục uploads/.

Cloud (Prod): Dùng Cloudinary để lưu ảnh trên cloud.

🧠 Bảo mật

Không commit file .env

Middleware kiểm tra token cho các route yêu cầu đăng nhập

Kiểm tra quyền sở hữu trước khi sửa / xóa bài viết

Dùng helmet, rate-limit để giảm tấn công

🚢 Triển khai

Backend: Heroku / Render / Railway / Docker

Frontend: Netlify / Vercel / GitHub Pages

Database: MongoDB Atlas

🧪 Testing (gợi ý)

Backend: Jest + Supertest

Frontend: React Testing Library

💡 Gợi ý phát triển thêm

Chat real-time (socket.io)

Thông báo real-time

Hệ thống reaction (❤️ 😂 😢 ...)

Feed cập nhật theo thời gian thực

Caching (Redis)

Microservice Architecture

👥 Đóng góp

Fork repo

Tạo branch mới: feature/ten-tinh-nang

Commit & push

Gửi Pull Request

📜 License

Dự án được phát hành theo MIT License.
