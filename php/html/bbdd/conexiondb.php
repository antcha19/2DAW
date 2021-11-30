<?php

function conectadb(){
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
return $db;
}