// Módulos

// archivo math.js
export function sum(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// en app.js
import { sum } from './math.js';

console.log(sum(2, 3)); // 5

const persona = { nombre: "Juan", edad: 25 };
const { nombre, edad } = persona;

console.log(nombre); // "Juan"
console.log(edad); // 25


const numeros = [1, 2, 3, 4, 5];
const [primerNumero, segundoNumero, ...otrosNumeros] = numeros;

console.log(primerNumero); // 1
console.log(segundoNumero); // 2
console.log(otrosNumeros); // [3, 4, 5]


