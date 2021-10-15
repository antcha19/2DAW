class tabla {
    //creo el constructor para crea el tabla
    constructor(filas, columnas) {
        this.x = filas;
        this.y = columnas;
    }


    creartabla() {
        console.log("prueba");

        var tbl = document.getElementById("cuadrado");
        var tblBody = document.createElement("tbody");
        for (var i = 0; i < this.x; i++) {
            var fila = document.createElement("tr");
            for (var j = 0; j < this.y; j++) {
                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(i + "-" + j);
                celda.appendChild(textoCelda);
                fila.appendChild(celda);
            }
            tblBody.appendChild(fila);
        }
        tbl.appendChild(tblBody);
        tbl.setAttribute("border", "2");
    }

}

export default tabla;