<?php
class Master
{

  //propiedad 
  public $numero_ale;
  public $numero_usuarios;
  public $muertos = 0;
  public $tocados = 0;
  public $vidas = 8;
  function __construct()
  {
    //creo el array vacio
    $this->numero_usuarios = [];
  }



  //funcio numero aleatorio
  function n_aleatorio()
  {
    //array vacio
    $this->numero_ale = [];
    //creo el primer numero aleatorio
    $numeroramdom = rand(1, 6);
    //inserto al array
    array_push($this->numero_ale, $numeroramdom);
    //mientras array de numero_aleatorio sea de longuitud de 4
    while (count($this->numero_ale) != 4) {
      //siguiente numero aleatorio 
      $numeroramdom = rand(1, 6);
      //si el valor existe continua sin hacer nada
      if (in_array($numeroramdom, $this->numero_ale)) {
        continue;
      } else {
        //añado al array el numero aleatorio si no existe
        array_push($this->numero_ale, $numeroramdom);
      }
    }
    //paso el array a string
    $this->numero_ale = implode($this->numero_ale);
  }



  function getn_aleatorio()
  {
    return $this->numero_ale;
  }

  //añado los numeros insertados por el usuario
  function setn_usuarios($num_insertado)
  {

    array_push($this->numero_usuarios, $num_insertado);
  }
  //para mostrar el array 
  function getn_usuarios()
  {
    return $this->numero_usuarios;
  }

  function comprobar()
  {
    //reinicio las variables para la siguiente comprobacion
    $this->muertos = 0;
    $this->tocados = 0;
    //paso a un array para comprobar
    $array_aleatorio = str_split($this->numero_ale);
    //obtenlo los ultimos
    $ultimaposicion = end($this->numero_usuarios);
    //paso a un array 
    $array_numerosintro = str_split($ultimaposicion);
    for ($i = 0; $i < count($array_aleatorio); $i++) {
      //echo $array_aleatorio[$i];
      for ($j = 0; $j < count($array_numerosintro); $j++) {
        // echo $array_numerosintro[0];
        //si son iguales entra
        if ($array_aleatorio[$i] == $array_numerosintro[$j]) {
          //si las psosicones son iugales me suma un muerto
          if ($i == $j) {
            $this->muertos++;
          }
          //si las posiciones son distinas es un tocado
          if ($i != $j) {
            $this->tocados++;
          }
        }
      }
    }
    $this->vidas--;
  }

  //muestro los muertos
  function getmuertos()
  {

    return $this->muertos;
  }
  //muestro los tocados
  function gettocados()
  {

    return $this->tocados;
  }

  //vidas
  function getvidas()
  {

    return $this->vidas;
  }
}
