const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configura o Express para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página "Sobre"
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Rota para qualquer caminho não encontrado (404)
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'erro.html'));
});

app.post('/submit-form', (req, res) => {
    const { name, email } = req.body;
    res.send(`Formulário recebido com sucesso! Nome: ${name}, Email: ${email}`);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
