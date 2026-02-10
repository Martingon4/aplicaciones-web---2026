document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('data-container');
  
  // Obtener datos desde show-data.php
  fetch('app/show-data.php')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
      return response.json();
    })
    .then(result => {
      if (result.success) {
        const data = result.data;
        
        // Construir el HTML con los datos
        let html = `
          <section class="data-section">
            <h2>Datos de nacimiento</h2>
            <ul>
              <li><strong>Hora de nacimiento:</strong> ${data.birth_hour}</li>
              <li><strong>Día de nacimiento:</strong> ${data.birth_day}</li>
              <li><strong>Mes de nacimiento:</strong> ${data.birth_month}</li>
              <li><strong>Año de nacimiento:</strong> ${data.birth_year}</li>
            </ul>
          </section>
        `;
        
        // Datos de pareja si aplica
        if (data.has_partner) {
          html += `
            <section class="data-section">
              <h2>Información de pareja</h2>
              <ul>
                <li><strong>Hora de nacimiento:</strong> ${data.partner_hour}</li>
                <li><strong>Día de nacimiento:</strong> ${data.partner_day}</li>
                <li><strong>Mes de nacimiento:</strong> ${data.partner_month}</li>
                <li><strong>Año de nacimiento:</strong> ${data.partner_year}</li>
              </ul>
            </section>
          `;
        } else {
          html += `
            <section class="data-section">
              <h2>Información de pareja</h2>
              <p>No tiene pareja registrada.</p>
            </section>
          `;
        }
        
        // Salud
        html += `
          <section class="data-section">
            <h2>Salud</h2>
            <p><strong>Enfermedades:</strong> ${data.illnesses || 'Ninguna reportada'}</p>
          </section>
        `;
        
        // Situación financiera
        html += `
          <section class="data-section">
            <h2>Situación financiera</h2>
            <p>${data.financial_status.charAt(0).toUpperCase() + data.financial_status.slice(1)}</p>
          </section>
        `;
        
        // Situación laboral
        html += `
          <section class="data-section">
            <h2>Situación laboral</h2>
            <p>${data.work_status.charAt(0).toUpperCase() + data.work_status.slice(1)}</p>
          </section>
        `;
        
        // Enlace para volver
        html += `
          <a href="get-data.html" class="btn">Volver al formulario</a>
        `;
        
        container.innerHTML = html;
      } else {
        container.innerHTML = `
          <p class="error">${result.message}</p>
          <a href="get-data.html" class="btn">Ir al formulario</a>
        `;
      }
    })
    .catch(error => {
      console.error('Error:', error);
      container.innerHTML = `
        <p class="error">Hubo un error al cargar los datos. Por favor, intente nuevamente.</p>
        <a href="get-data.html" class="btn">Ir al formulario</a>
      `;
    });
});