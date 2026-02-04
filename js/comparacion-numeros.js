// Capturar el clic en el botón send-multiplication
document.addEventListener('DOMContentLoaded', function() {
  const sendBtn = document.getElementById('send-comparison');
  const numero1Input = document.getElementById('numero1-input');
  const numero2Input = document.getElementById('numero2-input');
  const comparisonResult = document.getElementById('comparison-result');

  sendBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Evitar que se refresque la página

    // Obtener el valor del input
    const numero1 = numero1Input.value.trim();
    const numero2 = numero2Input.value.trim();
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

        if (!comparisonResult) {
          console.warn('No se encontró el contenedor de resultados');
          return;
        }

        comparisonResult.innerHTML = '';
        const p = document.createElement('p');
        p.textContent = data.mensaje || 'Resultado recibido';
        p.classList.add('title-secondary-color');
        comparisonResult.appendChild(p);
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
    