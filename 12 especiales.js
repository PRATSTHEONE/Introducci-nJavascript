// Funciones especiales


alert('Hola, mundo!');


var nombre = prompt('Por favor, ingrese su nombre');
console.log('Hola, ' + nombre + '!');

var respuesta = confirm('¿Está seguro de que desea continuar?');
if (respuesta === true) {
  console.log('Continuando...');
} else {
  console.log('Cancelado');
}

var numero = parseInt('10');
console.log(numero); // Imprime 10 en la consola

var numero = parseFloat('3.14');
console.log(numero); // Imprime 3.14 en la consola

var fecha = new Date(2023, 0, 1);
console.log(fecha);
// Salida: Fri Jan 01 2023 00:00:00 GMT-0500 (hora estándar de CDMX)

var numero        = -5;
var valorAbsoluto = Math.abs(numero);
console.log(valorAbsoluto); // Salida: 5

var numero = 42;
var texto  = 'La respuesta es ' + String(numero);
console.log(texto);
// Salida: La respuesta es 42