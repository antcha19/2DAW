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
    var paaa = document.getElementById("utilizadas").innerText += buscaletra + "";
    // añado las palabras utilizadas
    //  document.getElementById("utilizada").innerHTML += buscaletra + ", ";
    if (contadorvidas_boolean == true) {
        if (contadorvidas == 0) {
            //si las vidas son 0 muestra mensaje de perder
            document.getElementById("vidas").innerHTML = "Has perdido la partida";
            //Deshabilitar todo
        }

    }
    if (contadorvidas_boolean == false) {
        console.log("ha entrado aqui");
        //Si aún tienes vidas
        contadorvidas--;
        console.log(contadorvidas);
        //cambiar nº vidas
        document.getElementById("vidas").innerText = contadorvidas;
        //  contadorvidas_boolean = false;
    }
    //si has encontrado letra se comprueba si la palabra ya esta completa
    if (palabraoriginal == lineas) {
        console.log(palabraoriginal)
        console.log(lineas);
        document.getElementById("vidas").innerHTML = "Has ganado la partida";
        //habilito el boton cuando gane o pierda
        reiniciar.removeAttribute("disabled");
        //desabilito boton comprobar
        comprobar.setAttribute("disabled", "true");
        input.setAttribute("disabled", "true");
    }



    //vacio el input de busca palabra
    buscaletra = document.getElementById("buscaletra").value = "";
    //sobreescribir lineas para pasarlo a ahorcadojs
    arr_return[1] = lineas;
    return arr_return;
}

export default comprobarletra;