<html>

<head>
    <style>
        body {
            font-family: Verdana
        }

        td {
            font-size: 2em;
            padding: 10px
        }

        .boton {
            font-weight: bold;
            background-color: #aaa;
            margin: 4px;
            padding: 3px;
            font-size: 2em;
            color: blue
        }

        .boton a {
            text-decoration: none
        }
    </style>
</head>

<body>
    <h2>PROBADORES</h2>
    <?php

    $probador  = new Probador();
    echo  $probador->crear();


    ?>
    <br>
    <button type="submit" class="boton">Vaciar todos los probadores</button>
</body>

</html>