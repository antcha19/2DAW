<?php
require 'conexiondb.php';
$db=conectadb();

$usuid =3;

$sql = "SELECT * from entradasx where id=".$db->quote($usuid);

  // output data of each row
 foreach ($db->query($sql)->fetchAll() as $row) {
    echo "<li>id:".$row['id']."-".$row['nombre_cat'].'-'.
    $row['nombre_usuario']."<br>";
 }
