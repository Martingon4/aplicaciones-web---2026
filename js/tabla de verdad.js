document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('show-or-table');
  const results = document.getElementById('or-results');

  btn.addEventListener('click', function () {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'app/table-verdad.php', true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);

        if (!data.success) {
          alert('Error al generar la tabla');
          return;
        }

        results.innerHTML = `
          <tr>
            <th>A</th>
            <th>B</th>
            <th>A OR B</th>
          </tr>
        `;

        data.tabla.forEach(fila => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${fila.a}</td>
            <td>${fila.b}</td>
            <td>${fila.resultado}</td>
          `;
          results.appendChild(tr);
        });
      }
    };

    xhr.send();
  });
});
