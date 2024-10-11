// Seleccionar elementos

// let elemento = document.getElementById("mi-elemento");

// let elementos = document.getElementsByClassName("mi-clase");

// let elementos = document.getElementsByTagName("p");

// let elemento = document.querySelector("#mi-elemento .mi-clase");

let elementos = document.querySelectorAll("p.mi-clase");

var p         = document.querySelector('p');
var container = p.closest('.container');

var el = document.getElementById('miElemento');
if (el.matches('.active')) {
  console.log('El elemento es activo!');
}


