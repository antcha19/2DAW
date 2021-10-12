<?php
require "ima_cabecera.php";
?>




<?php

$ima_nombre = $_POST['ima_nombre'];
//si pulso me borra la imagen y vuelve al index
if (isset($_POST['confirmarsi'])) {

    foreach ($ima_nombre as $ruta) {
        unlink($ruta);
        echo "Se borrado correctamente";
        header('Location: index.php');
    }
    die;
}
//si pulso no, vuelve al index
if (isset($_POST['confirmarno'])) {
    header('Location: index.php');
}

//
if (isset($_POST['ima_nombre'])) {
    echo "<h3> Confirmar si quieres borrar la imagen</h3>";
    //muestra las imagenes selecionadas
    foreach ($ima_nombre as $ruta) {
        echo "<div class=cuadrado></input> <img src=$ruta></div></div>";
    }
} else {
    //vuelve al inicio si no has ninguna foto seleccionada
    header('Location: index.php');
}

?>
<br>
<br>
<form method="POST">
    <div class="btnborrar">
    <input  type="submit" name="confirmarsi" value="Si"></input>
    <a href="index.php"><input type="submit" name="confirmarno" value="No"></input></a>
    </div>


    <?php
foreach ($_POST['ima_nombre'] as $ima) {
    echo "<input type=hidden name=ima_nombre[] value=$ima>";
}
?>

</form>


<pre>
    <?php
/*
echo "GET:";
var_dump($_GET);
echo "POST:";
var_dump($_POST);
 */
?>

</body>

</html>