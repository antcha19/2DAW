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
    <div>
        <input type="text" name="numero_insertado" maxlength="4">
        <input type="submit" value="Comprobar" name="comprobar" id="Comprobar">
        <br>
    </div>

    <?php
    $varsession = $_SESSION['master'];
    if (isset($_GET['comprobar'])) {

        if ($_GET['numero_insertado']) {
            //input minimo de 4 caractreres
            if (strlen($_GET['numero_insertado']) == 4) {
                //inserto los numero inotrducidos al array
                $varsession->setn_usuarios($_GET['numero_insertado']);
                echo  $varsession->comprobar() . "<br>";
                echo  "Muertos: " . $varsession->getmuertos() . "<br>";
                echo  "Tocados: " . $varsession->getmuertos() . "<br>";
                echo  "Vidas: " . $varsession->getvidas() . "<br>";
            } else {
                echo "Tienes que introducir minimo 4 caracteres";
            }
        }
    }


    //imprimo los valores del array
    $valores_array = "";

    foreach ($varsession->getn_usuarios() as $key => $valores) {
        $valores_array .=  $valores . "<br>";
    }

    echo "<div>" . $valores_array . "<div>";

    //nuestro los numero aleatorios
    //cuando gana muestra 
    if ($varsession->getmuertos() == 4) {
        echo "<div> Has ganado </div>";
        numeroaletorio($varsession);
    }
    //has perdido
    if ($varsession->getvidas() == 0) {
        echo "<div> Has perdido </div>";
        numeroaletorio($varsession);
        btnreinicar();
    }
    //reiniciar
    if (isset($_GET['reiniciar'])) {
        session_destroy();
        header('Location: index.php');
        btnreinicar();
    }


    // fuction numero aletario
    function numeroaletorio($varsession)
    {
        echo " Numero : <br>";
        echo "<label id=label>" . $varsession->getn_aleatorio() . "</label><br>";
    }
    //boton reiniciar
    function btnreinicar()
    {
        echo "<input type=submit value=Reiniciar name=reiniciar>";
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