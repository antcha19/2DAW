import Tabla from "./tabla.js";

window.onload = function () {

    var btnjugar = document.getElementById("jugar");
    var filas_input = document.getElementById("filas");
    var columas_input = document.getElementById("columnas");
    var btnreglas = document.getElementById("botonreglas");
    var id_tabla = document.getElementById("idtabla");
    var p_reglas = document.getElementById("p_reglas");

    btnjugar.addEventListener('click', () => {
        var varia_tabla = new Tabla(filas_input.value, columas_input.value);
        //genero la tabla
        varia_tabla.creartabla();

        varia_tabla.minas();


        for (let t = 0; t < id_tabla.length; t++) {
            console.log("entro en el bucle minas");
            console.log(id_tabla[t]);
        }

        ocultar();
    })
  

    //btn reglas
    btnreglas.addEventListener('click', () => {
        texto_reglas();
    })


    function texto_reglas() {

        p_reglas.style.display = "inline";

        //tabla
        id_tabla.style.display = "none";

    }
    function ocultar() {

        p_reglas.style.display = "none";

       

    }

   




}