window.onload = function () {



    registrar = document.getElementById("boton");
    contrasena1 = document.getElementById("contrasena");
    contrasena2 = document.getElementById("contrasena2");
    fecha = document.getElementById("fecha");

    contrasena2.addEventListener("input", () => {
        console.log(contrasena1.value);
        console.log(contrasena2.value);


        if (contrasena1.value != contrasena2.value) {
            if (!contrasena2.checkValidity()) {
                contrasena2.setCustomValidity("Las contraseñas deben coincidir");
                console.log("Las contraseñas deben coincidir");
            }

        } else if (contrasena1.value == contrasena2.value) {
            if (!contrasena2.checkValidity()) {
                contrasena2.setCustomValidity("");
                console.log("Las contraseñas estan correctas");
            }

        }
    })


    registrar.addEventListener('click', () => {

        fechaactual = new Date();
        fechaI = fecha.value.split("/");
        fechaIni = new Date(fechaI[2], fechaI[1] - 1, fechaI[0]);

        console.log(fechaactual);
        console.log(fechaI);



    });



}