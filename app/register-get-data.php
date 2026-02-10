<?php
session_start();
header('Content-Type: application/json');

// Verificar si hay datos en la sesión
if (!isset($_SESSION['register_data']) || empty($_SESSION['register_data'])) {
    echo json_encode([
        'success' => false,
        'message' => 'No hay datos disponibles. Por favor, complete el registro primero.'
    ]);
    exit;
}

// Devolver los datos guardados en la sesión
echo json_encode([
    'success' => true,
    'message' => 'Datos recuperados correctamente',
    'data' => $_SESSION['register_data']
]);