var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Welcome to node js simple app.');
}).listen(8082);


console.log('Server is started')