<?php
class Master
{

    //propiedad 
    public $numero_ale;
    public $num_intentos;
    function __construct()
    {
    }


    //funcio numero aleatorio
    function n_aleatorio(){
        //array vacio
        $this->numero_ale = [];
        $numeroramdom = rand(1,6);
        for ($i=0; $i <4 ; $i++) { 
          array_push($numeroramdom);
        }
    }
}
