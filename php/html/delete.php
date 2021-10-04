<?php 
 require "ima_cabecera.php";
?>

<?php
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




//header("Location: index.php");

?>
<button class="btn btn-large btn-primary" data-toggle="confirmation"
        data-btn-ok-label="Continue" data-btn-ok-class="btn-success"
        data-btn-ok-icon-class="material-icons" data-btn-ok-icon-content="check"
        data-btn-cancel-label="Stoooop!" data-btn-cancel-class="btn-danger"
        data-btn-cancel-icon-class="material-icons" data-btn-cancel-icon-content="close"
        data-title="Is it ok?" data-content="This might be dangerous">
  Confirmation
</button>

    <pre>
    <?php

    echo "GET:";
    var_dump($_GET);
    echo "POST:";
    var_dump($_POST);


    ?>
</body>

</html>