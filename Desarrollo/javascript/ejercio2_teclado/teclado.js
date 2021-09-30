window.onload = function () {

    window.addEventListener("keyup", mover, true);

}



function mover(elevento) {

    var div = document.getElementById("cambia");

    var left = div.offsetLeft;
    var top = div.offsetTop;
    
    
    var evento = elevento;


    //arribar
    if (evento.keyCode == "38") {

        console.log("has pulsado la arriba " + evento.keyCode);
        div.style.top = top - 20 + "px";
    }

    //abajo 40
    if (evento.keyCode == "40") {
        console.log("has pulsado la abajo " + evento.keyCode);
        div.style.top = top + 20 + "px";
    }
    //derecha 39
    if (evento.keyCode == "39") {
        console.log("has pulsado la derecha " + evento.keyCode);
        div.style.left = left + 20 + "px";
    }
    //izquierda 37
    if (evento.keyCode == "37") {
        console.log("has pulsado la izquierda " + evento.keyCode);
        div.style.left = left - 20 + "px";
    }


}