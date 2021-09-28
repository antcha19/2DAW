  <?php require 'cabecera.php' ?>
  <html>
  <form method="post" enctype="multipart/form-data">
      <input type="file" name="foto"><br>
      <input type="submit" name="Enviar" value="Enviar">
      <?= $error ?? '' ?>
  </form>

  </html>