<?php

/** 
 * 
 * Gestión de banners
 * De cada banner de la lista se guarda: alias,imagen,url
 */
class banners
{

	public $alias;
	public $imagen;
	public $url;
	public $fichero;


	/*	public $fichero = [
		["audi", "audi.jpg", "http://www.audi.com"],
		["apple", "apple.png", "http://www.apple.com"],
		["cocacola", "cocacola.png", "http://www.cocacola.com"],
		["nike", "nike.jpg", "http://www.nike.com"],
		["tesla", "tesla.jpg", "http://www.tesla.com"]
	];
*/
	public function __construct($fichero)
	{
		$this->fichero = $fichero;
	}

	/**
	 *  Devuelve el html de un banner aleatorio entre los cargados, de la forma 
	 *string $alias
	 * @return string <a href=URL><img class=banner src='IMAGEN'></a>	
	 */
	function getfichero()
	{
		return $this->fichero;
	}
	public function clickbanner($alias)
	{
	}

	public function getbanner(){
		foreach ($$this->fichero as $valores) {
			list($alumno, $asginatura, $notas) = explode(",", $valores);
	}
}
}
?>