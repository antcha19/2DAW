<?php
if (isset($_POST['Enviar']) && $f = $_FILES['foto'] ?? []) {
    
    if ($f['error'])

        $error= "Error al subir  fichero";

    else { //tenemos el fichero

        //subir fichero
        $destino = 'imagenes/'.$f['name'];
        if (!move_uploaded_file($f['tmp_name'], $destino)) {
            $error = "error al mover el fichero";
        } else {
            $error= "Subida correctamente";
        }
    }
    echo "<pre>";
    var_dump($_FILES);
    var_dump($_POST);
}

?>