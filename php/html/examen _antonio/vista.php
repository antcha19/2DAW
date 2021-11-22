<html>

<head>
	<style>
		span {
			font-face: Verdana
		}

		.contador {
			font-size: 2em;
			width: 100%;
			background: #eed
		}

		input {
			font-size: 2em
		}

		.bola {
			float: left;
			font-size: 2.2em;
			text-align: center;
			margin: 7px;
			padding: 7px;
			border-radius: 50%;
			background-color: #ddd;
			width: 40px;
			height: 40px
		}

		.salida {
			font-weight: bold;
			background-color: yellow
		}
	</style>
</head>

<body>
	<h1>Bolas Jugadas <?php $bolas ?></h1>
	<br>
	<?php


	//<div class=contador>Bolas Jugadas: <?= count($bolas) </div>
	$numeros = 1;
	$filas = 9;
	$numero_ale = [];
	$bolas = 1;
	//genero los numero y los meto en un array
	for ($i = 0; $i < 90; $i++) {
		array_push($numero_ale, $numeros);
		$numeros++ . " ";
	}

	foreach ($numero_ale as $key => $value) {
		echo "<div name='" . $value . "'>" . $value . "</div>";
	}

	$inputbola ="";
	if (isset($_POST['marcar'])) {
		if (isset($_POST['bola'])) {
			$inputbola = $_POST['bola'];
			foreach ($numero_ale as $key => $value) {
				//si lo encontra deberia cambiar de color
				if ($inputbola == $value) {
					echo $inputbola . " encontrado";
				}
			}
		}
	}


	if (isset($_POST['empezar'])) {
		echo "click en bola";
		session_destroy();
	}
	var_dump($inputbola);
	//	var_dump($numero_ale);
	?>


	<div style="clear:left"></div>
	<form method="post">
		Bola:<input type="number" name="bola" size="2">
		<input type="submit" name="marcar" value="Marcar">
		<input type="submit" name="desmarcar" value="Deshacer">
		<input type="submit" name="empezar" value="Empezar">
	</form>

</body>

</html>