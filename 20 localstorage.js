// localStorage


// localStorage.setItem('nombre', 'Juan');

// var nombre = localStorage.getItem('nombre'); // Juan

// localStorage.removeItem('nombre');


function guardarDatos() {
  var nombre     = document.getElementById('nombre').value;
  var correo     = document.getElementById('correo').value;
  var contrasena = document.getElementById('contrasena').value;

  localStorage.setItem('nombre', nombre);
  localStorage.setItem('correo', correo);
  localStorage.setItem('contrasena', contrasena);

  alert('Datos guardados correctamente.');
}

function mostrarDatos() {
  var nombre     = localStorage.getItem('nombre');
  var correo     = localStorage.getItem('correo');
  var contrasena = localStorage.getItem('contrasena');

  document.getElementById('nombre').value = nombre;
  document.getElementById('correo').value = correo;
  document.getElementById('contrasena').value = contrasena;
}

function limpiarDatos() {
  localStorage.removeItem('nombre');
  localStorage.removeItem('correo');
  localStorage.removeItem('contrasena');

  alert('Datos eliminados correctamente.');
}

