const http = require('http');
const personalModule = require('./personalmodule');

const server = http.createServer((req, res) => {
  const greeting = personalModule.getGreeting('oivaniu');
  const dateTime = personalModule.getDateTime();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`<p>${dateTime}</p><h1>${greeting}, oivaniu!</h1>`);
});

const port = 8000;
server.listen(port, () => {
  console.log(`Сервер запущений на http://localhost:${port}`);
});


