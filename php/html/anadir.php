<?php
//importo los articulos
$articulos = include 'articulos.php';
require 'tienda_cabecera.php';
?>
    <form method="get" enctype="multipart/form-data">
        <?php
        //get de productos es lo que me pasa de href  ejemplo http://localhost/anadir.php?producto=3
        $idarticulo = $_GET['producto'];
        if (isset($idarticulo)) {
            echo " <div class=container>
            <div class=row>";
            //var_dump($idarticulo);
            foreach ($articulos as $cat => $value) {
                if ($idarticulo == $cat) {
                    $nombre_articulo = $value['nombre'];
                    $imagen = $value['imagen'];
                    $precio = $value['precio'];
                    echo "  <div class=card-deck>
                                            <div class=card col-sm-4>
                                            <h3 class=card-title> " . $nombre_articulo . "</h3>
                                                <img class=card-img-top src=" . $imagen . ">                                                            <div class=card-body>
                                                <p class=card-text>" . $precio . "€</p>
                                                <input type=number >
                                                <br>
                                                <input type=submit value=Añadir name=anadir>
                                                </div>
                                        </div>
                                <br>
                                ";
                }
            }
            echo "  </div>
            </div> ";
        }

        ?>
    </form>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>