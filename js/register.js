document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('register-form');
  const verDatosLink = document.getElementById('ver-datos');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores de los campos
    const nombre = document.getElementById('nombre');
    const apellidoPaterno = document.getElementById('apellido-paterno');
    const apellidoMaterno = document.getElementById('apellido-materno');
    const nick = document.getElementById('nick');
    const correo = document.getElementById('correo');
    const password = document.getElementById('password');
    const genero = document.querySelector('input[name="genero"]:checked');

    // Validar nombre
    if (!nombre.value.trim()) {
      alert('Por favor, ingrese su nombre.');
      nombre.focus();
      return;
    }

    if (nombre.value.trim().length < 2) {
      alert('El nombre debe tener al menos 2 caracteres.');
      nombre.focus();
      return;
    }

    // Validar apellido paterno
    if (!apellidoPaterno.value.trim()) {
      alert('Por favor, ingrese su apellido paterno.');
      apellidoPaterno.focus();
      return;
    }

    if (apellidoPaterno.value.trim().length < 2) {
      alert('El apellido paterno debe tener al menos 2 caracteres.');
      apellidoPaterno.focus();
      return;
    }

    // Validar apellido materno
    if (!apellidoMaterno.value.trim()) {
      alert('Por favor, ingrese su apellido materno.');
      apellidoMaterno.focus();
      return;
    }

    if (apellidoMaterno.value.trim().length < 2) {
      alert('El apellido materno debe tener al menos 2 caracteres.');
      apellidoMaterno.focus();
      return;
    }

    // Validar nick
    if (!nick.value.trim()) {
      alert('Por favor, ingrese un nick (nombre de usuario).');
      nick.focus();
      return;
    }

    if (nick.value.trim().length < 3) {
      alert('El nick debe tener al menos 3 caracteres.');
      nick.focus();
      return;
    }

    // Validar correo
    if (!correo.value.trim()) {
      alert('Por favor, ingrese su correo electrónico.');
      correo.focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo.value.trim())) {
      alert('Por favor, ingrese un correo electrónico válido.');
      correo.focus();
      return;
    }

    // Validar contraseña
    if (!password.value) {
      alert('Por favor, ingrese una contraseña.');
      password.focus();
      return;
    }

    if (password.value.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      password.focus();
      return;
    }

    // Validar género
    if (!genero) {
      alert('Por favor, seleccione su género.');
      return;
    }

    // Recopilar datos del formulario
    const formData = new FormData(form);

    // Enviar datos usando fetch con POST
    fetch('app/register.php', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
      return response.json();
    })
    .then(data => {
      if (data.success) {
        alert('Registro exitoso: ' + data.message);
        // Mostrar el enlace "Ver datos"
        if (verDatosLink) {
          verDatosLink.removeAttribute('hidden');
        }
      } else {
        alert('Error: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Hubo un error al registrar. Por favor, intente nuevamente.');
    });
  });
});