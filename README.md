Chatty - Mạng Xã Hội
Chatty là một ứng dụng mạng xã hội full-stack được xây dựng để học và thực hành công nghệ hiện đại. Người dùng có thể đăng ký, đăng nhập, đăng bài viết, bình luận, thích bài, theo dõi bạn bè và chỉnh sửa hồ sơ cá nhân.
🧩 Mô tả dự án
Chatty là một nền tảng mạng xã hội cho phép người dùng kết nối, chia sẻ nội dung và tương tác với nhau. Dự án sử dụng Node.js, Express.js, React.js, MongoDB (với Mongoose) và Bootstrap CSS để tạo ra một ứng dụng web hiện đại và thân thiện với người dùng.
🎯 Mục tiêu

Học và thực hành phát triển ứng dụng Full-Stack.
Xây dựng RESTful API với xác thực bằng JWT.
Làm việc với cơ sở dữ liệu MongoDB thông qua Mongoose.
Tạo giao diện người dùng đẹp và responsive bằng React và Bootstrap.

🚀 Tính năng chính

Đăng ký / Đăng nhập: Sử dụng JWT để xác thực.
Quản lý hồ sơ: Cập nhật avatar, bio và thông tin cá nhân.
Bài viết: Tạo, sửa, xóa bài viết (hỗ trợ văn bản và hình ảnh).
Tương tác: Thích (Like), bình luận (Comment) bài viết.
Theo dõi: Theo dõi hoặc bỏ theo dõi người dùng khác.
Tìm kiếm: Tìm kiếm người dùng hoặc bài viết.
Upload ảnh: Lưu trữ ảnh cục bộ (dev) hoặc trên Cloudinary (prod).
API mạnh mẽ: Hỗ trợ phân trang (Pagination), lọc (Filter) và sắp xếp (Sort).

⚙️ Công nghệ sử dụng





































Thành phầnCông nghệBackendNode.js, Express.jsFrontendReact.jsDatabaseMongoDB + MongooseUI FrameworkBootstrap CSSXác thựcJSON Web Token (JWT)Upload ảnhMulter (local) / Cloudinary (cloud)Code QualityESLint + Prettier
🧱 Cấu trúc thư mục
textchatty/
├── server/                     # Backend
│   ├── src/
│   │   ├── controllers/       # Xử lý logic nghiệp vụ
│   │   ├── models/            # Mô hình dữ liệu MongoDB
│   │   ├── routes/            # Định tuyến API
│   │   ├── middlewares/       # Middleware (xác thực, kiểm tra quyền, v.v.)
│   │   ├── utils/             # Các hàm tiện ích
│   │   └── index.js           # Điểm khởi chạy backend
│   ├── package.json
│   └── .env                   # Biến môi trường backend
│
├── client/                     # Frontend
│   ├── src/
│   │   ├── components/        # Các thành phần giao diện
│   │   ├── pages/             # Các trang giao diện
│   │   ├── services/          # Gọi API từ frontend
│   │   ├── contexts/          # Quản lý trạng thái ứng dụng
│   │   └── index.js           # Điểm khởi chạy frontend
│   ├── package.json
│   └── .env                   # Biến môi trường frontend
│
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
Gợi ý: Sử dụng gói concurrently để chạy cả backend và frontend cùng lúc:
bashnpm install -g concurrently
concurrently "cd server && npm run dev" "cd client && npm start"
🔐 Cấu hình biến môi trường
Backend (server/.env)
textPORT=5000
MONGO_URI=mongodb://localhost:27017/chatty
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
Frontend (client/.env)
textREACT_APP_API_URL=http://localhost:5000/api
🌐 API Endpoints (Ví dụ)


















































MethodEndpointMô tảPOST/api/auth/registerĐăng ký người dùngPOST/api/auth/loginĐăng nhậpGET/api/users/:idLấy thông tin người dùngPUT/api/users/:idCập nhật hồ sơPOST/api/postsTạo bài viếtGET/api/postsLấy danh sách bài viếtPOST/api/posts/:id/likeThích / Bỏ thích bài viếtPOST/api/posts/:id/commentsThêm bình luận
🖼️ Upload file

Môi trường phát triển (Dev): Sử dụng Multer để lưu ảnh vào thư mục uploads/.
Môi trường sản phẩm (Prod): Sử dụng Cloudinary để lưu trữ ảnh trên cloud.

🧠 Bảo mật

Không commit file .env lên repository.
Sử dụng middleware để kiểm tra token JWT cho các route yêu cầu đăng nhập.
Kiểm tra quyền sở hữu trước khi cho phép sửa hoặc xóa bài viết.
Sử dụng helmet và rate-limit để tăng cường bảo mật và giảm nguy cơ tấn công.

🚢 Triển khai

Backend: Heroku, Render, Railway hoặc Docker.
Frontend: Netlify, Vercel hoặc GitHub Pages.
Database: MongoDB Atlas.

🧪 Testing (Gợi ý)

Backend: Sử dụng Jest và Supertest để kiểm tra API.
Frontend: Sử dụng React Testing Library để kiểm tra giao diện.

💡 Ý tưởng phát triển thêm

Chat thời gian thực: Tích hợp Socket.io để hỗ trợ trò chuyện.
Thông báo thời gian thực: Gửi thông báo khi có tương tác mới.
Hệ thống reaction: Thêm các biểu tượng cảm xúc (❤️, 😂, 😢, ...).
Feed thời gian thực: Cập nhật bài viết theo thời gian thực.
Caching: Sử dụng Redis để tăng hiệu suất.
Kiến trúc Microservices: Tách các dịch vụ để dễ mở rộng.

👥 Đóng góp

Fork repository.
Tạo branch mới: git checkout -b feature/ten-tinh-nang.
Commit và push thay đổi: git commit -m "Mô tả thay đổi" && git push.
Gửi Pull Request để được xem xét.

📜 Giấy phép
Dự án được phát hành theo MIT License.
