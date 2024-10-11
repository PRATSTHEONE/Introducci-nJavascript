// Arreglos o arrays

let diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];


let tercerDia = diasSemana[2]; // Miércoles




// Nuestro arreglo base
let numeros = [1, 2, 3, 4, 5];

console.log(numeros.length); // Devuelve 5

numeros.push(6);
console.log(numeros); // Devuelve [1, 2, 3, 4, 5, 6]

numeros.pop();
console.log(numeros); // Devuelve [1, 2, 3, 4, 5]

numeros.shift();
console.log(numeros); // Devuelve [2, 3, 4, 5]

numeros.unshift(1);
console.log(numeros); // Devuelve [1, 2, 3, 4, 5]

numeros.splice(2, 0, 2.5);
console.log(numeros); // Devuelve [1, 2, 3, 2.5, 4, 5]

let masNumeros = [6, 7, 8, 9, 10];

let todosLosNumeros = numeros.concat(masNumeros);
console.log(todosLosNumeros); // Devuelve [1, 2, 3, 2.5, 4, 5, 6, 7, 8, 9, 10]

let algunosNumeros = numeros.slice(1, 4);
console.log(algunosNumeros); // Devuelve [2, 3, 2.5]

let indiceDelDos = numeros.indexOf(2);
console.log(indiceDelDos); // Devuelve 1

let indiceDelCinco = numeros.lastIndexOf(5);
console.log(indiceDelCinco); // Devuelve 4

let numerosComoCadena = numeros.join('-');
console.log(numerosComoCadena); // Devuelve '1-2-3-2.5-4-5'

numeros.sort();
console.log(numeros); // Devuelve [1, 2, 2.5, 3, 4, 5]

numeros.reverse();
console.log(numeros); // Devuelve [5, 4, 3, 2.5, 2, 1]







