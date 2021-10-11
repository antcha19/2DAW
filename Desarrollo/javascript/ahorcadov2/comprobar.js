//recibo el array ej comprobarletra(arr_return) 
var contador= 8;
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
    
    //contador de vidas:
    var contadorvidas = 8;

    document.getElementById("vidas").value = contadorvidas;
    //recorro el array para buscar si existe la letra
    let arrlineas = lineas.split('');

    //Bucle para comprobar
    for (var i = 0; i < palabraoriginal.length; i++) {
        console.log(palabraoriginal[i]);

        if (palabraoriginal[i] == buscaletra) {
            //encuentra letra
            arrlineas[i] = buscaletra; //cambia guión por letra

        }
    }
    var comprueba = palabraoriginal.includes(buscaletra);

   
    if (comprueba === false) {
        
        contador = contador - 1;
        document.getElementById("vidas").innerHTML = "Tienes " + contador +" vidas"; 
    }

    console.log("sdfdg " + contador);



    console.log(contadorvidas + "resta vidas")
    //array de guiones cambiado convertido a cadena
    console.log("array lines" + arrlineas)
    lineas = arrlineas.join('');
    //cambiar palabra con guiones a palabra con letras cambiadas
    document.getElementById('contenedor').innerText = lineas;
    // añado las palabras utilizadas
    var paaa = document.getElementById("utilizadas").innerText += buscaletra + "";
    //Bucle para comprobar





    console.log("tamaño " + paaa.length);
    console.log("tamaño " + contadorvidas);

    if (contador == 0) {
        //si las vidas son 0 muestra mensaje de perder
        document.getElementById("vidas").innerHTML = "Has perdido la partida";
        //habilito el boton cuando gane o pierda
        reiniciar.removeAttribute("disabled");
        //desabilito boton comprobar
        comprobar.setAttribute("disabled", "true");
        input.setAttribute("disabled", "true");
        document.getElementById("imagen").src = "corazon4.jpeg";
        document.getElementById('contenedor').innerText = "La palabra introducida es: " + palabraoriginal;
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