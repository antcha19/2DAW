<?php

if (!isset($_SESSION['master'])) {
    $_SESSION['master'] = new Master();
    //funcion numero aletorio;
    $_SESSION['master']->n_aleatorio();
}
//importa la cabecera 
include 'master_cabecera.php';
/*se ejecuta cuando necesito una class*/
function __autoload($class)
{
    require_once $class . '.php';
}
?>
<form method="get" enctype="multipart/form-data">
    <input type="number" min="1" pattern=".{4,} name="numero_insertado">
    <input type="submit" value="comprobar" name="comprobar">
    <br>
    <?php
    if (isset($_GET['comprobar'])) {
        echo "clic en comprobar <br>";
        if ($_GET['numero_insertado']) {
            //inserto los numero inotrducidos al array
            $_SESSION['master']->setn_usuarios($_GET['numero_insertado']);
        }
    }
    //imprimero los valores del array 
    foreach ($_SESSION['master']->getn_usuarios() as $key => $value) {
        echo $value."<br>";
    }
    //nuestro los numero aleatorios
    echo "Numero aleatorio:" . $_SESSION['master']->getn_aleatorio() . "<br>";

  ;


    ?>



</form>

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>