<?php

class Asignatura{
    const NOTA_MIN =1;
    const NOTA_MAX =10;
    public $nombre;
    public $aprobados;
    public $suspensos;
    public $notas;

    function __construct($nombre){
        $this->nombre = $nombre;
        //array de notas
        $this->notas = array_fill(1,10,0);
    }
    function addnota($nota){
       
            if ($nota >= 5) {
                $this->aprobados++;
                }else{
                    $this->suspensos++;
                }
                /*guardo en notas el array de notas */
                $this->notas[$nota]++;
        
      
    }
    

}
?>