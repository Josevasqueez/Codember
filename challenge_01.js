import { mensaje } from './assets/mensaje_01.js';

const arreglo = mensaje.split(' ').map((i) => i.toLowerCase());
const palabras = new Set(arreglo);

let response = [];
for (let item of palabras) {
  const veces = arreglo.filter((p) => p === item).length;
  response = [...response, item, veces];
}

console.log(response.join(''));
