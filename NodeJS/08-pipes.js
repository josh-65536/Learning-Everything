var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(`${__dirname}/sample-text.txt`, 'utf8');
var myWriteStream = fs.createWriteStream(`${__dirname}/file-copy.txt`, 'utf8');

myReadStream.pipe(myWriteStream);