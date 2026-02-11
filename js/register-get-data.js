document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('data-container');
  
  // Obtener datos desde register-get-data.php
  fetch('app/register-get-data.php')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
      return response.json();
    })
    .then(result => {
      if (result.success) {
        const data = result.data;

        document.body.className = data.genero;
        
        // Construir el HTML con los datos
        let html = `
          <section class="data-section">
            <h2>Datos personales</h2>
            <ul>
              <li><strong>Nombre:</strong> ${data.nombre}</li>
              <li><strong>Apellido paterno:</strong> ${data.apellido_paterno}</li>
              <li><strong>Apellido materno:</strong> ${data.apellido_materno}</li>
            </ul>
          </section>
          
          <section class="data-section">
            <h2>Datos de cuenta</h2>
            <ul>
              <li><strong>Nick:</strong> ${data.nick}</li>
              <li><strong>Correo:</strong> ${data.correo}</li>
            </ul>
          </section>
          
          <section class="data-section">
            <h2>Género</h2>
            <p>${data.genero.charAt(0).toUpperCase() + data.genero.slice(1)}</p>
          </section>
          
          <a href="register.html" class="btn">Volver al registro</a>
        `;
        
        container.innerHTML = html;
      } else {
        container.innerHTML = `
          <p class="error">${result.message}</p>
          <a href="register.html" class="btn">Ir al registro</a>
        `;
      }
    })
    .catch(error => {
      console.error('Error:', error);
      container.innerHTML = `
        <p class="error">Hubo un error al cargar los datos. Por favor, intente nuevamente.</p>
        <a href="register.html" class="btn">Ir al registro</a>
      `;
    });
});