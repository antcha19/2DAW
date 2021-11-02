<?php
static $categorias = [
    1 => "linea blanca",
    2 => "TV",
    3 => "Ordenadores",
    4 => "Móviles"
];
$articulos = include 'articulos.php';
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
    echo "<div class=container  >
    <div class=row>";
    /*compruebo si el selec y el boton estan selecionados*/
    if (isset($_GET['filtrar']) && isset($_GET["selec_cate"])) {
        echo "";
        foreach ($categorias as $cat => $value_categorias) {
            /*si el selec y valores de categoria son iguales*/
            if ($value_categorias == $_GET['selec_cate']) {
                /**/
                foreach ($articulos as $art => $value_articulos) {
                    /*compruebo que en cada prodcutos coincide con la categoria*/
                    if ($cat == $value_articulos['categoria']) {
                        echo $art;
                        $nombre_articulo = $value_articulos['nombre'];
                        $imagen = $value_articulos['imagen'];
                        $precio = $value_articulos['precio'];
                        echo "
                        
                           <div class=card-deck>
                               <div class=card col-sm-4>
                               <a href='anadir.php?producto=".$art."'>
                                   <img class=card-img-top src=" . $imagen . ">                                                            <div class=card-body>
                                   <h3 class=card-title> " . $nombre_articulo . "</h3>
                                   <p class=card-text>" . $precio . "€</p>
                                   </a>
                               </div>
                           </div>
                           <br>
                      ";
                    }
                }
            }
        }
    }
    echo " </div>
    </div> ";
    ?>