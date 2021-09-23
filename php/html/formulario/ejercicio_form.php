<?php

//variables para comprobar los campos
$com_usuario = false;
$com_edad = false;
$com_sexo = false;
$com_email = false;
$com_contra = false;

if (isset($_POST['enviar'])) {
    $datos = $_POST['registro'];
    //campo usuario
    if (isset($datos['usuario'])) {
        if ($datos['usuario'] == true) {
            $com_usuario = true;
        } else {
            echo "<li>Error en el campo USUARIO</li> ";
        }
    }
    //campo edad
    if (isset($datos['edad'])) {
        if (true == $datos['edad'] && ($datos['edad']) >= 1 && ($datos['edad']) <= 100) {
            $com_edad = true;
        } else {
            echo " <li>Error en el campo EDAD</li>";
        }
    }
    //observaciones
    if (isset($datos['email'])) {
        if (true == $datos['email'] && filter_var($datos['email'], FILTER_VALIDATE_EMAIL)) {
            $com_email = true;
        } else {
            echo "<li>Error en el campo EMAIL</li> ";
        }
    }
    //contrasenya
    if (isset($datos['contrasenya'])) {
        if (true == $datos['contrasenya']) {
            $com_contra = true;
        } else {
            echo "<li>Error en la CONTRASEÑA</li>";
        }
        if (strlen($datos['contrasenya']) < 6) {
            echo "<li>La contraseña tiene menos de 6 caracteres </li>";
            $com_contra = false;
        }
    }
    //sexo
    if (isset($datos['sexo'])) {
        $com_sexo = true;
    } else {
        echo "<li>Selecciona una casilla en el campo SEXO </li>";
    }
    if (false == $com_sexo && false == $com_contra  && false == $com_usuario && false == $com_edad && false == $com_email) {

        echo "<li>Datos incorrectos , no se ha dado de alta al usuario</li>";
    } else {
        echo "<li>Datos correctos. Usuario dado de alta </li>";
    }
}






?>


<html>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
<link href="/formulario/form.css" rel="stylesheet" type="text/css">

<body>
    <h1>Formulario</h1>
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
        <div class="form-group purple-border">
            <label for="exampleFormControlTextarea4">Observaciones</label>
            <textarea name="registro[observaciones]" class="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
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
            Acepta las condiciones
            <input name="acepta" type="checkbox" class="form-check-input">

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