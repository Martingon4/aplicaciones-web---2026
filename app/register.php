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
    'nombre' => trim($_POST['nombre'] ?? ''),
    'apellido_paterno' => trim($_POST['apellido_paterno'] ?? ''),
    'apellido_materno' => trim($_POST['apellido_materno'] ?? ''),
    'nick' => trim($_POST['nick'] ?? ''),
    'correo' => trim($_POST['correo'] ?? ''),
    'password' => $_POST['password'] ?? '',
    'genero' => $_POST['genero'] ?? ''
];

// Validar campos obligatorios
$requiredFields = ['nombre', 'apellido_paterno', 'apellido_materno', 'nick', 'correo', 'password', 'genero'];
$missingFields = [];

foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        $missingFields[] = $field;
    }
}

if (!empty($missingFields)) {
    echo json_encode([
        'success' => false,
        'message' => 'Faltan campos obligatorios: ' . implode(', ', $missingFields)
    ]);
    exit;
}

// Validar formato de correo
if (!filter_var($data['correo'], FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'success' => false,
        'message' => 'El correo electrónico no es válido.'
    ]);
    exit;
}

// Validar longitud de contraseña
if (strlen($data['password']) < 6) {
    echo json_encode([
        'success' => false,
        'message' => 'La contraseña debe tener al menos 6 caracteres.'
    ]);
    exit;
}

// Guardar datos en sesión para compartir con register-get-data.php
// No guardamos la contraseña en texto plano para mostrar
$_SESSION['register_data'] = [
    'nombre' => $data['nombre'],
    'apellido_paterno' => $data['apellido_paterno'],
    'apellido_materno' => $data['apellido_materno'],
    'nick' => $data['nick'],
    'correo' => $data['correo'],
    'genero' => $data['genero']
];

echo json_encode([
    'success' => true,
    'message' => 'Usuario registrado correctamente'
]);