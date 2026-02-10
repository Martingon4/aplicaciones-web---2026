<?php
session_start();
header('Content-Type: application/json');

// Verificar si hay datos en la sesión
if (!isset($_SESSION['form_data']) || empty($_SESSION['form_data'])) {
    echo json_encode([
        'success' => false,
        'message' => 'No hay datos disponibles. Por favor, complete el formulario primero.'
    ]);
    exit;
}

// Devolver los datos guardados en la sesión
echo json_encode([
    'success' => true,
    'message' => 'Datos recuperados correctamente',
    'data' => $_SESSION['form_data']
]);