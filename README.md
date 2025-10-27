Chatty — Mạng xã hội

Ngôn ngữ: Tiếng Việt

Mô tả dự án

Chatty là một dự án hệ thống mạng xã hội (social network) mẫu được xây dựng để học tập và triển khai thực tế. Ứng dụng gồm backend (Node.js + Express + Mongoose) và frontend (React.js + Bootstrap CSS). Người dùng có thể đăng ký/đăng nhập, tạo bài viết, like/comment, theo dõi người khác, chỉnh sửa hồ sơ, và tải ảnh lên.

Mục tiêu của dự án:

Cung cấp nền tảng để học cách xây dựng ứng dụng full-stack hiện đại.

Triển khai RESTful API với xác thực JWT.

Làm việc với MongoDB thông qua Mongoose.

Xây dựng giao diện tương tác bằng React và Bootstrap.

Tính năng chính

Đăng ký / Đăng nhập (JWT)

Xác thực và phân quyền (user vs admin)

Hồ sơ người dùng (avatar, bio, thông tin cơ bản)

Tạo / sửa / xóa bài viết (text + ảnh)

Đọc bài viết (feed), bấm like, comment

Theo dõi / bỏ theo dõi người dùng

Tìm kiếm người dùng và bài viết

Upload ảnh (local hoặc service như Cloudinary)

API chuẩn RESTful, có pagination, lọc, sắp xếp

Kiến trúc & Công nghệ

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

Frontend: React.js (functional components + hooks)

UI: Bootstrap CSS (có thể dùng react-bootstrap hoặc bootstrap thuần)

Authentication: JSON Web Token (JWT)

Upload file: Multer (hoặc Cloudinary SDK nếu dùng dịch vụ cloud)

Linting / Formatting: ESLint, Prettier (khuyến nghị)

Yêu cầu trước khi cài đặt

Node.js >= 14

npm hoặc yarn

MongoDB (cục bộ hoặc chuỗi kết nối Atlas)

(Tùy chọn) Tài khoản Cloudinary nếu muốn upload ảnh lên cloud

Cài đặt & chạy dự án (local)

Giả sử repo được chia thành hai thư mục chính: /server (backend) và /client (frontend).

1) Backend (server)
# vào thư mục server
cd server


# cài dependencies
npm install


# tạo file .env (tham khảo dưới)
# chạy server ở mode dev
npm run dev
2) Frontend (client)
# vào thư mục client
cd client


# cài dependencies
npm install


# chạy frontend
npm start

Gợi ý: có thể dùng concurrently hoặc npm-run-all để start cả hai cùng lúc từ root project nếu muốn.

Biến môi trường (.env)

Ví dụ các biến môi trường cần cấu hình cho backend (server/.env):

PORT=5000
MONGO_URI=mongodb://localhost:27017/chatty
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
NODE_ENV=development

Với frontend (client/.env hoặc config):

REACT_APP_API_URL=http://localhost:5000/api
Cấu trúc thư mục gợi ý
/chatty-root
│
├─ server
│  ├─ src
│  │  ├─ controllers
│  │  ├─ models
│  │  ├─ routes
│  │  ├─ middlewares
│  │  ├─ utils
│  │  ├─ services
│  │  └─ index.js (app entry)
│  ├─ package.json
│  └─ .env
│
├─ client
│  ├─ src
│  │  ├─ components
│  │  ├─ pages
│  │  ├─ hooks
│  │  ├─ services (API calls)
│  │  ├─ contexts (AuthContext)
│  │  └─ index.js
│  ├─ package.json
│  └─ .env
│
└─ README.md
API cơ bản (ví dụ)

Prefix: /api

POST /api/auth/register — đăng ký

POST /api/auth/login — đăng nhập (trả JWT)

GET /api/users/:id — lấy thông tin user

PUT /api/users/:id — cập nhật profile (auth)

POST /api/posts — tạo bài viết (auth)

GET /api/posts — lấy feed / posts (pagination, sort)

GET /api/posts/:id — lấy chi tiết bài viết

PUT /api/posts/:id — sửa bài viết (auth, owner)

DELETE /api/posts/:id — xóa bài viết (auth, owner)

POST /api/posts/:id/like — like/unlike

POST /api/posts/:id/comments — thêm comment

GET /api/search — tìm kiếm

Bạn nên dùng Postman / Insomnia để tạo collection API và chia sẻ.

Lưu trữ file (ảnh)

Có hai lựa chọn hay dùng:

Lưu file tại server (nên chỉ cho môi trường dev) — sử dụng multer để lưu vào thư mục uploads/ và phục vụ tĩnh.

Lưu ảnh trên dịch vụ cloud (Cloudinary, S3) — upload từ server (hoặc trực tiếp từ client thông qua signed URL).

Bảo mật

Lưu trữ JWT_SECRET an toàn (không commit vào git)

Xác thực các route quan trọng (middleware kiểm tra token)

Kiểm tra quyền sở hữu khi sửa/xóa bài viết

Giới hạn kích thước file upload và lọc loại file

Sử dụng helmet, express-rate-limit để giảm rủi ro

Deployment (gợi ý)

Backend: deploy lên Heroku / Render / DigitalOcean / Railway / Vercel (serverless), hoặc containerize bằng Docker.

Frontend: deploy lên Netlify / Vercel / Surge / GitHub Pages (nếu build tĩnh)

Cấu hình biến môi trường ở môi trường production.

Ví dụ Docker (tóm tắt):

Viết Dockerfile cho server

Viết Dockerfile cho client (build stage) hoặc chỉ dùng CDN để serve build tĩnh

Dùng Docker Compose nếu muốn chạy cùng 1 stack với MongoDB cục bộ

Testing

Backend: viết unit tests cho controllers, integration tests cho routes (Jest + Supertest)

Frontend: test components bằng React Testing Library

Lint / Format

Cấu hình ESLint + Prettier cho cả server và client để giữ style consistent.

Gợi ý phát triển thêm (tính năng mở rộng)

Hệ thống thông báo real-time (socket.io)

Chat real-time 1-1 và nhóm

Realtime feed (push khi có bài mới từ người mình follow)

Hệ thống reaction (nhiều kiểu cảm xúc)

Multi-image posts, albums

Redis caching cho feed và rate-limiting

Microservices (tách service upload, notification,...)

Đóng góp

Fork repo

Tạo branch feature: feature/ten-tinh-nang

Commit, push và mở Pull Request

Đảm bảo test pass và giữ coding style
