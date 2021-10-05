<?php
require "ima_cabecera.php";
?>





<?php
/*
if (isset($_POST['botonborrar'])) {

    $imagenes = $_POST["ima_nombre"];
    if ($f['error'])

        $error = "Error hacer clik";

    else { //tenemos el fichero

        $error = "click en borrar";
        for ($i = 0; $i < count($imagenes); $i++) {
            unlink($imagenes[$i]);
        }
    }
}
*/
//header("Location: index.php");

$imagenes = $_POST['ima_nombre'];


//muestra las imagenes selecionadas
foreach ($imagenes as $ruta) {
    echo "</input> <img src=$ruta></div>";
}

?>
<h3> Confirmar si quieres borrar</h3>
<!--<input type="submit" name="confirmarsi" value="Si">
<input type="submit" name="confirmarno" value="No">-->



<?php
//mostrar mensaje si no ha selecionado 
if (!$imagenes) {
    echo "No has seleccionado ninguna imagen ";
}
if (isset($_POST["confirmarsi"])) {
    unlink($imagenes);
    
}

?>
<br>
<br>
<form method="POST">
    <input type="submit" class="btn btn-primary" name="confirmarsi" value="Si"></input>
    <input  type="submit" class="btn btn-primary" name="confirmarno" value="No"></input>
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