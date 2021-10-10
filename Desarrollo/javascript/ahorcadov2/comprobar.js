//recibo el array ej comprobarletra(arr_return) 
function comprobarletra(arr_return) {
    let input = document.getElementById("buscaletra");
    let comprobar = document.getElementById("botoncomprobar");

    var palabraoriginal = arr_return[0];
    var lineas = arr_return[1];
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


    //Bucle para comprobar
    for (var i = 0; i < palabraoriginal.length; i++) {
        console.log(palabraoriginal[i]);

        if (palabraoriginal[i] == buscaletra) {
            //encuentra letra
            arrlineas[i] = buscaletra; //cambia guión por letra
            contadorvidas_boolean = false;
        } else {
            //quita vidas si no encuentra 
            contadorvidas_boolean = true;

        }
        contador++;
    }

    console.log(contadorvidas + "resta vidas")
    //array de guiones cambiado convertido a cadena
    console.log("array lines" + arrlineas)
    lineas = arrlineas.join('');
    //cambiar palabra con guiones a palabra con letras cambiadas
    document.getElementById('contenedor').innerText = lineas;
    // añado las palabras utilizadas
    var paaa = document.getElementById("utilizadas").innerText += buscaletra + "";



    console.log("tamaño " + paaa.length);
    console.log("tamaño " + contadorvidas);


    if (paaa.length == 1) {
        //si las vidas son 0 muestra mensaje de perder
        document.getElementById("vidas").innerHTML = "Tienes 7 vidas";
    }
    if (paaa.length == 2) {
        //si las vidas son 0 muestra mensaje de perder
        document.getElementById("vidas").innerHTML = "Tienes 6 vidas";
    }
    if (paaa.length == 3) {
        //si las vidas son 0 muestra mensaje de perder
        document.getElementById("vidas").innerHTML = "Tienes 5 vidas";
    }
    if (paaa.length == 4) {
        //si las vidas son 0 muestra mensaje de perder
        document.getElementById("vidas").innerHTML = "Tienes 4 vidas";
    }
    if (paaa.length == 5) {
        //si las vidas son 0 muestra mensaje de perder
        document.getElementById("vidas").innerHTML = "Tienes 3 vidas";
    }
    if (paaa.length == 6) {
        //si las vidas son 0 muestra mensaje de perder
        document.getElementById("vidas").innerHTML = "Tienes 2 vidas";
    }
    if (paaa.length == 7) {
        //si las vidas son 0 muestra mensaje de perder
        document.getElementById("vidas").innerHTML = "Tienes 2 vidas";
    }
    if (paaa.length == contadorvidas) {
        //si las vidas son 0 muestra mensaje de perder
        document.getElementById("vidas").innerHTML = "Has perdido la partida";
        //habilito el boton cuando gane o pierda
        reiniciar.removeAttribute("disabled");
        //desabilito boton comprobar
        comprobar.setAttribute("disabled", "true");
        input.setAttribute("disabled", "true");
        document.getElementById("imagen").src = "corazon4.jpeg";
    }



    //vacio el input de busca palabra
    buscaletra = document.getElementById("buscaletra").value = "";
    //sobreescribir lineas para pasarlo a ahorcadojs
    arr_return[1] = lineas;
    return arr_return;
}

export default comprobarletra;