// Modificar elementos

const miDiv     = document.getElementById('miDiv');
miDiv.innerHTML = 'Este es el nuevo contenido';


const miParrafo       = document.getElementById('miParrafo');
miParrafo.textContent = 'Este es el nuevo contenido del párrafo.';


// Seleccionar el elemento existente donde se agregará el nuevo elemento
var div = document.getElementById("miDiv");

// Crear el nuevo elemento
var nuevoParrafo = document.createElement("p");

// Agregar contenido al nuevo elemento
nuevoParrafo.textContent = "Este es un nuevo párrafo agregado con JavaScript.";

// Agregar el nuevo elemento al elemento existente
div.appendChild(nuevoParrafo);



// Seleccionar el primer elemento div existente con class="miDiv"
var divExistente = document.querySelector("div.miDiv");

// Crear el nuevo elemento
var nuevoParrafo = document.createElement("p");

// Agregar contenido al nuevo elemento
nuevoParrafo.textContent = "Este es un nuevo párrafo agregado después del primer div existente con class=miDiv.";

// Agregar el nuevo elemento después del elemento existente
divExistente.parentNode.insertBefore(nuevoParrafo, divExistente.nextSibling);


// Seleccionar el elemento padre
const parentElement2 = document.getElementById('parent');

// Seleccionar el elemento hijo que se desea eliminar
const childElement = document.getElementById('child');

// Eliminar el elemento hijo
parentElement2.removeChild(childElement);


// Seleccionar el elemento que se desea eliminar
const elementToRemove = document.getElementById('element');

// Eliminar el elemento
elementToRemove.remove();



// Seleccionar el elemento padre
const parentElement    = document.getElementById('parent');

// Crear el nuevo elemento que reemplazará al elemento antiguo
const newElement       = document.createElement('div');
newElement.textContent = 'Nuevo elemento';

// Seleccionar el elemento antiguo que se desea reemplazar
const oldElement       = document.getElementById('old-element');

// Reemplazar el elemento antiguo con el nuevo elemento
parentElement.replaceChild(newElement, oldElement);



