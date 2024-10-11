// Debugging


var nombre = "Juan";
console.log("El nombre es: " + nombre);


function sumar(a, b) {
  debugger; // el código se detiene aquí
  return a + b;
}

try {
  var resultado = 10 / 0;
} catch (error) {
  console.log("Error: " + error.message);
}











