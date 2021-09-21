<?php
$resp=$_GET['tabla'];
$n=$_GET['n'];
$tabla=$_GET['tabla'];

if($tabla*$n==$resp) {
    echo "<h3>correcto</h3>";
    echo "<a href=practicar.php?tabla=$tabla>continuar</a>";

}else{
    echo "<h3>vuelve a intentarlo</h3>";
    echo "<a href=practicar.php?tabla=$tabla$n>continuar</a>";
}
?>
