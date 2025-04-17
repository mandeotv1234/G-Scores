G-Scores 🎯
G-Scores là một dự án quản lý điểm số sinh viên, được phát triển với:

Backend: Java Spring Boot

Database: MongoDB Atlas

Data seeding: CSV Seeder (Import dữ liệu từ file CSV vào MongoDB)

Frontend: Vue.js (sử dụng TailwindCSS để thiết kế nhanh và đẹp)

🌐 Demo Online
Frontend: https://g-scores-frontend-lyart.vercel.app/

(Hiện backend đang host trên Render, nên thời gian wake up lần đầu ~30s)

🚀 Công nghệ sử dụng
Backend:

Java 21

Spring Boot

MongoDB

Docker

Frontend:

Vue 3 + Vite

TailwindCSS

Hosting:

Backend: Render

Frontend: Vercel

🛠️ Hướng dẫn chạy project local
1. Clone project
git clone https://github.com/mandeotv1234/G-Scores.git
cd G-Scores
2. Chạy toàn bộ project bằng Docker Compose
Project đã chuẩn bị sẵn docker-compose.yml, chỉ cần 1 lệnh để chạy cả Backend + Frontend:
docker-compose up --build
👉 Frontend sẽ chạy ở http://localhost:3000
👉 Backend sẽ chạy ở http://localhost:8080

⚙️ Hướng dẫn nếu muốn chạy thủ công từng phần
Backend
cd backend
# Build và run Docker image
docker build -t gscores-backend .
docker run -p 8080:8080 gscores-backend

Frontend
cd frontend
npm install
npm run dev
Frontend mặc định chạy ở cổng 5173


📄 API endpoints mẫu
GET /api/scores/{registrationnumber} - Lấy điểm theo số báo danh

GET /api/top10/groupA - Lấy Top 10 sinh viên nhóm A

GET /api/report/subject-distribution - Báo cáo điểm theo môn học

(Chi tiết API tham khảo code hoặc liên hệ mình nếu cần swagger-doc nhé!)

💬 Một vài lưu ý thêm
Render đôi khi cần 10–30s để "wake up" server backend nếu server đang ngủ.

Nếu bạn gặp lỗi MongoDB, hãy kiểm tra URI hoặc cho phép IP kết nối tới cluster MongoDB.

Frontend đã responsive cơ bản, dễ dàng mở bằng điện thoại hoặc máy tính bảng.

👨‍💻 Tác giả
Huỳnh Mẫn - Ứng tuyển vị trí Thực tập sinh Java tại Golden Owl Solutions

✨ Ghi chú thêm cho người chấm
Project đã chia module rõ ràng (backend, frontend).

Docker hóa toàn bộ -> setup nhanh chóng.

Demo hoạt động thực tế trên Render + Vercel.

Em luôn sẵn sàng học hỏi thêm và cải thiện project nếu có góp ý từ anh/chị.

Cảm ơn anh/chị đã dành thời gian đánh giá project! 🙇‍♂️
