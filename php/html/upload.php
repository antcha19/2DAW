<?php
require "ima_cabecera.php";
?>

<?php
if (isset($_POST['Enviar']) && $f = $_FILES['foto'] ?? []) {

    $subir = $_FILES['foto'];


    for ($i = 0; $i < 5; $i++) {

        if ($f['error'][$i])

            $error = "Error al subir  fichero";

        else { //ten
            //subir fichero
            //cambia de destino por cada foto
            $destino = 'imagenes/' . $f['name'][$i];
//validamos si  se trata de un archivo pjg/gif/png
            if (move_uploaded_file($subir['tmp_name'][$i], $destino)) {
                $error = "Subida correctamente";
            } else {
                $error = "error al mover el fichero";
            }
        }
    }

    echo "<pre>";
    var_dump($_FILES);
    var_dump($_POST);
}

?>





<form method="post" enctype="multipart/form-data">

    <?php
    for ($i = 0; $i < 5; $i++) {
        echo "<input type=file name=foto[] ><br>";
    }
    ?>

    <input type="submit" name="Enviar" value="Enviar">
    <a class=btn btn-primary href=index.php?>Inicio</a>
    <?= $error ?? ''
    ?>

</form>

</html>