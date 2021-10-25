<?php

$categorias = [
    1 => "linea blanca",
    2 => "TV",
    3 => "Ordenadores",
    4 => "Móviles"
];

foreach ($categorias as $cat => $value) {
 //   echo $value;
}




$articulos = [
    21 => ['nombre' => 'TV X4K', 'precio' => 300, 'categoria' => 1],
    22 => ['nombre' => 'TV y 55', 'precio' => 600, 'categoria' => 2],
    23 => ['nombre' => 'Samsung XXX', 'precio' => 1300, 'categoria' => 3]
];




foreach ($articulos as $ar => $valores) {
    //  echo $valores['nombre'];
    if ($valores['categoria'] == 2) {
        //echo $valores['nombre'];
    }
}



?>




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda</title>
</head>


<body>

    <form method="post" enctype="multipart/form-data">

        <select name="categoria[]">
            <option>Selecciona Categoria</option>
            <?php
            //click en el select
            foreach ($_POST['categoria']  as $select) {
                echo "You have selected :" .$select;
               
            }
            

            //for para mostrar las categorias en el desplegable
            foreach ($categorias as $cat => $valores_categorias) {
                echo  " <option value='$valores_categorias'>$valores_categorias</option>";
               
            }
            ?>
        </select>

    </form>

</body>

</html>

<?php 


echo "<pre>";
var_dump($articulos);
?>
