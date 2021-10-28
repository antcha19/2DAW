<?php

$categorias = [
    1 => "linea blanca",
    2 => "TV",
    3 => "Ordenadores",
    4 => "Móviles"
];

$articulos = [
    1 => ['nombre' => 'Xiaomi Báscula Inteligente Mi Bod', 'imagen' => './imagenes/linea1.png', 'precio' => 30, 'categoria' => 1],
    2 => ['nombre' => 'Cecotec Conga Excellence 1092/1090', 'imagen' => './imagenes/linea2.png', 'precio' => 159, 'categoria' => 1],
    3 => ['nombre' => 'Nevera - LG GBB62PZGGN, 384 l', 'imagen' => './imagenes/linea3.png', 'precio' => 649, 'categoria' => 1],
    4 => ['nombre' => 'Congelador - Infiniton CV-176IX, 235L', 'imagen' => './imagenes/linea4.png', 'precio' => 649, 'categoria' => 1],
    5 => ['nombre' => 'Lavadora carga frontal - LG F4J3TN3W, Capacidad 8kg', 'imagen' => './imagenes/linea5.png', 'precio' => 309, 'categoria' => 1],
    6 => ['nombre' => 'Secadora - AEG T8DBG862 Bomba de calor, Capacidad 8kg', 'imagen' => './imagenes/linea6.png', 'precio' => 719, 'categoria' => 1],

    7 => ['nombre' => 'TV LED 50" - LG 50UP77006LB.AEU', 'imagen' => './imagenes/tv1.png',  'precio' => 459, 'categoria' => 2],
    8 => ['nombre' => 'TV QLED 55" - Samsung 55Q70AATXXC',  'imagen' => './imagenes/tv2.png', 'precio' => 72, 'categoria' => 2],
    9 => ['nombre' => 'TV LED 32" - Xiaomi Mi TV 4A',  'imagen' => './imagenes/tv3.png', 'precio' => 1300, 'categoria' => 2],
    10 => ['nombre' => 'TV QLED 55" - Samsung QE55Q60AAUXXC',  'imagen' => './imagenes/tv4.png', 'precio' => 1300, 'categoria' => 2],
    11 => ['nombre' => 'TV LED 55" - Samsung UE55AU7175UXXC',  'imagen' => './imagenes/tv5.png', 'precio' => 575, 'categoria' => 2],
    12 => ['nombre' => 'TV LED 24" - LG 24TN510S-PZ', 'imagen' => './imagenes/tv6.png', 'precio' => 159, 'categoria' => 2],

    13 => ['nombre' => ' Lenovo IdeaCentre 3 07ADA05, AMD Ryzen™ 5 3500U, 8GB RAM, 512GB SSD', 'imagen' => './imagenes/pc1.png', 'precio' => 399, 'categoria' => 3],
    14 => ['nombre' => 'All in one - Lenovo IdeaCentre AIO 3 24ARE05, 23.8" FHD, AMD Ryzen™ 5 4500U, 8 GB RAM, 512 GB SSD', 'imagen' => './imagenes/pc2.png', 'precio' => 649, 'categoria' => 3],
    15 => ['nombre' => 'Lenovo Legion 5 15IMH05, 15.6" FHD, Intel® Core™ i7-10750H, 16 GB', 'imagen' => './imagenes/pc3.png', 'precio' => 1300, 'categoria' => 3],
    16 => ['nombre' => 'Acer Nitro 5 AN517-41, 17.3" FHD, AMD Ryzen™ 7 5800H, 16 GB RAM', 'imagen' => './imagenes/pc4.png', 'precio' => 1539, 'categoria' => 3],
    17 => ['nombre' => 'ASUS ROG Strix G513IC-HN004T 15,6 FHD, AMD Ryzen 7 4800H, 16GB', 'imagen' => './imagenes/pc5.png', 'precio' => 1299, 'categoria' => 3],
    18 => ['nombre' => 'ASUS Vivo AiO V241EAK-WA008D, 23.8"FHD, Intel® Core™ i5-1135G7, 16GB', 'imagen' => './imagenes/pc6.png', 'precio' => 759, 'categoria' => 3],

    19 => ['nombre' => 'Apple iPhone 13, Rosa, 256 GB, 5G, 6.1"', 'imagen' => './imagenes/movil1.png', 'precio' => 999, 'categoria' => 4],
    20 => ['nombre' => 'Xiaomi Poco X3 Pro, Negro, 256 GB, 8 GB, 6.67"', 'imagen' => './imagenes/movil2.png', 'precio' => 249, 'categoria' => 4],
    21 => ['nombre' => 'Samsung Galaxy A32 5G, Violeta, 128 GB, 4 GB RAM, 6.5"', 'imagen' => './imagenes/movil3.png', 'precio' => 279, 'categoria' => 4],
    22 => ['nombre' => 'Samsung Galaxy A22 LTE, Negro, 128 GB, 4 GB, 6.4"', 'imagen' => './imagenes/movil4.png', 'precio' => 199, 'categoria' => 4],
    23 => ['nombre' => 'Samsung Galaxy A12 (2021), Negro, 32 GB, 3 GB RAM, 6.5"', 'imagen' => './imagenes/movil5.png', 'precio' => 149, 'categoria' => 4],
    24 => ['nombre' => ' Samsung Galaxy Note 20 Ultra 5G, Negro, 256GB, 12GB RAM, 6.9"', 'imagen' => './imagenes/movil6.png', 'precio' => 869, 'categoria' => 4],
];

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda</title>
    <link href="esilo.css" rel="stylesheet" type="text/css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>
    <form method="get" enctype="multipart/form-data">
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
    </form>

    <?php
    $nombre_articulo;
    /*compruebo si el selec y el boton estan selecionados*/
    if (isset($_GET['filtrar']) && isset($_GET["selec_cate"])) {
        foreach ($categorias as $cat => $value_categorias) {
            /*si el selec y valores de categoria son iguales*/
            if ($value_categorias == $_GET['selec_cate']) {
                /**/
                foreach ($articulos as $art => $value_articulos) {
                    /*compruebo que en cada prodcutos coincide con la categoria*/
                    if ($cat == $value_articulos['categoria']) {
                        $nombre_articulo = $value_articulos['nombre'];
                        $imagen = $value_articulos['imagen'];
                        $precio = $value_articulos['precio'];
                        echo "  <div class=container  name=namearticulo>
                                         <div class=row>
                                            <div class=card-deck>
                                                <div class=card col-sm-2>
                                                    <img class=card-img-top src=" . $imagen . ">                                                            <div class=card-body>
                                                    <h3 class=card-title> " . $nombre_articulo . "</h3>
                                                    <p class=card-text>" . $precio . "€</p>
                                                    <input type=submit  value=Añadir>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    <br>
                                    ";
                    }
                }
            }
        }
    }
    ?>



    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>
</body>

</html>