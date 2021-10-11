<?php

$texto = "Me gusta la música";





$contador = 0;
echo preg_match(" ", $texto);


echo "<pre>";
var_dump($texto);
var_dump($_POST);


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="post" enctype="multipart/form-data">

        <input type=file name=texto><br>

        <input type="submit" name="Enviar" value="Enviar">



    </form>

</body>


</html>