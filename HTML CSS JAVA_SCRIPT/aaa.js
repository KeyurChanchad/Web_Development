console.log(`This is okey!!`);

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Keyur, how are you!....');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// const http  = require('http');

// const hostname = '127.0.0.1';
// const port = 80;

// const server  = http.createServer( (req, res) => {
//         res.statusCode = 80;
//         res.setHeader = ('Content-Type','text/plain');
//         res.end('Nice Backend Web site');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server Listening at http://${hostname}:${port}/`);
// });