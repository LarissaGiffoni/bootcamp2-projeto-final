FROM node:20
WORKDIR /app

# Instala as ferramentas e a biblioteca do SQLite do sistema
RUN apt-get update && apt-get install -y python3 make g++ libsqlite3-dev

COPY package*.json ./
RUN npm install

# Força a compilação do zero do better-sqlite3
RUN npm rebuild better-sqlite3 --build-from-source

COPY . .
EXPOSE 3000
CMD ["node", "server.js"]