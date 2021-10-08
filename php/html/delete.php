<?php
require "ima_cabecera.php";
?>

<?php
$imagenes = $_POST['ima_nombre'];
//muestra las imagenes selecionadas
foreach ($imagenes as $ruta) {
    echo "</input> <img src=$ruta></div>";
}
?>

<h3> Confirmar si quieres borrar</h3>

<?php
//mostrar mensaje si no ha selecionado 
/*if (!$imagenes) {
    echo "No has seleccionado ninguna imagen ";
}*/


if (isset($_POST['confirmarsi'])) {
    echo "click en btn si";
    foreach ($imagenes as $ruta) {
        unlink($ruta);
    }
}

?>
<br>
<br>
<form method="POST">
    <input type="submit" class="btn btn-primary" name="confirmarsi" value="Si"></input>
    <input type="submit" class="btn btn-primary" name="confirmarno" value="No"></input>
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