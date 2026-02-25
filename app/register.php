<?php
session_start();
header('Content-Type: application/json');

require_once 'db_config.php';

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

// Mapear género al formato de la base de datos
$generoMap = [
    'masculino' => 'Masculino',
    'femenino' => 'Femenino',
    'otro' => 'Otro'
];
$generoDb = $generoMap[strtolower($data['genero'])] ?? 'Otro';

// Guardar en la base de datos
try {
    $pdo = getDBConnection();
    
    // Verificar si el nick o correo ya existen
    $stmt = $pdo->prepare("SELECT id_usuario FROM usuarios WHERE nick = ? OR correo_electronico = ?");
    $stmt->execute([$data['nick'], $data['correo']]);
    
    if ($stmt->fetch()) {
        echo json_encode([
            'success' => false,
            'message' => 'El nick o correo electrónico ya están registrados.'
        ]);
        exit;
    }
    
    // Insertar el nuevo usuario
    $stmt = $pdo->prepare("
        INSERT INTO usuarios (nombre, apellido_paterno, apellido_materno, nick, correo_electronico, contrasena_hash, genero)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ");
    
    $passwordHash = password_hash($data['password'], PASSWORD_DEFAULT);
    
    $stmt->execute([
        $data['nombre'],
        $data['apellido_paterno'],
        $data['apellido_materno'],
        $data['nick'],
        $data['correo'],
        $passwordHash,
        $generoDb
    ]);
    
    $userId = $pdo->lastInsertId();
    
    // Guardar datos en sesión para compartir con register-get-data.php
    // No guardamos la contraseña en texto plano para mostrar
    $_SESSION['register_data'] = [
        'id_usuario' => $userId,
        'nombre' => $data['nombre'],
        'apellido_paterno' => $data['apellido_paterno'],
        'apellido_materno' => $data['apellido_materno'],
        'nick' => $data['nick'],
        'correo' => $data['correo'],
        'genero' => $data['genero']
    ];
    
    echo json_encode([
        'success' => true,
        'message' => 'Usuario registrado correctamente',
        'id_usuario' => $userId
    ]);
    
} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error de base de datos: ' . $e->getMessage()
    ]);
}