window.onload = function () {
    var enteros = prompt("Introduce  un numero");
   
    var numero = calcular(enteros);
    document.write("es " + numero);

}

function calcular(resultado) {

    if (resultado % 2 == 0) {
        return "par";
    } else {
        return "impar";
    }


}