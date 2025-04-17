# 🎯 G-Scores — Hệ thống quản lý điểm thi THPTQG 2024

G-Scores là một hệ thống quản lý điểm thi THPT Quốc Gia 2024, giúp tra cứu nhanh chóng, lọc top thí sinh theo tổ hợp, và tạo báo cáo phân tích điểm theo môn học.

> Dự án được phát triển bởi **Huỳnh Mẫn**, ứng tuyển vị trí **Thực tập sinh Java** tại **Golden Owl Solutions**.

---

## 🌐 Demo Online

- 🔗 **Frontend**: [https://g-scores-frontend-lyart.vercel.app/](https://g-scores-frontend-lyart.vercel.app/)

> 💤 *Lưu ý: Backend host trên Render, lần truy cập đầu tiên có thể mất ~30 giây để "wake up"*

---

## 🛠️ Công nghệ sử dụng

### 🔧 Backend:
- Java 21
- Spring Boot
- MongoDB Atlas
- Docker

### 🎨 Frontend:
- Vue 3 (Composition API)
- Vite
- TailwindCSS

### ☁️ Hosting:
- Backend: Render
- Frontend: Vercel

---

## 🚀 Hướng dẫn chạy project local

### 1️⃣ Clone project
```bash
git clone https://github.com/mandeotv1234/G-Scores.git
cd G-Scores
2️⃣ Chạy bằng Docker Compose (Khuyên dùng)
bash
Sao chép
Chỉnh sửa
docker-compose up --build
🖥️ Frontend chạy tại: http://localhost:3000

🔙 Backend chạy tại: http://localhost:8080

⚙️ Chạy thủ công từng phần (Không dùng Docker)
Backend:
bash
Sao chép
Chỉnh sửa
cd backend
docker build -t gscores-backend .
docker run -p 8080:8080 gscores-backend
Frontend:
bash
Sao chép
Chỉnh sửa
cd frontend
npm install
npm run dev
Mặc định chạy tại: http://localhost:5173

📄 API Endpoints

Method	Endpoint	Mô tả
GET	/api/scores/{registrationnumber}	Lấy điểm theo số báo danh
GET	/api/top10/groupA	Lấy Top 10 thí sinh khối A
GET	/api/report/subject-distribution	Báo cáo phân phối điểm theo môn
📘 Chi tiết đầy đủ vui lòng tham khảo source code hoặc liên hệ để nhận file Swagger JSON.

📊 Database
Sử dụng MongoDB Atlas (cloud)

Đã seed dữ liệu thực tế từ file CSV (~1 triệu dòng tương ứng ~1 triệu thí sinh)

Có thể test performance trong môi trường dữ liệu lớn

📱 Giao diện frontend
Responsive: Hoạt động tốt trên điện thoại, tablet và PC

Giao diện đơn giản, hiện đại nhờ sử dụng TailwindCSS

Hiển thị bảng điểm, lọc top, tìm kiếm nhanh chóng

🧠 Kiến trúc hệ thống (Tổng quan)
scss
Sao chép
Chỉnh sửa
┌─────────────┐      REST API       ┌──────────────┐
│  Vue 3 App  ├────────────────────►│ Spring Boot  │
└─────────────┘                    └──────┬───────┘
                                          │
                                          ▼
                                ┌──────────────────┐
                                │ MongoDB (Atlas)  │
                                └──────────────────┘
🐳 Docker hoá toàn bộ
Cấu hình docker-compose.yml để spin up nhanh toàn bộ hệ thống

Build backend + frontend chỉ với 1 lệnh duy nhất

Thích hợp cho deploy, test CI/CD, hoặc làm demo

📝 Một vài lưu ý thêm
⏱️ Server Render cần 10–30s để "wake up" nếu không truy cập trong thời gian dài

🔐 Nếu gặp lỗi MongoDB, hãy kiểm tra IP whitelist & URI

⚡ Dù dữ liệu lớn (~1 triệu bản ghi), hệ thống vẫn phản hồi tốt

📱 Frontend thân thiện với thiết bị di động, dễ sử dụng

👨‍💻 Tác giả
Huỳnh Mẫn
Ứng tuyển vị trí Java Intern tại Golden Owl Solutions
📫 Email: mandeotv1234@gmail.com
🌐 GitHub: github.com/mandeotv1234

✨ Ghi chú cho nhà tuyển dụng
✅ Dự án được chia module rõ ràng: backend/, frontend/
✅ Docker hóa toàn bộ → chỉ cần 1 lệnh là chạy được
✅ Đã triển khai thực tế: Frontend (Vercel), Backend (Render)
✅ Dữ liệu lớn (~1 triệu bản ghi), phù hợp kiểm thử hiệu năng
✅ Luôn sẵn sàng học hỏi và cải thiện dự án từ mọi góp ý

📸 Ảnh minh họa (Giao diện)

Trang chủ	Bảng điểm theo SBD	Báo cáo thống kê
(Có thể thay thế link ảnh Imgur bằng ảnh thật nếu bạn đã upload)

🏅 Badges

✉️ Cảm ơn anh/chị đã dành thời gian xem qua project!
Nếu có góp ý gì thêm, em luôn sẵn sàng tiếp thu và cải thiện 💪

yaml
Sao chép
Chỉnh sửa

---

Nếu bạn muốn mình thêm **ảnh thật giao diện**, mình có thể tạo mockup demo hoặc hỗ trợ upload ảnh và thêm vào đúng chỗ
