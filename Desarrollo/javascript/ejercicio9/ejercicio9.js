window.onload = function () {
    var parametro = prompt("introduce un texto");
    let resultado = comprobar(parametro);
    document.write(resultado);

}

function comprobar(comprobartexto) {


    var resultado;
    if (mayus == comprobartexto.toUpperCase()) {
        resultado = "es mayuscula";
    } else if (minus == comprobartexto.toLowerCase()) {
        resultado = "es mnuscula";
    } else {
        resultado = "estan mezcladas"
    }
    return resultado;

}