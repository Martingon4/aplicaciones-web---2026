<?php
header('Content-Type: application/json');

require_once 'db_config.php';

try {
    $pdo = getDBConnection();
    
    $stmt = $pdo->query("
        SELECT id_usuario, nombre, apellido_paterno, apellido_materno, nick, correo_electronico, genero, created_at
        FROM usuarios
        ORDER BY created_at DESC
    ");
    
    $usuarios = $stmt->fetchAll();
    
    echo json_encode([
        'success' => true,
        'data' => $usuarios
    ]);
    
} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error de base de datos: ' . $e->getMessage()
    ]);
}
