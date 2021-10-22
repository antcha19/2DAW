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

    <h1>Estadísticas de notas</h1>
    <?php

$contador = 0;
$array = file("notasalumnos.csv", FILE_IGNORE_NEW_LINES);
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

foreach ($arraynotas as $nombre_asig => $value) {
    //SACAMOS EL total de los alumnos matriculados
    $total_alumnos = $value['aprobadas'] + $value['suspendidas'];

    //   $porcientoapro = $value['aprobadas'] * $total_alumnos / 100;
    //   $porcientosus = $value['suspendidas'] * $total_alumnos / 100;
    $por_aprobados = round(($total_alumnos * 100) / $value['aprobadas']);

}
?>
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
    $porcientoapro = $value['aprobadas'] * $total_alumnos / 100;
    $porcientosus = $value['suspendidas'] * $total_alumnos / 100;
    echo "<tr> ";
    echo "<td>$nombre_asig</td>";
    echo "<td>$total_alumnos</td>";
    echo "<td>$porcientoapro%</td>";
    echo "<td>$porcientosus%</td>";
    echo "</tr> ";
}
?>
</table>
<br>
<br>

<h1>Frecuencias de notas</h1>
<br>
<table id="idtabla">
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
    for ($i=0; $i <11 ; $i++) { 
        $nu_notas = $value['notas'] ;
        echo "<tr> ";
        echo "<td>$nombre_asig</td>";
        echo "<td>$i</td>";
       // echo "<td>$total_alumnos</td>";
        echo "<td>".$value['notas'][$i]."%</td>";
       
        echo "</tr> ";
    }
  
   
}
?>
</table>


</body>

</html>