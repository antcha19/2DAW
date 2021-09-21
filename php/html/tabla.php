<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">


<?php

if (!isset($_GET['tabla']))
    die("Ejecucion incorrrecta");

$tabla = $_GET['tabla'];
?>

<h3>Tabla del <?= $tabla ?></h3>
<table border="1">
<?php
for ($i = 1; $i <= 10; $i++) {
 //   echo $tabla . " X ".$i ." = " . $tabla * $i;
  
    echo "<tr><td>$tabla x $i = </td><td>";
    echo $tabla*$i ."</td></tr>";
    
}
?>

</table>
 <a href="practicar.php?tabla=<?=$tabla?>"  class="btn btn-warning">practicar</a>

<a href="index.php"  class="btn btn-warning">Volver</a>