import Tabla from "./tabla.js";

window.onload = function () {

    var btnjugar = document.getElementById("jugar");
    var filas_input = document.getElementById("filas");
    var columas_input = document.getElementById("columnas");
    var btnreglas = document.getElementById("botonreglas");

    var div_tabla = document.getElementById("contenedor");
    var p_reglas = document.getElementById("p_reglas");

    btnjugar.addEventListener('click', () => {
        var varia_tabla = new Tabla(filas_input.value, columas_input.value);
        //genero la tabla
        varia_tabla.creartabla();

        varia_tabla.minas();



        mos_tabla();
    })


    //btn reglas
    btnreglas.addEventListener('click', () => {
        texto_reglas();
    })


    function texto_reglas() {

        p_reglas.style.display = "inline";

        //tabla
        div_tabla.style.display = "none";

    }

    function mos_tabla() {

        p_reglas.style.display = "none";
        div_tabla.style.display = "inline";



    }






}