const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5123;

// Обслуживание статических файлов из папки билд Vite
app.use(express.static(path.join(__dirname, '../react-app/dist')));

// API маршруты
app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello from the server!' });
});

// Все остальные запросы направляются на index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-app/dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
