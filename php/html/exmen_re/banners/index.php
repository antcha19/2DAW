<?php
require 'banners.php';

// Completa la inicialización
$fichero = [
	["audi", "audi.jpg", "http://www.audi.com"],
	["apple", "apple.png", "http://www.apple.com"],
	["cocacola", "cocacola.png", "http://www.cocacola.com"],
	["nike", "nike.jpg", "http://www.nike.com"],
	["tesla", "tesla.jpg", "http://www.tesla.com"]
];
$banner = new banners($fichero);
$banner->getfichero();
$arrayfichero = $banner->getfichero();
var_dump($arrayfichero);

?>
<html>

<head>
	<style>
		.cabecera {
			vertical-align: top;
			width: 800px;
			margin: auto;
			background-color: #dea;
			padding: 15px;
			font-size: 2em
		}

		.contenido {
			width: 800px;
			height: 700px;
			margin: auto;
			background-color: #eee;
			padding: 15px
		}

		.banner {
			position: absolute;
			max-width: 220px
		}
	</style>
</head>

<body>
	<div class="cabecera">MI TIENDA</div>
	<div class="contenido">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
		aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
		eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
		mollit anim id est laborum<br>
	</div>
	<div class="banner" style="left:80px;top:120px">Publicidad<br>
		<?php


		?>
	</div>
	<div class="banner" style="left:1200px;top:120px">Publicidad<br>
		<?php
		// AQUI un banner
		?>
	</div>
</body>

</html>