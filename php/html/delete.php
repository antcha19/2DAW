<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

<?php
if (isset($_POST['botonborrar'])) {

    $imagenes = $_POST["ima_nombre"];
    if ($f['error'])

        $error = "Error hacer clik";

    else { //tenemos el fichero

        echo "click en borrar";
        for ($i = 0; $i < count($imagenes); $i++) {
            unlink($imagenes[$i]);
        }
    }
}


?>