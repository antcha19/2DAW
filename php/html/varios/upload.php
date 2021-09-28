<?php
if (isset($_POST['Enviar']) && $f = $_FILES['foto'] ?? []) {
    //$f=$_FILES['foto']??[];
    // if(isset($_FILES['foto'])){
    //  $f=$_FILES['foto'];
    // }

    if ($f['error'])

        $error= "Error al subir  fichero";

    else { //tenemos el fichero

        //subir fichero
        $destino = 'imagenes/' . $f['name'];
        if (!move_uploaded_file($f['tmp_name'], $destino)) {
            $error = "error al mover el fichero";
        } else {
            $error= "Subida correctamente";
        }


        //muestra el contenido en un string
        // echo file_get_contents($f['tmp_name']);

        //en un array de lineas
        // foreach(file($f['tmp_name']) as $l)
        //           echo "<li>".$l;

        /*   $fp = $fopen($f['tmp_name'], 'r');
        if (!$fp) die("error al abrir el fichero");
        while ($l = fgets($fp)) {
            echo "<li>" . $l;
        }
        fclose($fp);*/
    }
    echo "<pre>";
    var_dump($_FILES);
    var_dump($_POST);
}
require 'form.php';

?>

