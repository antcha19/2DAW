<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">


<?php





$ruta = scandir("imagenes");
for ($i = 0; $i < count($ruta); $i++) {
    if ($i > 1) {
        echo "<input type=checkbox value=imagenes/$ruta[$i] > </input>";
        echo " <img src=imagenes/$ruta[$i]>";

        
    }
}

if (isset($_POST['Borrar'])) {
    if (isset($ruta[$i])) {
        
    }
}





echo "<input type=submit name=Borrar value=Borrar>";
echo "<a class=btn btn-primary href=index.php?>Inicio</a>";


?>