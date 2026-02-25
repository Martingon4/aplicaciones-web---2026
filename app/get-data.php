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

// Verificar que haya un usuario en sesión
if (!isset($_SESSION['register_data']['id_usuario'])) {
    echo json_encode([
        'success' => false,
        'message' => 'Debe registrarse primero antes de agregar datos personales.'
    ]);
    exit;
}

$idUsuario = $_SESSION['register_data']['id_usuario'];

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

// Mapear situación financiera al formato de la base de datos
$financialMap = [
    'buena' => 'Buena',
    'regular' => 'Regular',
    'mala' => 'Mala'
];
$situacionFinanciera = $financialMap[strtolower($data['financial_status'])] ?? 'Regular';

// Mapear situación laboral al formato de la base de datos
$workMap = [
    'desempleado' => 'Desempleado',
    'empleado' => 'Empleado',
    'empresario' => 'Empresario'
];
$situacionLaboral = $workMap[strtolower($data['work_status'])] ?? 'Desempleado';

// Guardar en la base de datos
try {
    $pdo = getDBConnection();
    
    // Verificar si ya existe un registro de datos personales para este usuario
    $stmt = $pdo->prepare("SELECT id_datos FROM datos_personales WHERE id_usuario = ?");
    $stmt->execute([$idUsuario]);
    $existingData = $stmt->fetch();
    
    if ($existingData) {
        // Actualizar registro existente
        $stmt = $pdo->prepare("
            UPDATE datos_personales SET
                hora_nacimiento = ?,
                dia_nacimiento = ?,
                mes_nacimiento = ?,
                anio_nacimiento = ?,
                tengo_pareja = ?,
                hora_nacimiento_pareja = ?,
                dia_nacimiento_pareja = ?,
                mes_nacimiento_pareja = ?,
                anio_nacimiento_pareja = ?,
                enfermedades_anio = ?,
                situacion_financiera = ?,
                situacion_laboral = ?
            WHERE id_usuario = ?
        ");
        
        $stmt->execute([
            $data['birth_hour'],
            $data['birth_day'],
            $data['birth_month'],
            $data['birth_year'],
            $data['has_partner'] ? 1 : 0,
            $data['has_partner'] ? $data['partner_hour'] : null,
            $data['has_partner'] ? $data['partner_day'] : null,
            $data['has_partner'] ? $data['partner_month'] : null,
            $data['has_partner'] ? $data['partner_year'] : null,
            $data['illnesses'] ?: null,
            $situacionFinanciera,
            $situacionLaboral,
            $idUsuario
        ]);
    } else {
        // Insertar nuevo registro
        $stmt = $pdo->prepare("
            INSERT INTO datos_personales (
                id_usuario, hora_nacimiento, dia_nacimiento, mes_nacimiento, anio_nacimiento,
                tengo_pareja, hora_nacimiento_pareja, dia_nacimiento_pareja, mes_nacimiento_pareja, anio_nacimiento_pareja,
                enfermedades_anio, situacion_financiera, situacion_laboral
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ");
        
        $stmt->execute([
            $idUsuario,
            $data['birth_hour'],
            $data['birth_day'],
            $data['birth_month'],
            $data['birth_year'],
            $data['has_partner'] ? 1 : 0,
            $data['has_partner'] ? $data['partner_hour'] : null,
            $data['has_partner'] ? $data['partner_day'] : null,
            $data['has_partner'] ? $data['partner_month'] : null,
            $data['has_partner'] ? $data['partner_year'] : null,
            $data['illnesses'] ?: null,
            $situacionFinanciera,
            $situacionLaboral
        ]);
    }
    
    // Guardar datos en sesión para compartir con show-data.php
    $_SESSION['form_data'] = $data;
    
    echo json_encode([
        'success' => true,
        'message' => 'Datos recibidos y guardados correctamente',
        'data' => $data
    ]);
    
} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error de base de datos: ' . $e->getMessage()
    ]);
}
