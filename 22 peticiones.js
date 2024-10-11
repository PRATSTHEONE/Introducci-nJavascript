// Peticiones

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.log('Error al realizar la petición.');
  }
};

xhr.send();

// Función callback
function submitForm() {
  const xhr = new XMLHttpRequest();

  xhr.open('POST', '/submit-form');

  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log('Formulario enviado exitosamente.');
    } else {
      console.log('Error al enviar el formulario.');
    }
  };

  // Se envía el contenido del formulario como FormData
  xhr.send(new FormData(document.getElementById('my-form')));
}


// Fetch API
fetch('https://api.github.com/users/USERNAME')
.then(response => response.json())
.then(data     => console.log(data))
.catch(error   => console.error(error));


// Data que se enviará
const data = {username: 'example', password: '123456'};

fetch('https://api.example.com/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data     => console.log(data))
.catch(error   => console.error(error));


// Sintaxis general
fetch(url, {
  method: 'GET', // Método HTTP: GET, POST, PUT, DELETE, etc.
  headers: { // Encabezados de la petición
    'Content-Type': 'application/json' // Tipo de contenido
  },
  body: JSON.stringify(data) // Datos de la petición (opcional)
})
.then(response => response.json()) // Convertir la respuesta a JSON
.then(data => {
  // Manejo de la respuesta
})
.catch(error => {
  // Manejo de errores
});





