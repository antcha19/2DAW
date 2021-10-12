<?php
$ima_nombre = [];
require "ima_cabecera.php";
?>
<form method="post" action="delete.php" enctype="multipart/form-data">

  
   <?php

//muestra las imagenes en el index.php
   $ruta = scandir("imagenes");
   for ($i = 0; $i < count($ruta); $i++) {
      if ($i > 1) {
         echo " <div class=cuadrado><input  type=checkbox name=ima_nombre[] value=imagenes/$ruta[$i] > ";
         echo "</input> <img src=imagenes/$ruta[$i]></div>";
      }
   }
   ?>

   <?= $error ?? '' ?>
   <div class0="btnborrar">
   <input type="submit" name="Enviar" value="Borra imagenes">
   </div>
   
</form>
</body>

</html>