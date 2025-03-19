<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $accion = $_POST['accion'];
    if ($accion == 'cancelar') {
        header("Location:index.html");
    }
    if ($accion == 'guardar') {
        // Código para guardar datos o procesar la acción de guardar
        echo "Datos guardados correctamente.";
    }
}
?>