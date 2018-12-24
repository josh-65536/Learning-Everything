var fs = require('fs');

fs.readFile('README.md', 'utf8', function(error, data) {
    console.log(data);
});

console.log('Hello World!');