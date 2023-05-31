const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8'); // Встановлюємо кодування символів

  const username = os.userInfo().username;
  const osType = os.type();
  const uptime = Math.floor(os.uptime() / 60); // перетворюємо в хвилини
  const currentDirectory = process.cwd();
  const serverFilename = path.basename(__filename);

  const responseHtml = `
    <html>
      <head>
        <meta charset="utf-8"> <!-- Додаємо метатег з кодуванням символів -->
        <title>Node.js HTTP Server</title>
      </head>
      <body>
        <h1>Інформація про сервер</h1>
        <p>Ім'я користувача: ${username}</p>
        <p>Тип операційної системи: ${osType}</p>
        <p>Час роботи системи (хвилини): ${uptime}</p>
        <p>Поточна робоча директорія: ${currentDirectory}</p>
        <p>Назва файлу сервера: ${serverFilename}</p>
      </body>
    </html>
  `;

  res.end(responseHtml);
});

server.listen(5000, 'localhost', () => {
  console.log('Сервер запущено на порту 5000');
});
