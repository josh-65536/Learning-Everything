var fs = require('fs');

var readme = fs.readFileSync('README.md', 'utf8');
console.log(readme);

fs.writeFileSync('README.txt', readme);