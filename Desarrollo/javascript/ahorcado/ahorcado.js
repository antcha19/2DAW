window.onload = function () {
    //variables globales
    var palabraoriginal;
    let lineas = "";
    // declarcion de los botones y todo lo que necesito
    let input = document.getElementById("buscaletra");
    let empezar = document.getElementById("empezar");
    let comprobar = document.getElementById("botoncomprobar");
    let reiniciar = document.getElementById("reiniciar");
    //desabilito el boton empezar hasta que termine de jugar
    reiniciar.setAttribute("disabled","false");


    empezar.addEventListener("click", empezarjuego, true);
    comprobar.addEventListener("click", comprobarletra, true);


    function empezarjuego() {
        var palabraintroducida = prompt("Introduce palabra");
        palabraoriginal = document.getElementById("contenedor").innerHTML = palabraintroducida;
        console.log(palabraoriginal);

        for (let i = 0; i < palabraoriginal.length; i++) {
            if (palabraoriginal.charAt(i) == " ") {
                lineas = lineas + " ";
            }
            lineas = lineas + "-";

        }
        console.log(lineas);
        document.getElementById("contenedor").innerText = lineas;
        //mostara al pulsar empezar juego
        var comprobar = document.getElementById("comprobar");
        comprobar.style.display = "inline";

        //ocultamos el boton de empezar juego 
        let empezar_oculto = document.getElementById("empezar");
        empezar_oculto.style.display = "none";


    }

    function comprobarletra() {

        //recoge la palabra

        console.log("palabra recogida " + palabraoriginal);
        var array = [];
        //divido la palabra
        //    var palabradivida = palabraoriginal.split(' ');
        // array = palabradivida;

        var buscaletra = document.getElementById("buscaletra").value;
        console.log("buscar " + buscaletra);
        var contador = 0;
        //contador de vidas:
        var contadorvidas = 8;
        var contadorvidas_boolean = false;
        document.getElementById("vidas").value = contadorvidas;

        //guardo la letra utilizada para que me la muestre
        var letras_utilizadas = buscaletra;
        //recorro el array para buscar si existe la letra
        let arrlineas = lineas.split('');

        let ganar;

        //Bucle para comprobar
        for (var i = 0; i < palabraoriginal.length; i++) {
            console.log(palabraoriginal[i]);

            if (palabraoriginal[i] == buscaletra) {
                //encuentra letra
                arrlineas[i] = buscaletra; //cambia guión por letra
            } else {
                //quita vidas si no encuentra 
                contadorvidas_boolean = true;

            }
            contador++;
        }
        console.log(contadorvidas + "resta vidas")
        //array de guiones cambiado convertido a cadena
        lineas = arrlineas.join('');
        //cambiar palabra con guiones a palabra con letras cambiadas
        document.getElementById('contenedor').innerText = lineas;

        // añado las palabras utilizadas
        document.getElementById("utilizada").innerHTML += buscaletra + ", ";
        if (contadorvidas_boolean == true) {
            if (contadorvidas == 0) {
                //si las vidas son 0 muestra mensaje de perder
                document.getElementById("vidas").innerHTML = "Has perdido la partida";
                //Deshabilitar todo
            }

        }
        if (contadorvidas_boolean == false) {
            //Si aún tienes vidas
            contadorvidas--;
            console.log(contadorvidas);
            //cambiar nº vidas
            document.getElementById("vidas").innerText = contadorvidas;
            contadorvidas_boolean = false;
        }
        //si has encontrado letra se comprueba si la palabra ya esta completa
        if (palabraoriginal == lineas) {
            console.log(palabraoriginal)
            console.log(lineas);
            document.getElementById("vidas").innerHTML = "Has ganado la partida";
            //habilito el boton cuando gane o pierda
            reiniciar.removeAttribute("disabled");
            //desabilito boton comprobar
            comprobar.setAttribute("disabled","true");
            input.setAttribute("disabled","true");
        }
        console.log(palabraoriginal)
        console.log(lineas);
        console.log("palabra utilizada " + letras_utilizadas);
        //vacio el input de busca palabra
        buscaletra = document.getElementById("buscaletra").value = "";
    }

    
}