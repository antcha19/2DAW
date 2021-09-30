<?php
if (isset($_POST['Enviar']) && $f = $_FILES['foto'] ?? []) {

    if ($f['error'])

        $error = "Error al subir  fichero";

    else { //tenemos el fichero

        //subir fichero
        $destino = 'imagenes/' . $f['name'];

        if (!move_uploaded_file($f['tmp_name'], $destino)) {
            $error = "error al mover el fichero";
        } else {
            $error = "Subida correctamente";
        }
    }
    echo "<pre>";
    var_dump($_FILES);
    var_dump($_POST);
}

?>



<html>
<link href="imagenes.css" rel="stylesheet" type="text/css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

<form method="post" enctype="multipart/form-data">

    <?php

    //   for ($i = 0; $i < 5; $i++) {
    //     echo "<input type=file name=foto[]><br>";
    //}
    ?>
    <input type=file name=foto><br>
    <input type="submit" name="Enviar" value="Enviar">


    <a class=btn btn-primary href=index.php?>Inicio</a>



    <?= $error ?? '' ?>
</form>

</html>