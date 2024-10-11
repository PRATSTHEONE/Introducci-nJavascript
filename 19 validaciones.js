// Validaciones

const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name     = document.querySelector('#name').value.trim();
  const email    = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  // Validación del campo nombre
  if (name === '') {
    alert('El campo nombre no puede estar vacío');
    return;
  }

  // Validación del campo correo electrónico
  if (!isValidEmail(email)) {
    alert('El correo electrónico no es válido');
    return;
  }

  // Validación del campo contraseña
  if (password.length < 8) {
    alert('La contraseña debe tener al menos 8 caracteres');
    return;
  }

  // Si se pasan todas las validaciones, se puede enviar el formulario
  form.submit();
});

function isValidEmail(email) {
  // Se usa una expresión regular para validar el formato del correo electrónico
  const emailRegex = /^\S+@\S+\.\S+$/;
  
  return emailRegex.test(email);
}


