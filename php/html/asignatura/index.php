<?php
/*
para version php8 y superior
spl_autoload_register({
    function($class){
    require_once $class.'.php';
    }
});
*/

/*se ejecuta cuando necesito una class*/
function __autoload($class){
    require_once $class.'.php';
}

$pnotas = new Pronotas();
$notas =[
    'Mate' =>1,
    'Mate' =>3,
    'LENG' =>8,
    'VALE' =>8,
    'LENG' =>9,
];

foreach ($notas as $asig => $nota) {
    $pnotas-> addnota($asig,$nota);

}


$asignatura = new Asignatura("Matemáticas");

$notas =[4,6,7,8,6,6,7,6,4,3,2,1,9,10];
foreach ($notas as $nota) {
    $asignatura->addnota($nota);
}
//sumo las notas
$suma = array_sum($notas);
//cuento cuantas notas tengo
$total_notas = count($notas);
$media = $suma/$total_notas;
/**
 * foreach ($notas->$asigs as $value) {
 }
 */



echo "Aprobados: ".$asignatura->aprobados;
echo "<br>Suspensos: ".$asignatura->suspensos."<br>";
echo "La media de las notas es: ". $media;

foreach ($asignatura->notas as $nota => $num) {
    echo "<li>$nota: $num alumnos";
}

?>
