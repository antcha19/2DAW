window.onload = function () {

    window.addEventListener("keyup", mover, true);





}

function mover(elevento) {

    var div = document.getElementById("cambia");
    div.style.margin = "200px 200px 200px 200px";
    

    
    var evento = elevento;
    console.log(evento.keyCode);

    //arribar
    if (evento.keyCode == "38") {
        console.log("has pulsado la arriba " + evento.keyCode);
        console.log(div.style.marginTop);
        div.style.marginTop =  div.style.marginTop -20;
    }
    /*
    //abajo 40
    if (evento.keyCode == "40") {
        console.log("has pulsado la abajo " + evento.keyCode);
        //div.style.margin = "-20px";
    }
    //derecha 39
    if (evento.keyCode == "39") {
        console.log("has pulsado la derecha " + evento.keyCode);
        //div.style.margin = "-20px";
    }
     //izquierda 37
    if (evento.keyCode == "37") {
        console.log("has pulsado la izquierda " + evento.keyCode);
        //div.style.margin = "-20px";
    }
    */
   
}