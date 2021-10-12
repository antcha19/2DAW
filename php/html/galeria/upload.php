<?php
require "ima_cabecera.php";
?>

<?php
if (isset($_POST['Enviar']) && $f = $_FILES['foto'] ?? []) {

    $subir = $_FILES['foto'];

    if (!$subir['name'] == null) {
        echo "<div class=mensajeerror>No tienes ninguna foto para subir</div>";
    }
    if ($subir) {
        for ($i = 0; $i < 5; $i++) {
            //cambia de destino por cada foto , subir la foto
            $destino = 'imagenes/' . $f['name'][$i];
            if (move_uploaded_file($subir['tmp_name'][$i], $destino)) {
                $error = "Subida correctamente";
                header('Location: index.php');
            }

        }
    }

    /*   echo "<pre>";
var_dump($_FILES);
var_dump($_POST);*/
}

?>

<form method="post" enctype="multipart/form-data">

    <?php
for ($i = 0; $i < 5; $i++) {
    echo "<div class=inputsubida><input type=file name=foto[] ></div><br>";
}
?>

    <div class="enviar">
        <input   type="submit" name="Enviar" value="Enviar">
    </div>
    <?=$error ?? ''
?>
</form>

</html>