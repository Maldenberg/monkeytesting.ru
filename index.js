const express = require('express');
const path = require('path');
const app = express();
const port = 4000; // или любой другой порт, который вы используете

// Указываем путь к папке с вашими статическими файлами
app.use(express.static(path.join(__dirname, '/')));

// Отправляем index.html как главный файл
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

