// Eventos

var boton = document.getElementById('miBoton');

boton.addEventListener('click', function() {
  console.log('El botón ha sido clickeado');
});

boton.addEventListener('click', function(event) {
  event.stopPropagation();
  console.log('El botón ha sido clickeado');
});

// click
document.getElementById("miBoton").addEventListener("click", function() {
  console.log("Haz hecho clic en el botón");
});

// mouseover
document.getElementById("miElemento").addEventListener("mouseover", function() {
  console.log("El puntero del ratón está sobre el elemento");
});

// keydown
document.addEventListener("keydown", function(event) {
  console.log("Se ha presionado la tecla " + event.key);
});

// load
window.addEventListener("load", function() {
  console.log("La página ha sido cargada");
});

// submit
document.getElementById("miFormulario").addEventListener("submit", 
function(event) {
  event.preventDefault();
  console.log("El formulario ha sido enviado");
});

// scroll
window.addEventListener("scroll", function() {
  console.log("La página se ha desplazado");
});



