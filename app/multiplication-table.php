<?php
// Verificar que se recibió el dato por POST
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['numero'])) {
  // Sanitizar y validar el número
  $numero = trim($_POST['numero']);
  
  // Validar que sea un número
  if (is_numeric($numero)) {
    $numero = intval($numero);
    
    // Aquí recibes el número en PHP
    echo json_encode([
      'success' => true,
      'numero' => $numero,
      'mensaje' => 'Número recibido correctamente: ' . $numero
    ]);
  } else {
    echo json_encode([
      'success' => false,
      'error' => 'El valor no es un número válido'
    ]);
  }
} else {
  echo json_encode([
    'success' => false,
    'error' => 'No se recibió el dato'
  ]);
}
?>