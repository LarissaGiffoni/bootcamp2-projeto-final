FROM node:20
WORKDIR /app
RUN apt-get update && apt-get install -y python3 make g++ libsqlite3-dev
COPY package*.json ./
RUN npm install
RUN npm rebuild better-sqlite3 --build-from-source
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]