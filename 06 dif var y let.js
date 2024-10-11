// Diferencias entre var y let


function ejemplo() {
  console.log(nombre); // Devuelve undefined
  var nombre = 'Juan';
  console.log(nombre); // Devuelve 'Juan'
}

ejemplo();

function ejemplo() {
  console.log(nombre); // Devuelve un error
  let nombre = 'Juan';
  console.log(nombre); // Devuelve 'Juan'
}

ejemplo();