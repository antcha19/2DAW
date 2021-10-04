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
?>




<h3> Confirmar si quieres borrar</h3>
<input type="submit" name="confirmarsi" value="Si">
<input type="submit" name="confirmarno" value="No">


<pre>
    <?php

    echo "GET:";
    var_dump($_GET);
    echo "POST:";
    var_dump($_POST);




    ?>
</body>

</html>