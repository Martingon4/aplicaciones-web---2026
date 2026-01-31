<?php
// 1. Verificar que se recibieron dos números por POST
if ($_SERVER['REQUEST_METHOD'] === 'POST' && 
    isset($_POST['numero1']) && 
    isset($_POST['numero2'])) {
    
    // 2. Sanitizar los números
    $numero1 = trim($_POST['numero1']);
    $numero2 = trim($_POST['numero2']);
    
    // 3. Validar que sean números
    if (is_numeric($numero1) && is_numeric($numero2)) {
        // 4. Convertir a enteros
        $numero1 = intval($numero1);
        $numero2 = intval($numero2);
        
        // 5. Comparar
        if ($numero1 === $numero2) {
            $resultado = 1; // Son iguales
        } else {
            $resultado = 0; // Son diferentes
        }
        
        // 6. Devolver respuesta en JSON
        echo json_encode([
            'success' => true,
            'numero1' => $numero1,
            'numero2' => $numero2,
            'resultado' => $resultado,
            'mensaje' => ($resultado === 1) ? 'Los números son iguales' : 'Los números son diferentes'
        ]);
        
    } else {
        // Error: no son números válidos
        echo json_encode([
            'success' => false,
            'error' => 'Ambos valores deben ser números válidos'
        ]);
    }
    
} else {
    // Error: no se recibieron los datos
    echo json_encode([
        'success' => false,
        'error' => 'No se recibieron los datos correctamente'
    ]);
}
?>