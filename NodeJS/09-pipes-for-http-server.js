var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    console.log(`Received request: ${request.url}`);
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    var myReadStream = fs.createReadStream(`${__dirname}/sample-text.txt`, 'utf8');
    myReadStream.pipe(response);
});

server.listen(8080, '127.0.0.1');