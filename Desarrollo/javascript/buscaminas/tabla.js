
var div_tabla;


class Tabla {
    //creo el constructor para crea el tabla
    constructor(filas, columnas) {
        this.fila = filas;
        this.columna = columnas;
    }





    creartabla() {

        console.log("prueba  fila" + this.fila);
        console.log("prueba " + this.columna);
        //obtengo la id del div
        div_tabla = document.getElementById("contenedor");
        // creamos la tabla
        var tabla = document.createElement("table");
        //ponemos la id a la tabla;
        tabla.id = "idtabla";
        for (var f = 0; f < this.columna; f++) {
            var fila = document.createElement("tr");
            for (var c = 0; c < this.fila; c++) {
                //crea las celda para cada fila
                var celda = document.createElement("td");
                //pongo la id a cada celda;
                celda.id = f + "," + c;
                let id = celda.id;
                
                celda.innerHTML = id;
                fila.appendChild(celda ) ;
            }
            //agrego la fila a la tabla
            tabla.appendChild(fila);
        }
        div_tabla.appendChild(tabla);
    }

    minas() {
        console.log("Entro en minas");

    }
}

export default Tabla;