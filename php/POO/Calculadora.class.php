<?php

/*
clases
- atributos
- metodos
objetos (instanciacion)
constructor
destructor
herencia
 */

class Calculadora
{

    public $atributoUno;
    public $atributoDos;
    public $nombre;
    public $apellido;
    public $edad;
    private $correo = "correo electronico";

    //constructor
    public function __construct($nombre, $apellido, $edad)
    {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->edad = $edad;
    }

    public function mayorEDAD()
    {
        return $this->edad >= 18;
    }

    public function nombrecompleto()
    {
        return $this->nombre . " " . $this->apellido . " " . $this->edad;
    }

    //sumar
    public function calcular($numero1_introducido, $numero2_introducido)
    {
        echo "la suma es:" . $numero1_introducido + $numero2_introducido;
    }

    // Methods
    public function set_name($nombre)
    {
        $this->nombre = $nombre;
    }
    public function get_name()
    {
        return $this->nombre;
    }

    //puedo llamar a un atributo privado atravez de un metodo
    public function correo()
    {
        echo $this->correo;
    }

    /*self:
    Hace referencia a la clase actual y generalmente lo usarías cuando
    no se genera una instancia de la misma, como cuando usas métodos estáticos:
     */
    public static function funcionDePrueba($chango)
    {
        return 'HOLA ' . $chango . '!';
    }

    public static function saludar($chango)
    {
        echo self::funcionDePrueba($chango);
    }

    /*this
    Ahora, con this haces referencia al objeto actual. 
    Esto es una clase que si tiene instancia:
     */

    public function funcionDePrueba2($chango) {
        return 'HOLA ' . $chango .'!';
     }
    
     static function saludar2($chango){
        echo $this->funcionDePrueba($chango);
     }
}
