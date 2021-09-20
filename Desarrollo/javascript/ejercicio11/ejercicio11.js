
window.onload = function () {
    //numeros de enlaces de la pafgina
    var enlace = document.getElementsByTagName("a");

    console.log(" numeros de enlaces de la pagina " + enlace.length);


    //Dirección a la que enlaza el penúltimo enlace
    var penultimo = enlace[enlace.length - 2];
    console.log(penultimo.href);

    // Numero de enlaces que enlazan a http://prueba
    var enlaceshttp = document.getElementsByTagName("a");
    console.log('total '+enlaceshttp.length);
    var contador =0;
    for (var i = 0; i < enlaceshttp.length; i++) {
        var nombres = enlaceshttp[i];
        if (nombres.href == "http://prueba/") {
            contador++;
           
        }
        
    }
    console.log('tiene ' + contador)

    //Número de enlaces del tercer párrafo
    var parrafos = document.getElementsByTagName("p");

    var tercer_parrafo = parrafos[2];
    var enlaces_tercer = tercer_parrafo.getElementsByTagName("a");
    console.log('numero de enlaces ' + enlaces_tercer.length);
}
