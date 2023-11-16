import fs from 'fs';
const mensaje = fs.readFileSync('./assets/mensaje_02.txt', 'utf8');

function getCode(input) {
  let value = 0;
  let result = [];
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case '#':
        value++;
        break;
      case '@':
        value--;
        break;
      case '*':
        value *= value;
        break;
      case '&':
        result.push(value);
        break;
    }
  }
  return result.join('');
}

console.log(getCode(mensaje));
