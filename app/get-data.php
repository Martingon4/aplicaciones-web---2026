<?php
session_start();
header('Content-Type: application/json');

// Verificar que sea una petición POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'success' => false,
        'message' => 'Método no permitido. Use POST.'
    ]);
    exit;
}

// Recopilar datos del formulario
$data = [
    // Datos de nacimiento
    'birth_hour' => $_POST['birth_hour'] ?? '',
    'birth_day' => $_POST['birth_day'] ?? '',
    'birth_month' => $_POST['birth_month'] ?? '',
    'birth_year' => $_POST['birth_year'] ?? '',
    
    // Datos de pareja
    'has_partner' => isset($_POST['has_partner']) ? true : false,
    'partner_hour' => $_POST['partner_hour'] ?? '',
    'partner_day' => $_POST['partner_day'] ?? '',
    'partner_month' => $_POST['partner_month'] ?? '',
    'partner_year' => $_POST['partner_year'] ?? '',
    
    // Salud
    'illnesses' => $_POST['illnesses'] ?? '',
    
    // Situación financiera y laboral
    'financial_status' => $_POST['financial_status'] ?? '',
    'work_status' => $_POST['work_status'] ?? ''
];

// Validar campos obligatorios
$requiredFields = ['birth_hour', 'birth_day', 'birth_month', 'birth_year', 'financial_status', 'work_status'];
$missingFields = [];

foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        $missingFields[] = $field;
    }
}

// Si tiene pareja, validar campos de pareja
if ($data['has_partner']) {
    $partnerFields = ['partner_hour', 'partner_day', 'partner_month', 'partner_year'];
    foreach ($partnerFields as $field) {
        if (empty($data[$field])) {
            $missingFields[] = $field;
        }
    }
}

if (!empty($missingFields)) {
    echo json_encode([
        'success' => false,
        'message' => 'Faltan campos obligatorios: ' . implode(', ', $missingFields)
    ]);
    exit;
}

// Guardar datos en sesión para compartir con show-data.php
$_SESSION['form_data'] = $data;

echo json_encode([
    'success' => true,
    'message' => 'Datos recibidos correctamente',
    'data' => $data
]);
