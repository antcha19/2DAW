<?php
//cargo la clase

require 'Calculadora.class.php';


$resultado = $_POST['resultado'];

$intro_nombre = $_POST['nombre'];
$intro_apellido = $_POST['apellido'];

$calculando = new Calculadora($intro_nombre, $intro_apellido, 23);
// renombre el nombre introducido
$calculando->set_name("Antonio");
echo "nombre completo ".$calculando->nombrecompleto()."<br>";

if ($calculando->mayorEDAD()) {
    echo $calculando->nombrecompleto() . " es mayor"."<br>";
} else {
    echo $calculando->nombrecompleto() . " no mayor"."<br>";
}

//nuevo objeto de calculadora;
$miobjeto1 = $calculando;

//llamo a lso datos e inserto los datos con los inputs
$miobjeto1->atributoUno = $_POST['numero1'];
$miobjeto1->atributoDos = $_POST['numero2'];

//llamo al metodo de la clase
 $miobjeto1->calcular($miobjeto1->atributoUno, $miobjeto1->atributoDos);

echo "<br>";
//correo es un atributo privado
$miobjeto1->correo();
echo "<br>";

//self
$miobjeto1::saludar("self");
echo "<br>";
//this
$miobjeto2 = $calculando;
$miobjeto2->saludar(" this");

