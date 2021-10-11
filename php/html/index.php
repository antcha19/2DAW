<?php
$ima_nombre = [];
require "ima_cabecera.php";
?>
<form method="post" action="delete.php" enctype="multipart/form-data">

   <!--<a class='btn btn-primary' href='upload.php?'>Subir imagenes</a> -->
   <?php

   $ruta = scandir("imagenes");
   for ($i = 0; $i < count($ruta); $i++) {
      if ($i > 1) {
         echo " <div class=cuadrado><input  type=checkbox name=ima_nombre[] value=imagenes/$ruta[$i] > ";
         echo "</input> <img src=imagenes/$ruta[$i]></div>";
      }
   }
   ?>

   <?= $error ?? '' ?>
   <input type="submit" name="Enviar" value="Borra imageness">
</form>
</body>

</html>