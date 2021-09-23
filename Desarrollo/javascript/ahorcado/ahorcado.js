window.onload = function () {
    //boton empezar 
    let empezar = document.getElementById("empezar");


    empezar.addEventListener("click", empezarjuego, true);

}

function empezarjuego() {
    //vamos introducir la palabra
    var palabraintroducida = prompt("Introduce palabra");


   

    console.log(palabraintroducida);

    for (var i = 0; i < palabraintroducida.length; i++) {

        document.getElementById("contenedor").innerHTML += palabraintroducida[i];
    }



    //mostara al pulsar empezar juego
    var comprobar = document.getElementById("comprobar");
    comprobar.style.display = "inline";

    //ocultamos el boton de empezar juego 
    let empezar_oculto = document.getElementById("empezar");
    empezar_oculto.style.display = "none";



}