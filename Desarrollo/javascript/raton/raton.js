window.onload = function () {

    //variables
    var raton = document.getElementById("idraton");
    var reiniciar = document.getElementById("reiniciar");
    var x;
    var y;
    var pos_anteriorX = 0;
    var pos_anteriorY = 0;




    //escuchar el documento
    document.addEventListener('mousemove', (evento) => {
        //obtengo las coordenadas del raton
        x = evento.clientX;
        y = evento.clientY;
        var coordenadas = "Coordinates: (" + x + "," + y + ")";
        //imprimo para comprobar 
        console.log(coordenadas);


        if (x > pos_anteriorX && y == pos_anteriorY) {
            console.log("derecha");
            //cambiamos el estilo de la foto
            raton.style.left = x + "px";
        }
        if (x < pos_anteriorX && y == pos_anteriorY) {
            console.log("izquierda");
            //cambiamos el estilo de la foto
            raton.style.left = x + "px";
        }
        if (x == pos_anteriorX && y > pos_anteriorY) {
            console.log("arriba");
            //cambiamos el estilo de la foto
            raton.style.top = y + "px";
        }
        if (x == pos_anteriorX && y < pos_anteriorY) {
            console.log("abajo");
            //cambiamos el estilo de la foto
            raton.style.top = y + "px";
        }
        //igualo
        pos_anteriorY = y;
        pos_anteriorX = x;

    });
    //reinciar la pagina
    reiniciar.addEventListener('click', () => {
        window.location.reload();
    });
}