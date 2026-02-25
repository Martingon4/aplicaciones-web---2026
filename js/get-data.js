document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const hasPartnerCheckbox = document.getElementById('has-partner');
  const partnerDataDiv = document.getElementById('partner-data');

  // Cargar tabla de datos personales al iniciar
  cargarDatosPersonales();

  // Mostrar/ocultar datos de pareja según el checkbox
  if (hasPartnerCheckbox && partnerDataDiv) {
    partnerDataDiv.style.display = hasPartnerCheckbox.checked ? 'block' : 'none';
    
    hasPartnerCheckbox.addEventListener('change', function() {
      partnerDataDiv.style.display = this.checked ? 'block' : 'none';
    });
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validar campos de nacimiento
    const birthHour = document.getElementById('birth-hour');
    const birthDay = document.getElementById('birth-day');
    const birthMonth = document.getElementById('birth-month');
    const birthYear = document.getElementById('birth-year');

    if (!birthHour.value) {
      alert('Por favor, ingrese la hora de nacimiento.');
      birthHour.focus();
      return;
    }

    if (!birthDay.value) {
      alert('Por favor, ingrese el día de nacimiento.');
      birthDay.focus();
      return;
    }

    if (!birthMonth.value) {
      alert('Por favor, ingrese el mes de nacimiento.');
      birthMonth.focus();
      return;
    }

    if (!birthYear.value) {
      alert('Por favor, ingrese el año de nacimiento.');
      birthYear.focus();
      return;
    }

    // Validar datos de pareja si el checkbox está marcado
    if (hasPartnerCheckbox.checked) {
      const partnerHour = document.getElementById('partner-hour');
      const partnerDay = document.getElementById('partner-day');
      const partnerMonth = document.getElementById('partner-month');
      const partnerYear = document.getElementById('partner-year');

      if (!partnerHour.value) {
        alert('Por favor, ingrese la hora de nacimiento de la pareja.');
        partnerHour.focus();
        return;
      }

      if (!partnerDay.value) {
        alert('Por favor, ingrese el día de nacimiento de la pareja.');
        partnerDay.focus();
        return;
      }

      if (!partnerMonth.value) {
        alert('Por favor, ingrese el mes de nacimiento de la pareja.');
        partnerMonth.focus();
        return;
      }

      if (!partnerYear.value) {
        alert('Por favor, ingrese el año de nacimiento de la pareja.');
        partnerYear.focus();
        return;
      }
    }

    // Validar situación financiera (radio buttons)
    const financialStatus = document.querySelector('input[name="financial_status"]:checked');
    if (!financialStatus) {
      alert('Por favor, seleccione su situación financiera.');
      return;
    }

    // Validar situación laboral (radio buttons)
    const workStatus = document.querySelector('input[name="work_status"]:checked');
    if (!workStatus) {
      alert('Por favor, seleccione su situación laboral.');
      return;
    }

    // Recopilar todos los datos del formulario
    const formData = new FormData(form);

    // Enviar datos usando fetch con POST
    fetch('app/get-data.php', {
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
        alert('Datos enviados correctamente: ' + data.message);
        // Mostrar el enlace "Ver datos"
        const verDatosLink = document.querySelector('a[href="show-data.html"]');
        if (verDatosLink) {
          verDatosLink.removeAttribute('hidden');
        }
        // Actualizar la tabla de datos personales
        cargarDatosPersonales();
      } else {
        alert('Error: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Hubo un error al enviar los datos. Por favor, intente nuevamente.');
    });
  });

  // Función para cargar datos personales desde la base de datos
  function cargarDatosPersonales() {
    const tbody = document.querySelector('#datos-personales-table tbody');
    
    fetch('app/list-datos-personales.php')
      .then(response => response.json())
      .then(result => {
        if (result.success && result.data.length > 0) {
          tbody.innerHTML = result.data.map(dato => {
            const fechaNacimiento = `${dato.dia_nacimiento}/${dato.mes_nacimiento}/${dato.anio_nacimiento} ${dato.hora_nacimiento || ''}`;
            const tienePareja = dato.tengo_pareja == 1 ? 'Sí' : 'No';
            const fechaPareja = dato.tengo_pareja == 1 
              ? `${dato.dia_nacimiento_pareja}/${dato.mes_nacimiento_pareja}/${dato.anio_nacimiento_pareja} ${dato.hora_nacimiento_pareja || ''}`
              : '-';
            const enfermedades = dato.enfermedades_anio || 'Ninguna';
            
            return `
              <tr>
                <td>${dato.nombre} ${dato.apellido_paterno} (${dato.nick})</td>
                <td>${fechaNacimiento}</td>
                <td>${tienePareja}</td>
                <td>${fechaPareja}</td>
                <td>${enfermedades}</td>
                <td>${dato.situacion_financiera}</td>
                <td>${dato.situacion_laboral}</td>
              </tr>
            `;
          }).join('');
        } else {
          tbody.innerHTML = '<tr><td colspan="7">No hay datos personales registrados</td></tr>';
        }
      })
      .catch(error => {
        console.error('Error al cargar datos personales:', error);
        tbody.innerHTML = '<tr><td colspan="7">Error al cargar datos</td></tr>';
      });
  }
});
