window.onload = function () {


    var raton = document.getElementById("raton");
    var x;
    var y;
    var pos_anteriorX = 0;
    var pos_anteriorY = 0;


    //escuchar el documento
    document.addEventListener('mousemove', (evento) => {
        //obtengo las coordenadas del raton
        x = evento.pageX;
        y = evento.pageY;
        var coordenadas = "Coordinates: (" + x + "," + y + ")";
        //imprimo para comprobar 
        console.log(coordenadas);


        if (x > pos_anteriorX && y == pos_anteriorY) {
            console.log("derecha");
            //cambiamos el estilo de la foto
            raton.style.marginLeft = x + "px";
        }
        if (x < pos_anteriorX && y == pos_anteriorY) {
            console.log("izquierda");
            //cambiamos el estilo de la foto
            raton.style.marginLeft = x + "px";
        }
        if (x == pos_anteriorX && y > pos_anteriorY) {
            console.log("arriba");
            //cambiamos el estilo de la foto
            raton.style.marginTop = y + "px";
        }
        if (x == pos_anteriorX && y < pos_anteriorY) {
            console.log("abajo");
            //cambiamos el estilo de la foto
            raton.style.marginTop = y + "px";
        }
        //igualo
        pos_anteriorY = y;
        pos_anteriorX = x;




    })

}