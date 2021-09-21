<?php
$nombre = 'antonio';

$cursos = ['1DAW' => '1º de DAW', '2DAW' => '2º de DAW',  '1ASIR' => '1º de ASIR'];
$curso = '2DAW';


//validamos formulario
if (isset($_POST['enviar'])) {
    if (!isset($_POST['condiciones'])) {
        echo "No has aceptado las condiciones";
    } else {
        echo "formulario correcto";
        die;
    }
}
?>

<html>

<body>
    <form method='POST' enctype="multipart/form-data">
        condiciones <input type="checkbox"  name="condiciones">
        <select name="nombre">
            <option>Selecciona curso</option>
            <?php
            foreach ($cursos as $codcurso => $nomcurso) {
                echo  " <option value='$nomcurso'>$nomcurso</option>";
            }
            ?>

        </select>

        Foto: <input type="file" name="archivo1">
        <p><input type="submit" value="enviar" name="enviar"></p>
    </form>

    <pre>
    <?php

    echo "GET:";
    var_dump($_GET);
    echo "POST:";
    var_dump($_POST);
    echo "File:";
    var_dump($_FILES);

    ?>
</body>

</html>