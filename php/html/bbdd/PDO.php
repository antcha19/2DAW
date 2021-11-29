<?php
$servername = "localhost";
$username = "root";
$password = "root";
$bdatos = "blog";


try {
    $db = new PDO("mysql:host=$servername;dbname=".$bdatos, $username, $password);
    // set the PDO error mode to exception
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}


$sql = "SELECT * from entradasx";

  // output data of each row
 foreach ($db->query($sql)->fetchAll() as $row) {
    echo "<li>id:".$row['id']."-".$row['nombre_cat'].'-'.
    $row['nombre_usuario']."<br>";
 }
