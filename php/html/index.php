<!DOCTYPE html>
<html lang="en">
<link href="estadistica.css" rel="stylesheet" type="text/css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notas</title>
</head>
<body>

    <h1>Estadísticas </h1>

    <div id="archivo">

            <form method="post" enctype="multipart/form-data">
                    <input type="file" name="file" id="archivo">
                    <input   type="submit" name="crear" value="Crear estadisticas">
            </form>
    </div>

              <?php

if (isset($_POST['crear']) && $_FILES['file']['name']) {
    $notassubidas = $_FILES['file']['name'];
    $contador = 0;
    $array = file($notassubidas, FILE_IGNORE_NEW_LINES);
    foreach ($array as $valores) {
        list($alumno, $asginatura, $notas) = explode(",", $valores);
        //  echo $alumno."-".$asginatura."-".$notas. "<br>";
        if (!isset($arraynotas[$asginatura])) {
            $arraynotas[$asginatura] = [
                'aprobadas' => 0,
                'suspendidas' => 0,
                'notas' => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ];
        }
        $arraynotas[$asginatura]['notas'][$notas]++;
        if ($notas >= 5) {
            $arraynotas[$asginatura]['aprobadas']++;
        }
        if ($notas < 5) {
            $arraynotas[$asginatura]['suspendidas']++;
        }
    }
}else if (!isset($_POST['crear']) && $_FILES['file']['name']){
    echo "No has subido ningun archivo";
}

?>
<div id="divtablas">
    <h2>Porcentaje de notas</h2>
<table id="idtabla">
  <tr>
    <th>Asignaturas</th>
    <th>Total alumnos</th>
    <th>Aprobados</th>
    <th>Aprobados</th>
  </tr>
  <?php
foreach ($arraynotas as $nombre_asig => $value) {
    //SACAMOS EL total de los alumnos matriculados
    $total_alumnos = $value['aprobadas'] + $value['suspendidas'];

    $porcientoapro = round(($value['aprobadas'] * 100) / $total_alumnos);

    $porcientosus = round(($value['suspendidas'] * 100) / $total_alumnos);
    echo "<tr> ";
    echo "<td>$nombre_asig</td>";
    echo "<td>$total_alumnos</td>";
    echo "<td>$porcientoapro%</td>";
    echo "<td>$porcientosus%</td>";
    echo "</tr> ";
}
?>
</table>
</div>
<br>
<br>

<h2>Frecuencias de notas</h2>
<br>
<div id="divtablas2">
<table id="idtabla2">
  <tr>
  <th>Asignatura</th>
    <th>Notas</th>
    <th>% total</th>


  </tr>
  <?php
foreach ($arraynotas as $nombre_asig => $value) {
    //SACAMOS EL total de los alumnos matriculados
    $total_alumnos = $value['aprobadas'] + $value['suspendidas'];
    $porcientoapro = $value['aprobadas'] * $total_alumnos / 100;
    $porcientosus = $value['suspendidas'] * $total_alumnos / 100;
    for ($i = 0; $i < 11; $i++) {
        $nu_notas = $value['notas'];
        echo "<tr> ";
        echo "<td>$nombre_asig</td>";
        echo "<td>$i</td>";
        // echo "<td>$total_alumnos</td>";
        echo "<td>" . $value['notas'][$i] . "%</td>";

        echo "</tr> ";
    }

}
?>
</table>
</div>







</body>

</html>