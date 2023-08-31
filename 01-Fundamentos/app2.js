const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf8');

const newData = data.replace(/React/ig, 'Anegular');

console.log(newData)

fs.writeFileSync('temp/README-ang.md', newData)