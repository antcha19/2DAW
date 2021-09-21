<?php

/*
if (isset($_POST['enviar'])) {
    $datos = $_POST['registro'];
    if ($datos['usuario']) {
        echo " valido usuario";
    } else if (is_numeric($datos['edad'])) {
        echo "valido";
    } else if (filter_var($datos['email'], FILTER_VALIDATE_EMAIL)) {
        echo "valido";
    } else if (($datos['sexo'])) {
        echo "valido";
    } else if (strlen($datos['contrasenya']) < 6) {
        echo "valido";
    }
}*/

if (isset($_POST['enviar'])) {
    $datos = $_POST['registro'];
    if (($datos['edad']) >= 1 && ($datos['edad']) <= 100) {
        echo "valido edad";
    } else {
        echo "no valido";
    }
}


?>


<html>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

<body>
    <form method='POST'>
        <div class="mb-3">
            Usuario
            <input type="text" class="form-control" name="registro[usuario]">
        </div>
        <div class="mb-3">
            Edad
            <input type="number" class="form-control" name="registro[edad]">
        </div>
        <div>
            Sexo
            <div class="form-check">
                <input name="registro[sexo]" class="form-check-input" type="radio">
                Hombre
            </div>
            <div class="form-check">
                <input name="registro[sexo]" class="form-check-input" type="radio">
                Mujer

            </div>
        </div>

        <div class="mb-3">
            Email
            <input type="email" class="form-control" name="registro[email]">
        </div>
        <div class="mb-3">
            Password
            <input type="password" class="form-control" name="registro[contrasenya]">
        </div>
        <div class="mb-3 form-check">
            <input name="acepta" type="checkbox" class="form-check-input">
            Acepta las condiciones
        </div>
        <button type="submit" class="btn btn-primary" name="enviar">Enviar</button>
    </form>
    <pre>
    <?php

    echo "GET:";
    var_dump($_GET);
    echo "POST:";
    var_dump($_POST);


    ?>
</body>

</html>