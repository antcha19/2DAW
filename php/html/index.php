<?php require 'upload.php' ?>
<html>
<link href="imagenes.css" rel="stylesheet" type="text/css">
<form method="post" enctype="multipart/form-data">



   <input type="file" name="foto"><br>
   <input type="submit" name="Enviar" value="Enviar">


   <?php
   $ruta = scandir("imagenes");
   for ($i = 0; $i < count($ruta); $i++) {
      if ($i > 1) {
         echo " <img src=imagenes/$ruta[$i]>";
      }
   }


   ?>
   <?= $error ?? '' ?>
</form>

</html>