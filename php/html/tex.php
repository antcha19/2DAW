<?php
    require 'funcion.php';
    $pals=filtro('notasalumnos.csv',1);
    echo "<pre>";
    print_r($pals);