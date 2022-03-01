<?php
if (isset($_POST['crear']) ) {
	echo "boton crear";
	$nprobadores = $_POST['nprobadores'];
	echo $nprobadores;
}

?>
<html>

<body>
	<h2>Control de Probadores</h2>
	<form action="probador.php" method="post">
		<input type="number" name="nprobadores" placeholder="añade">
		<button type="submit" name="crear">Crear</button>
	</form>

</body>

</html>