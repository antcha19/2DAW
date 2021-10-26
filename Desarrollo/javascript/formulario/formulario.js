window.onload = function () {

    comprobarcontraseñas();

    registrar = document.getElementById("boton");
    contrasena1 = document.getElementById("contrasena");
    contrasena2 = document.getElementById("contrasena2");
    fecha = document.getElementById("fecha");


    registrar.addEventListener('click', () => {

        fechaactual = new Date();
        fechaI = fecha.value.split("/");
        fechaIni = new Date(fechaI[2], fechaI[1] - 1, fechaI[0]);

        console.log(fechaactual);
        console.log(fechaI);
        if (fechI == fechaIni) {
            console.log("es mayor la fecha");
        }

    });


    function comprobarcontraseñas() {
        if (contrasena1.value == contrasena2.value) {
            contrasena2.setCustomValidity("Las contraseñas deben coincidir");
            console.log("Las contraseñas deben coincidir");
        } else {
            contrasena2.setCustomValidity("");
        }

    }

}