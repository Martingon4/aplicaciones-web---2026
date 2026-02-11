<?php
// Verificar que se recibió el dato por POST
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['numero'])) {
    // valida el  número
    $numero = trim($_POST['numero']);
    
    // Validar que sea un número
    if (is_numeric($numero)) {
        $numero = intval($numero);
        
        // Resultados
        $resultados = [];
        
        // Guardar 
        for ($i = 1; $i <= 10; $i++) {
            $resultados[] = [
                'multiplicador' => $i,
                'resultado' => $numero * $i,
                'operacion' => "$numero x $i = " . ($numero * $i)
            ];
        }
        
        // Aquí recibes el número en PHP
        echo json_encode([
            'success' => true,
            'numero' => $numero,
            'mensaje' => 'Número recibido correctamente: ' . $numero,
            'resultados' => $resultados
        ]);
        
    } else {
        echo json_encode([
            'success' => false,
            'error' => 'El valor no es un número válido'
        ]);
    }
    

} else {
    echo json_encode([
        'success' => false,
        'error' => 'No se recibió el datooo00'
    ]);
}
?>