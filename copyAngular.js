const fs = require('fs');

let fileData = fs.readFileSync('./dist/kennethsite/index.html', 'utf8');

let phpFileData = fs.readFileSync('./index.php', 'utf8');

fileData = fileData.replace(`<div id="php-content"></div>`, phpFileData);


fs.writeFileSync('./dist/kennethsite/index.php', fileData);