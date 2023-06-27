// This is minimal code required for creating server in node js 

const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const fileContent = fs.readFileSync('61_math_js.html')
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type' : 'text/html'}); 
    res.end(fileContent)
    });
server.listen(80, '127.0.0.1', () => {
    console.log(`Listening on port 80 :- http://${hostname}`);
  });
// if i write 127.0.0.1 then don't write 127.0.0.1:80 in browser.
