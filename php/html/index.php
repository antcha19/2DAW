<html>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

<link href="imagenes.css" rel="stylesheet" type="text/css">

<h1>Galeria de imagenes</h1>
<form method="post" action="delete.php" enctype="multipart/form-data">

   <a class='btn btn-primary' href='upload.php?'>Subir imagenes</a>




   <?php
   $ruta = scandir("imagenes");
   for ($i = 0; $i < count($ruta); $i++) {
      if ($i > 1) {

         echo " <div class=cuadrado><input type=checkbox name=ima_nombre[] value=imagenes/$ruta[$i] > </input> <img src=imagenes/$ruta[$i]></div>";
         echo " ";
      }
   }


   ?>

   <input type="submit" name="botonborrar" value="Borrar">
   <?= $error ?? '' ?>
</form>

</html>