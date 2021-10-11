window.onload = function () {


    var raton = document.getElementById("raton");
    var x;
    var y;
    var pos_anteriorX = 0;
    var pos_anteriorY = 0;


    //escuchar el documento
    document.addEventListener('mousemove', (evento) => {
        x = evento.pageX;
        y = evento.pageY;
        var coordenadas = "Coordinates: (" + x + "," + y + ")";
        console.log(coordenadas);

        if (x > pos_anteriorX && y == pos_anteriorY) {
            console.log("derecha");
            raton.style.marginLeft = x + "px";
        }
        pos_anteriorY = y;
        pos_anteriorX = x;




    })

}