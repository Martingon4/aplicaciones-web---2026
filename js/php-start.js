// Capturar el clic en el botón send-multiplication
document.addEventListener('DOMContentLoaded', function() {
  const sendBtn = document.getElementById('send-multiplication');
  const numberInput = document.getElementById('number-input');
  const resultsList = document.getElementById('results');

  sendBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Evitar que se refresque la página

    // Obtener el valor del input
    const numero = numberInput.value.trim();

    // Validar que no esté vacío
    if (numero === '') {
      alert('Por favor, ingrese un número');
      return;
    }
    // contrasena Holaccomoestas

    // Validar que sea un número
    if (isNaN(numero) || numero === '') {
      alert('Por favor, ingrese un número válido');
      return;
    }

    // Enviar el número al archivo PHP via XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'app/multiplication-table.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
      if (xhr.status === 200) {
        let data;
        try {
          data = JSON.parse(xhr.responseText);
        } catch (error) {
          console.error('Respuesta no es JSON válido:', xhr.responseText);
          return;
        }

        if (!data.success) {
          alert(data.error || 'Ocurrió un error al procesar la solicitud');
          return;
        }

        if (!Array.isArray(data.resultados)) {
          console.warn('No se recibieron resultados de multiplicación');
          return;
        }

        resultsList.innerHTML = '';
        data.resultados.forEach(function(item) {
          const li = document.createElement('li');
          li.textContent = item.operacion;
          li.classList.add('title-secondary-color');
          resultsList.appendChild(li);
        });
      } else {
        console.error('Error en la solicitud:', xhr.status);
      }
    };

    xhr.onerror = function() {
      console.error('Error en la solicitud XMLHttpRequest');
    };

    // Enviar el dato sanitizado
  
    xhr.send('numero=' + encodeURIComponent(numero));
  });
});
