<?php
header('Content-Type: application/json');

require_once 'db_config.php';

try {
    $pdo = getDBConnection();
    
    $stmt = $pdo->query("
        SELECT 
            dp.id_datos,
            u.nombre,
            u.apellido_paterno,
            u.nick,
            dp.hora_nacimiento,
            dp.dia_nacimiento,
            dp.mes_nacimiento,
            dp.anio_nacimiento,
            dp.tengo_pareja,
            dp.hora_nacimiento_pareja,
            dp.dia_nacimiento_pareja,
            dp.mes_nacimiento_pareja,
            dp.anio_nacimiento_pareja,
            dp.enfermedades_anio,
            dp.situacion_financiera,
            dp.situacion_laboral,
            dp.created_at
        FROM datos_personales dp
        INNER JOIN usuarios u ON dp.id_usuario = u.id_usuario
        ORDER BY dp.created_at DESC
    ");
    
    $datos = $stmt->fetchAll();
    
    echo json_encode([
        'success' => true,
        'data' => $datos
    ]);
    
} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error de base de datos: ' . $e->getMessage()
    ]);
}
