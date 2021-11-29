<?php
$servername = "localhost";
$username = "root";
$password = "root";
$bdatoos = "blog";

// Create connection
$db = mysqli_connect($servername, $username, $password, $bdatoos);

// Check connection
if (!$db) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

$sql = "SELECT e.*,u.nombre as nombre_usuario, c.nombre_categoria as nombre_cat 
from entradas as e,usuarios as u, categoria c
where u.id=e.usuarios_id
and c.id = e.categorias_id";
$result = $db->query($sql);


if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "<li>id:".$row['id']."-".$row['nombre_usuario'].'-'.
    $row['nombre_cat']."<br>";
  }
} else {
  echo "0 results";
}
/*
while($row = $result->fetch_object()) {
  echo "<li>id:".$row->id."-".$row->nombre_cat.'-'.
  $row->nombre_usuario."<br>";
}*/
$db->close();
