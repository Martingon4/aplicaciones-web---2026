<?php
header('Content-Type: application/json');

// Tabla de verdad del operador OR
$tabla = [
    ['a' => 0, 'b' => 0, 'resultado' => (0 || 0)],
    ['a' => 0, 'b' => 1, 'resultado' => (0 || 1)],
    ['a' => 1, 'b' => 0, 'resultado' => (1 || 0)],
    ['a' => 1, 'b' => 1, 'resultado' => (1 || 1)],
];

// Convertir true/false a 1/0
foreach ($tabla as &$fila) {
    $fila['resultado'] = $fila['resultado'] ? 1 : 0;
}

echo json_encode([
    'success' => true,
    'tabla' => $tabla
]);
