document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const hasPartnerCheckbox = document.getElementById('has-partner');
  const partnerDataDiv = document.getElementById('partner-data');

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
      } else {
        alert('Error: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Hubo un error al enviar los datos. Por favor, intente nuevamente.');
    });
  });
});
