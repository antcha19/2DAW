<?php
class Master
{

  //propiedad 
  public $numero_ale;
  public $numero_usuarios;
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
  function setn_usuarios($num_insertado){
    array_push($this->numero_usuarios,$num_insertado);
  }
  //para mostrar el array 
  function getn_usuarios(){
    return $this->numero_usuarios;
  }
}
