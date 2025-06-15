# 예시: TypeScript 앱 Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ✅ TypeScript 컴파일
RUN npm run build

# 실행
CMD ["node", "dist/app.js"]
