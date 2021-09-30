


<html>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

<link href="imagenes.css" rel="stylesheet" type="text/css">
<form method="post" enctype="multipart/form-data">

<a class='btn btn-primary' href='upload.php?'>Enviar imagenes</a>
<a class='btn btn-primary' href='delete.php?'>Borrar imagenes</a>

   <?php
   $ruta = scandir("imagenes");
   for ($i = 0; $i < count($ruta); $i++) {
      if ($i > 1) {
       //  echo "<input type=checkbox value=imagenes/$ruta[$i]> </input>";
         echo " <img src=imagenes/$ruta[$i]>";
         
      }
   }


   ?>
   <?= $error ?? '' ?>
</form>

</html>
