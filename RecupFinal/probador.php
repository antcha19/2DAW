<?php

/**
 * Control de entrada de prendas en probadores
 *
 * Parámetros Acción
 * -------------------------------------------------
 * ...        Añade una prenda al probador N
 * ...        Disminuye una prenda en el probador N
 * ...        Vacía el probador N
 * ...        Vacia todos los probadores
 *
 */;

require 'vista.php';

class probador
{


    public $nprobadores;
    public $disminuye;
    public $aumenta;
    public $vacia;
    public $botonincre;
    public function __construct()
    {
    }

    function crear()
    {
        $probador_index = $_POST['nprobadores'];
        echo "<form  method=post>";
        for ($i = 0; $i < $probador_index; $i++) {
            echo  "<li type=submit name=probador.'$i'.>Probador.'$i'.</li>
                    <label for=>numero de prendras</label>
                    <button name='.$this->botonincre.'.'$i'.>Incrementar</button>
                    <button name=quitar.'$i'.>quitar</button>
                    <button name=vaciar.'$i'.>vaciar</button>";
        }
        echo     "</form>";
    }

    function incrementar()
    {
       
    }
    function quitar()
    {
    }
}
