window.onload = function () {

    var btnjugar = document.getElementById("jugar");
    var cuadrado = document.getElementById("cuadrado");
    var filas_input = document.getElementById("filas");

    var columas_input = document.getElementById("columas");






    btnjugar.addEventListener('click', () => {
        //obtengo valores 
        filasvalor = filas.value;
        filascolumnas = columnas.value;
      

        tableto(filasvalor, filascolumnas);
        obtnerid();

    })


    function tableto(filas, columnas) {
        console.log("click en jugar");
        for (let i = 0; i < filas; i++) {
         
            for (let j = 0; j < columnas; j++) {
                console.log("divI " + i + " divJ " + j)
                let newdiv = document.createElement("button");
                newdiv.id = i + "," + j;
                cuadrado.appendChild(newdiv).innerText = "posicion " + i + j;

            }

        }

    }

    function obtnerid() {
        //array de botones
        var boton = document.getElementsByTagName("button");
        var id = "";

        for (var i = 0; i < boton.length; i++) {
            id = boton[i].getAttribute('id');
        }



    }

}