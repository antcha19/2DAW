window.onload = function () {
    const letras_dni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var dni = prompt("Introduce tu dni");

    var letrausuario = dni.substring(dni.length - 1);
    document.write(letrausuario);
    var numeros_dni = dni.substring(0, dni.length - 1);
    document.write(numeros_dni);

    if (numeros_dni >= 0 && numeros_dni <= 99999999) {
        let numero = numeros_dni % 23;

        let letra_obtenida = letras_dni[numero];
        console.log('sadghasdfdf')
        document.write("Tu letra del dni es " + letra_obtenida +
            " y tu dni completo es " + dni + letra_obtenida);
    } else {
       
        document.write("El dni es incorrecto");
    }

    if (letrausuario == letra_obtenida) {
        document.write("Las letras son iguales");
    } else {
        document.write("las letras son diferentes");
    }


}


