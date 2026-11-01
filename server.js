const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');
const { validarTexto } = require('./utils');

const app = express();
// Cria o banco de dados SQLite (vai gerar um arquivo avisos.db)
const db = new Database('avisos.db');

// Cria a tabela se não existir
db.exec(`
  CREATE TABLE IF NOT EXISTS avisos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    texto TEXT NOT NULL,
    data TEXT NOT NULL
  )
`);

app.use(express.json());
// Serve os arquivos do frontend que a Larissa criou na pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rota GET: listar avisos
app.get('/avisos', (req, res) => {
    const avisos = db.prepare('SELECT * FROM avisos ORDER BY id DESC').all();
    res.json(avisos);
});

// Rota POST: criar novo aviso
app.post('/avisos', (req, res) => {
    const { titulo, texto } = req.body;
    
    if (!validarTexto(titulo) || !validarTexto(texto)) {
        return res.status(400).json({ erro: 'Título e texto são obrigatórios' });
    }

    const data = new Date().toLocaleDateString('pt-BR');
    const stmt = db.prepare('INSERT INTO avisos (titulo, texto, data) VALUES (?, ?, ?)');
    const info = stmt.run(titulo, texto, data);
    
    res.status(201).json({ id: info.lastInsertRowid, titulo, texto, data });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});