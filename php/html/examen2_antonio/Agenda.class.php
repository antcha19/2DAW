<?php
// Citas de un mes-año determinado
class Agenda
{

	// Horas posibles de las citas
	private static $horario;
	private  $anyo;
	private  $mes;

	private  $citas = [];

	//...completar propiedades y constructor
	public function __construct($anyo, $mes)
	{
		$this->anyo;
		$mes;
		if ($mes >= 1 && $mes <= 12) {
			echo "Mes entre 1 y 12";
		}
	}


	public static function sethorario($horario)
	{
		var_dump($horario);

		return $horario;
	}
	
	public function anadecita($dia, $horario, $paciente)
	{
		//array vacio
		$this->citas;
		//añado al array el numero aleatorio si no existe
		array_push($this->citas, $dia, $horario, $paciente);
		//var_dump($this->citas);
		
	}

	public function getcitaspaciente($paciente)
	{
	}

	public function borracitaspaciente($paciente)
	{
	}
}
