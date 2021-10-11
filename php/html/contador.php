<?php

$texto = "Me gusta la música la me gustas dfg adfg ";
$array = explode(' ', $texto);

$texto = array_count_values($array);


$contador = 0;
array_sum($texto);

echo "<pre>";
var_dump($texto);



?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador</title>
</head>

<body>
    <form method="post" enctype="multipart/form-data">

        <input type=file name=texto><br>

        <input type="submit" name="Enviar" value="Enviar">



    </form>

</body>


</html>