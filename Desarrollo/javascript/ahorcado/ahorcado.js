window.onload = function () {
    //variables globales

    //boton empezar 
    let empezar = document.getElementById("empezar");
    let comprobar = document.getElementById("botoncomprobar");


    empezar.addEventListener("click", empezarjuego, true);
    comprobar.addEventListener("click", comprobarletra, true);

}

function empezarjuego() {
    var palabraintroducida = prompt("Introduce palabra");
    //palabradivida = [palabraintroducida.split("")];
    var pa_guiones = palabraintroducida.replace(/./g,"_ ");
    document.getElementById("contenedor").innerHTML = pa_guiones;

    //mostara al pulsar empezar juego
    var comprobar = document.getElementById("comprobar");
    comprobar.style.display = "inline";

    //ocultamos el boton de empezar juego 
    let empezar_oculto = document.getElementById("empezar");
    empezar_oculto.style.display = "none";
}

function comprobarletra() {
    console.log('click en comprobar ');
    var pa_recogida = document.getElementById("contenedor").innerHTML;
    
    
    var array = [];

    var palabradivida = pa_recogida.split('');
    
    array = palabradivida;

    var buscaletra = document.getElementById("buscaletra").value;
    console.log("buscar " + buscaletra);
    var contador = 0;
    var palabrautilizada = buscaletra;
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
      
        if (array[i] == buscaletra) {
            console.log("letra encontrada " + buscaletra + contador);

        }
        contador++;

    }
    console.log("palabra utilizada " + palabrautilizada)





}