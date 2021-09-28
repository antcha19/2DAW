<?php

if (!isset($_GET['tabla']))
    die("Ejecucion incorrrecta");

$tabla = $_GET['tabla'];
// $n = mt_rand(1, 10);

$n = $_GET['n'] ?? mt_rand(1, 10);
//venimos de enviar el formulario

if (isset($_GET['resp'])) {
    $resp = $_GET['resp'];
    if ($tabla * $n == $resp) {
        $error = "<h3>CORRECTO</h3>";
        $n = mt_rand(1, 10);
    } else {
        $error = "<div style='color:red'>vuelve a intentarlo</div>";
    }
}


?>
<?= "<h2>Vamos a practicar la tabla del $tabla</h2> "?> 


<form>
    Cuanto es <?= $tabla ?> x <?= $n ?>?
    <input name="resp" type="number" size="2">
    <input type="submit" value="prueba">
</form>