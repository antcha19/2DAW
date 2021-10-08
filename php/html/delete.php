<?php
require "ima_cabecera.php";
?>



<h3> Confirmar si quieres borrar</h3>
<?php
if (!$_POST) {
    echo "No has seleccionado ninguna imagen ";
} else {
    $ima_nombre = $_POST['ima_nombre'];
    //muestra las imagenes selecionadas
    foreach ($ima_nombre as $ruta) {
        echo "</input> <img src=$ruta></div>";
    }
    if ($_POST['confirmarsi']) {
        echo "click en si";
        foreach ($ima_nombre as $ruta) {
            unlink($ruta);
        }
    }
}


?>
<br>
<br>
<form method="POST">
    <input type="submit"  name="confirmarsi" value="Si"></input>
    <a href="index.php"><input type="submit"  name="confirmarno" value="No"></input></a>
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