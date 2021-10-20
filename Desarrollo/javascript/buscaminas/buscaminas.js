import Tabla from "./tabla.js";

window.onload = function () {

    var btnjugar = document.getElementById("jugar");

    var btnreglas = document.getElementById("botonreglas");
    //div de la tabla
    var div_tabla = document.getElementById("contenedor");
    var div_reglas = document.getElementById("div_reglas");
    var id_imagen = document.getElementById("imagensmile");
    var idtabla = document.getElementById("tabla");

    //chechkbox
    var principante = document.getElementById("principiante");
    var intermedio = document.getElementById("intermedio");
    var avanzado = document.getElementById("avanzado");


    


    btnjugar.addEventListener('click', () => {


        pintartabla();
        mos_tabla();
    })

    //imagen pulsar
    id_imagen.addEventListener('click', () => {
        pintartabla();
        mos_tabla();
    })

    //btn reglas
    btnreglas.addEventListener('click', () => {
        texto_reglas();

    })

    //mostar reglas y ocultar tabla
    function texto_reglas() {
        console.log("entro en la funcion texto_reglas")

        div_reglas.style.display = "inline";

        //tabla
        div_tabla.style.display = "none";
        //oculto imagen
        //    id_imagen.style.display="none";

    }

    //mostar tabla y ocultar reglas
    function mos_tabla() {

        div_reglas.style.display = "none";
        div_tabla.style.display = "inline";
        //muestro imagen
        // id_imagen.style.display= "inline";
    }


    function pintartabla() {

        if (principante.checked) {
            var varia_tabla = new Tabla(8, 8, 10);
            //genero la tabla
            varia_tabla.creartabla();
            //genero las minas
            varia_tabla.minas();
        }
        if (intermedio.checked) {
            varia_tabla = new Tabla(16, 16, 40);
            //genero la tabla
            varia_tabla.creartabla();
            //genero las minas
            varia_tabla.minas();
        }
        if (avanzado.checked) {
            avanzado.innerText = "sdfasdfg";
            varia_tabla = new Tabla(31, 16, 99);
            //genero la tabla
            varia_tabla.creartabla();
            //genero las minas
            varia_tabla.minas();
        }

        if ((avanzado.checked) && (intermedio.checked) && (principante.checked)) {
            alert("Solo puedes selecionar uno pero generara la primer check");
        } else {
            if ((avanzado.checked) && (intermedio.checked)) {
                alert("Solo puedes selecionar uno pero generara la primer check");
            }
        }
     

    }









}