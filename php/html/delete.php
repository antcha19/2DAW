<?php
require "ima_cabecera.php";
?>




<?php

$ima_nombre = $_POST['ima_nombre'];

if (isset($_POST['confirmarsi'])) {

    foreach ($ima_nombre as $ruta) {
        unlink($ruta);
        echo "Se borrado correctamente";
        header('Location: index.php');
    }
    die;
}


//
if (isset($_POST['ima_nombre'])) {
    echo "<h3> Confirmar si quieres borrar</h3>";
    //muestra las imagenes selecionadas
    foreach ($ima_nombre as $ruta) {
        echo "</input> <img src=$ruta></div>";
    }
} else {
    header('Location: index.php');
}





?>
<br>
<br>
<form method="POST">
    <a href="index.php"><input type="submit" name="confirmarsi" value="Si"></input></a>
    <a href="index.php"><input type="submit" name="confirmarno" value="No"></input></a>

    <?php
    foreach ($_POST['ima_nombre'] as $ima) {
        echo "<input type=hidden name=ima_nombre[] value=$ima>";
    }
    ?>

</form>


<pre>
    <?php

    echo "GET:";
    var_dump($_GET);
    echo "POST:";
    var_dump($_POST);
    ?>
    
</body>

</html>