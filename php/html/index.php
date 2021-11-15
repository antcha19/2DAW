<?php

//importa la cabecera 
include 'master_cabecera.php';
/*se ejecuta cuando necesito una class*/
function __autoload($class)
{
    require_once $class . '.php';
}
//sesion inicada
session_start();
if (!isset($_SESSION['master'])) {
    $_SESSION['master'] = new Master();
    //funcion numero aletorio;
    $_SESSION['master']->n_aleatorio();
}
?>
<form method="get" enctype="multipart/form-data">
    <div class="centro">
        <input type="number" name="numero_insertado">
        <input type="submit" value="comprobar" name="comprobar">
        <br>
    </div>

    <?php
    if (isset($_GET['comprobar'])) {

        if ($_GET['numero_insertado']) {
            //inserto los numero inotrducidos al array
            $_SESSION['master']->setn_usuarios($_GET['numero_insertado']);
            echo  $_SESSION['master']->comprobar() . "<br>";
            echo  "Muertos: " . $_SESSION['master']->getmuertos() . "<br>";
            echo  "Tocados: " . $_SESSION['master']->gettocados() . "<br>";
        }
    }
    //imprimo los valores del array
    $valores_array = "";
    
    foreach ($_SESSION['master']->getn_usuarios() as $key => $valores) {
        $valores_array .=  $valores . "<br>";
    }
    echo "<div>".$valores_array."<div>";
    //nuestro los numero aleatorios
    echo "<input type=submit value=Reiniciar name=reiniciar>";
    //cuando gana muestra 
    if ($_SESSION['master']->getmuertos() == 4) {
        echo "<div> Has ganado </div>";
        echo " Numero aleatorio : <br>";
        echo "<label id=label>" . $_SESSION['master']->getn_aleatorio() . "</label><br>";
    }
    //reiniciar
    if (isset($_GET['reiniciar'])) {
        session_destroy();
        header('Location: index.php');
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