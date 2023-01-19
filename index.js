const http = require('http');

const PORT = process.env.PORT || 8081;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World 2343 testing 2');
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at https://${HOSTNAME}:${PORT}/`);
});