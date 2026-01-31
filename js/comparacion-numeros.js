// Capturar el clic en el botón send-multiplication
document.addEventListener('DOMContentLoaded', function() {
  const sendBtn = document.getElementById('send-comparison');
  const numero1Input = document.getElementById('numero1-input');
  const numero2Input = document.getElementById('numero2-input');
  const resultElement = document.getElementById('comparison-result');

  sendBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Evitar que se refresque la página

    // Obtener el valor del input
    const numero1 = numberInput.value.trim();
    const numero2 = numberImput.value.trim();
    // Validar que no esté vacío
    if (numero1 === '' || numero2 === '') {
      alert('Ingresa ambos numeros ');
      return;
    }
    // contrasena Holaccomoestas

    // Validar que sea un número
    if (isNaN(numero1) || isNaN(numero2)) {
      alert('Por favor, ingrese numeros  válidos');
      return;
    }

    // Enviar el número al archivo PHP via XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'app/validacion-numeros.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
      if (xhr.status === 200) {
        let data;
        try {
          data = JSON.parse(xhr.responseText);
          console.log('Datos recibidos:', data);
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

        console.log('resultsList element:', resultsList);
        resultsList.innerHTML = '';
        data.resultados.forEach(function(item) {
          const li = document.createElement('li');
          li.textContent = item.operacion;
          li.classList.add('title-secondary-color');
          resultsList.appendChild(li);
          console.log('Item agregado:', item.operacion);
        });
      } else {
        console.error('Error en la solicitud:', xhr.status);
      }
    };

    xhr.onerror = function() {
      console.error('Error en la solicitud XMLHttpRequest');
    };

    // Enviar el dato sanitizado
  
    xhr.send('numero1=' + encodeURIComponent(numero1) + '&numero2=' + encodeURIComponent(numero2));
  });
});
