window.onload = function () {
    //variables globales

    //boton empezar 
    let empezar = document.getElementById("empezar");
    let comprobar = document.getElementById("botoncomprobar");




    empezar.addEventListener("click", empezarjuego, true);
    comprobar.addEventListener("click", comprobarletra, true);


    function empezarjuego() {
        var palabraintroducida = prompt("Introduce palabra");
       const palabraSeparadaLabel= document.getElementById("contenedor");



        //  palabradivida = palabraintroducida.split(' ');

        //prueba
        const palabrasSeparadas = palabraSeparadaLabel.value.split("")
        let palabraAConstruir = palabrasSeparadas[0];
        let lineas = "";
        for (let index = 0; index < palabrasSeparadas.length; index++) {
          if(index !== 0) {
             lineas = lineas + ",___"
          }
        }
        palabraAConstruir = palabraAConstruir + lineas

        palabraSeparadaLabel.innerText = palabraAConstruir



        //reemplaza la palabra por guines"_"
        // const pa_guiones = palabraintroducida.replace(/./g, "_ ");
        //document.getElementById("contenedor").innerHTML = palabradivida;
        document.getElementById("contenedor").innerHTML = palabraintroducida;

        //mostara al pulsar empezar juego
        var comprobar = document.getElementById("comprobar");
        comprobar.style.display = "inline";

        //ocultamos el boton de empezar juego 
        let empezar_oculto = document.getElementById("empezar");
        empezar_oculto.style.display = "none";


    }

    function comprobarletra() {

        //recoge la palabra
        var pa_recogida = document.getElementById("contenedor").innerHTML;

        var array = [];
        //divido la palabra
        var palabradivida = pa_recogida.split(' ');
        array = palabradivida;
        var buscaletra = document.getElementById("buscaletra").value;
        console.log("buscar " + buscaletra);
        var contador = 0;
        //contador de vidas:
        var contadorvidas = 8;
        var contadorvidas_boolean = 8;
        document.getElementById("vidas").value = contadorvidas;

        //guardo la letra utilizada para que me la muestre
        var letras_utilizadas = buscaletra;
        //recorro el array para buscar si existe la letra
        for (var i = 0; i < array.length; i++) {
            console.log(array[i]);

            if (array[i] == buscaletra) {

                console.log("letra encontrada " + buscaletra + contador);


            } else {
                //quita vidas si no encuentra 
                contadorvidas_boolean = true;
            }
            contador++;




        }
        // añado las palabras utilizadas
        document.getElementById("utilizada").innerHTML += buscaletra + ", ";
        if (contadorvidas_boolean == true) {
            contadorvidas--;
            document.getElementById("vidas").innerHTML = contadorvidas;
        }


        console.log("palabra utilizada " + letras_utilizadas);
        //vacio el input de busca palabra
        buscaletra = document.getElementById("buscaletra").value = "";
    }



}




