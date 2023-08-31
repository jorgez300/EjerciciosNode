const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf8');

const arreglo = data.split(' ');
const arreglo2 = data.split(' ').filter(item => item.toLowerCase().includes('react'));

const contador = data.match(/react/gi ?? []).length;


console.log(arreglo.length)
console.log(arreglo2.length)
console.log(contador)


