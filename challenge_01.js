import fs from 'fs';

const mensaje = fs.readFileSync('./assets/mensaje_01.txt', 'utf8');
const arreglo = mensaje.split(' ').map((i) => i.toLowerCase());

let frecuencias = {};
for (let palabra of arreglo) {
  if (frecuencias[palabra]) {
    frecuencias[palabra]++;
  } else {
    frecuencias[palabra] = 1;
  }
}

const frecuenciasStr = Object.entries(frecuencias)
  .map(([palabra, veces]) => `${palabra}${veces}`)
  .join('');

console.log(frecuenciasStr);
