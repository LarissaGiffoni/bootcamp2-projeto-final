FROM node:20
WORKDIR /app

# Instala ferramentas necessárias para compilar o better-sqlite3
RUN apt-get update && apt-get install -y python3 make g++

COPY package*.json ./
RUN npm install

# Força a recompilação do SQLite para garantir que está perfeito
RUN npm rebuild better-sqlite3

COPY . .
EXPOSE 3000
CMD ["node", "server.js"]