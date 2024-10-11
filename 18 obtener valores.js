// Obtener valores de un formulario

const formulario = document.getElementById("miFormulario");
const campos     = formulario.elements; // todos los campos del formulario

const nombre     = campos.nombre.value;
const apellido   = campos.apellido.value;


const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput  = document.querySelector('#name');
  const emailInput = document.querySelector('#email');

  const name       = nameInput.value;
  const email      = emailInput.value;
  console.log(`Nombre: ${name}, Email: ${email}`);

  // Aquí puedes enviar la información del formulario a un servidor o hacer cualquier otra cosa con ella
  //..........

  form.reset(); // Limpia los campos del formulario después de enviar la información
});

