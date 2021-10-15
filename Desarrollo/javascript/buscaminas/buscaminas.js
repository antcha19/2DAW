import tabla from "./tabla.js";

window.onload = function () {

    var btnjugar = document.getElementById("jugar");
    var cuadrado = document.getElementById("cuadrado");
    var filas_input = document.getElementById("filas");

    var columas_input = document.getElementById("columas");
    






    btnjugar.addEventListener('click', () => {
        var tabla1 = new tabla ();
        tabla1.creartabla();

    })


    function obtnerid() {
        //array de botones
        var boton = document.getElementsByTagName("button");
        var id = "";

        for (var i = 0; i < boton.length; i++) {
            id = boton[i].getAttribute('id');
        }



    }

}