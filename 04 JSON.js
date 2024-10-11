// Objetos JSON

var usuario = {
  "nombre": "Juan",
  "edad": 25,
  "direccion": {
    "calle": "Calle Principal",
    "numero": 123
  },
  "telefonos": ["12345678", "87654321"]
}

// Esto es un string
var personaJson = '{ "nombre": "Juan", "edad": 25, "direccion": { "calle": "Calle Principal", "numero": 123 }, "telefonos": ["12345678", "87654321"] }';
// Aquí se convierte en objeto json
var personaObjeto = JSON.parse(personaJson);

console.log(personaObjeto.nombre); // Imprime "Juan"
console.log(personaObjeto.telefonos[0]); // Imprime "12345678"

var personaObjeto = {
  nombre: 'Juan',
  edad: 25,
  direccion: {
    calle: 'Calle Principal',
    numero: 123
  },
  telefonos: ['12345678', '87654321']
};
var personaJson = JSON.stringify(personaObjeto);
console.log(personaJson); // Imprime la cadena JSON correspondiente al objeto










