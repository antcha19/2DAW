<h1>Tienda</h1>

Son las <?php echo date('h:i:s'); ?>

<a href="backend">ADMINISTRADOR</a>
<br>
Hoy es
<?php
echo "<br>";
echo date('d/m/y'); ?>
<br>
AÑO <?php echo date('Y'); ?>
<br>
MES <?= date('M'); ?>

<br>
DIA <?php echo date('d'); ?>
<br>
<?php

$CADENA = "Antonio";
$CADENA = '90';
$CADENA = $CADENA + 4;
print("HOLA $CADENA");

?>
<br>

HOLA<?= " " . $CADENA . '!';
    if (is_string($CADENA)) {
        echo "es un string";
    }


    $edad = 20;
    if ($edad >= 19)
        $edadmayor = true;
    else
        $edadmayor = false;

    $edadmayor = $edad > 18;

    ?>

ARRAY
<?php
$array = ['asd', '444', '/'];
echo "<pre>";
var_dump($array);
unset($array[0]);

var_dump($array);
?>