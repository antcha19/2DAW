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
                //pongo la id a cada celda  
                //   celda.innerHTML = id;
                fila.appendChild(celda);
            }
            //agrego la fila a la tabla
            tabla.appendChild(fila);
        }
        div_tabla.appendChild(tabla);
    }


    minas() {
        console.log("Entro en minas");
        //array minas
        const minas = [];
        let fila_ale;
        let colum_ale;
        var id;
        //calculo la cantidad de minas dependiendo de su tamaño 
        let cant_minas = this.fila * this.columna;
        cant_minas = cant_minas / 8;

        console.log("cantidad de minas " + Math.round(cant_minas));
        let minas_total = 0;
        //obtengo la id de la tabla y todos los tds  
        let tds = document.getElementsByTagName("td");

        while (cant_minas > minas_total) {
            //random de filas y columns
            fila_ale = Math.floor(Math.random() * this.fila);
            colum_ale = Math.floor(Math.random() * this.columna);
            id = fila_ale + "," + colum_ale;

            for (let t = 0; t < tds.length; t++) {
                /*si las id coinciden pongo una mina y si en esa posicion ya existe 
                 una mina no entra en el bucle */
                if (tds[t].id == id  && tds[t].textContent != "*") {
                    tds[t].textContent = "*";
                    console.log("mina colocada en la posicion " + id);
                }

            }

            minas_total++;
        }






    }
}

export default Tabla;