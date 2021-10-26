<?php

$categorias = [
    1 => "linea blanca",
    2 => "TV",
    3 => "Ordenadores",
    4 => "Móviles"
];

$articulos = [
    1 => ['nombre' => 'TV X4K', 'precio' => 300, 'categoria' => 1],
    2 => ['nombre' => 'TV y 55', 'precio' => 600, 'categoria' => 2],
    3 => ['nombre' => 'Samsung XXX', 'precio' => 1300, 'categoria' => 3],
    4 => ['nombre' => 'Xiaomi', 'precio' => 1300, 'categoria' => 4],
    5 => ['nombre' => 'Samsung S21', 'precio' => 1300, 'categoria' => 4],
    6 => ['nombre' => 'LG xxx23', 'precio' => 1300, 'categoria' => 2],

    7 => ['nombre' => 'TV LED 50" - LG 50UP77006LB.AEU', 'imagen' => './imagenes/tv1.png',  'precio' => 459, 'categoria' => 2],
    8 => ['nombre' => 'TV QLED 55" - Samsung 55Q70AATXXC',  'imagen' => './imagenes/tv2.png', 'precio' => 72, 'categoria' => 2],
    9 => ['nombre' => 'TV LED 32" - Xiaomi Mi TV 4A',  'imagen' => './imagenes/tv3.png', 'precio' => 1300, 'categoria' => 2],
    10 => ['nombre' => 'TV QLED 55" - Samsung QE55Q60AAUXXC',  'imagen' => './imagenes/tv4.png', 'precio' => 1300, 'categoria' => 2],
    11 => ['nombre' => 'TV LED 55" - Samsung UE55AU7175UXXC',  'imagen' => './imagenes/tv5.png', 'precio' => 575, 'categoria' => 2],
    12 => ['nombre' => 'TV LED 24" - LG 24TN510S-PZ', 'imagen' => './imagenes/tv6.png', 'precio' => 159, 'categoria' => 2],

    13 => ['nombre' => ' Lenovo IdeaCentre 3 07ADA05, AMD Ryzen™ 5 3500U, 8GB RAM, 512GB SSD', 'precio' => 399, 'categoria' => 3],
    14 => ['nombre' => 'All in one - Lenovo IdeaCentre AIO 3 24ARE05, 23.8" FHD, AMD Ryzen™ 5 4500U, 8 GB RAM, 512 GB SSD', 'precio' => 649, 'categoria' => 3],
    15 => ['nombre' => 'Lenovo Legion 5 15IMH05, 15.6" FHD, Intel® Core™ i7-10750H, 16 GB', 'precio' => 1300, 'categoria' => 3],
    16 => ['nombre' => 'Acer Nitro 5 AN517-41, 17.3" FHD, AMD Ryzen™ 7 5800H, 16 GB RAM', 'precio' => 1539, 'categoria' => 3],
    17 => ['nombre' => 'ASUS ROG Strix G513IC-HN004T 15,6 FHD, AMD Ryzen 7 4800H, 16GB', 'precio' => 1299, 'categoria' => 3],
    18 => ['nombre' => 'ASUS Vivo AiO V241EAK-WA008D, 23.8"FHD, Intel® Core™ i5-1135G7, 16GB', 'precio' => 759, 'categoria' => 3],

    19 => ['nombre' => 'Apple iPhone 13, Rosa, 256 GB, 5G, 6.1"', 'precio' => 999, 'categoria' => 4],
    20 => ['nombre' => 'Xiaomi Poco X3 Pro, Negro, 256 GB, 8 GB, 6.67"', 'precio' => 249, 'categoria' => 4],
    21 => ['nombre' => 'Samsung Galaxy A32 5G, Violeta, 128 GB, 4 GB RAM, 6.5"', 'precio' => 279, 'categoria' => 4],
    22 => ['nombre' => 'Samsung Galaxy A22 LTE, Negro, 128 GB, 4 GB, 6.4"', 'precio' => 199, 'categoria' => 4],
    23 => ['nombre' => 'Samsung Galaxy A12 (2021), Negro, 32 GB, 3 GB RAM, 6.5"', 'precio' => 149, 'categoria' => 4],
    24 => ['nombre' => ' Samsung Galaxy Note 20 Ultra 5G, Negro, 256GB, 12GB RAM, 6.9"', 'precio' => 869, 'categoria' => 4],
];
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
        <select name="selec_cate">
            <option>Selecciona Categoria</option>
            <?php
            //for para mostrar las categorias en el desplegable
            foreach ($categorias as $cat => $valores_categorias) {
                echo  " <option value='$valores_categorias'>$valores_categorias</option>";
            }
            ?>
        </select>
        <input type="submit" name="filtrar" value="Filtrar">
        <?php
        /*compruebo si el selec y el boton estan selecionados*/
        if (isset($_POST['filtrar']) && isset($_POST["selec_cate"])) {
            foreach ($categorias as $cat => $value_categorias) {
                /*si el selec y valores de categoria son iguales*/
                if ($value_categorias == $_POST['selec_cate']) {
                    /**/
                    foreach ($articulos as $art => $value_articulos) {
                        /*compruebo que en cada prodcutos coincide con la categoria*/
                        if ($cat == $value_articulos['categoria']) {

                            echo "<div class=card style=width: 18rem;>
                            <img class=card-img-top src=" . $value_articulos['imagen'] . ">
                            <div class=card-body>
                              <h5 class=card-title>" . $value_articulos['nombre'] . "</h5>
                              <p class=card-text>" . $value_articulos['precio'] . "</p>
                              
                            </div>
                          </div>";
                        }
                    }
                }
            }
        }

        ?>

    </form>

</body>

</html>

<?php


echo "<pre>";

var_dump($articulos);
?>