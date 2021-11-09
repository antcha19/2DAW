<?php
static $categorias = [
    1 => "linea blanca",
    2 => "TV",
    3 => "Ordenadores",
    4 => "Móviles"
];
//importo articulos
$articulos = include 'articulos.php';
require  'tienda_cabecera.php';
?>

    
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