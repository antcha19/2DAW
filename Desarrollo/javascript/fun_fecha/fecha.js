window.onload = function () {

    const aleatorio = valor_recibido => Math.floor(Math.random() * valor_recibido) + 1;
    var numero_dado = prompt("Introduce palabra");
    document.write(aleatorio(valor_recibido));


}