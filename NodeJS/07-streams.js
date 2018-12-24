var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(`${__dirname}/sample-text.txt`, 'utf8');
var myWriteStream = fs.createWriteStream(`${__dirname}/file-copy.txt`, 'utf8');

myReadStream.on('data', function(chunk) {
    console.log('Received new chunk.');
    myWriteStream.write(chunk);
});