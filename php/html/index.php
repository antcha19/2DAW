<!DOCTYPE html>
<html lang="en">

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
                'notas' => [0,0,0,0,0,0,0,0,0,0,0]
            ];
        }
       $arraynotas[$asginatura]['notas'][$notas]++;
        if ($notas >= 5) {
            $arraynotas[$asginatura]['aprobadas']++;
        }
        if ($notas < 5) {
            $arraynotas[$asginatura]['suspendidas']++;
        }

        /*  if ($b == "DIS" && $c >= 5) {
            $contador++;
        }*/
    }


    foreach ($arraynotas as $nombre_asig => $value) {
        //SACAMOS EL total de los alumnos matriculados 
        $total_alumnos = $value['aprobadas'] +$value['suspendidas'];

        echo "<pre>";
        echo $nombre_asig;
        echo  $porcientoapro =$value['aprobadas'] *$total_alumnos/ 100;
        echo  $porcientosus =$value['suspendidas'] *$total_alumnos/ 100;
        echo "<table border=2px>";
        echo "<tr> Asignaturas";
        
        echo "<td>".$nombre_asig."</td>";
        echo "<td>" .$porcientoapro."</td>";
        echo "<td>" .$porcientosus."</td>";
        echo "</tr>";
        echo "</table>";
       
        
    }
    
  


    echo "<pre>";





    ?>

</body>

</html>