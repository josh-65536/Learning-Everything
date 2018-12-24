var http = require('http');

var server = http.createServer(function(request, response) {
    console.log(`Received HTTP request: ${request.url}`);
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World!');
});

server.listen(8080, '127.0.0.1');