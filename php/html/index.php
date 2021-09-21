<h3>elige la tabla</h3>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

<?php

for ($i = 1; $i <= 10; $i++) {

   echo "<a class='btn btn-primary' href='tabla.php?tabla=$i'>$i</a>";
    
   }
?>
