# Dùng Node.js để build ứng dụng Vue.js
FROM node:20-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Sử dụng Nginx để phục vụ ứng dụng
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
