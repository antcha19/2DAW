var div_tabla;


class Tabla {
    //creo el constructor para crea el tabla
    constructor(filas, columnas, cantidad_minas) {
        this.fila = filas;
        this.columna = columnas;
        this.cantidad_minas = cantidad_minas;
    }


    creartabla() {

        console.log("prueba  fila" + this.fila);
        console.log("prueba " + this.columna);
        //obtengo la id del div
        div_tabla = document.getElementById("contenedor");
        // creamos la tabla
        var tabla = "<table id=tabla>"
        //ponemos la id a la tabla;
        //tabla.id = "idtabla";
        for (var f = 0; f < this.fila; f++) {
            //creo el tr
            tabla = tabla + "<tr>";
            for (var c = 0; c < this.columna; c++) {
                //creo el td y finalizo
                tabla += "<td id='" + f + c + "'></td>";
            }

            tabla = tabla + "</tr>";
        }
        tabla = tabla + "</tr>";
        div_tabla.innerHTML = tabla;




    }


    minas() {
        console.log("Entro en minas");
        //array minas

        let fila_ale;
        let colum_ale;
        var id;
        //calculo la cantidad de minas dependiendo de su tamaño 
        /*   let cant_minas = this.fila * this.columna;
           cant_minas = cant_minas / 8;

           console.log("cantidad de minas " + Math.round(cant_minas));**/
        let minas_total = 0;
        //obtengo la id de la tabla y todos los tds  
        let tds = document.getElementById("tabla").getElementsByTagName("td");

        /* while (cant_minas > minas_total) {
             //random de filas y columns
             fila_ale = Math.floor(Math.random() * this.fila);
             colum_ale = Math.floor(Math.random() * this.columna);
             id = fila_ale + "" + colum_ale;
 
             for (let t = 0; t < tds.length; t++) {
                 //si las id coinciden pongo una mina y si en esa posicion ya existe 
                 //una mina no entra en el bucle 
                 if (tds[t].id == id && tds[t].textContent != "*") {
                     tds[t].textContent = "*";
                     console.log("mina colocada en la posicion " + id);
                 }
             }
             minas_total++;
         }*/
        var tabla_bide = new Array();
        var numeros_tds = 0;
        for (let f = 0; f < this.fila; f++) {
            tabla_bide[f] = [];
            for (let c = 0; c < this.columna; c++) {
                tabla_bide[f][c] = tds[numeros_tds];
                numeros_tds++;

            }
        }


        console.log("cantidad de minas " + this.cantidad_minas);

        while (this.cantidad_minas > minas_total) {
            //random de filas y columns
            fila_ale = Math.floor(Math.random() * this.fila);
            colum_ale = Math.floor(Math.random() * this.columna);
            //guardo la id aleatoria
            let id_aleatoria = fila_ale + "" + colum_ale;
            console.log("id aleatoria " + id_aleatoria);
            for (let f = 0; f < this.fila; f++) {

                for (let c = 0; c < this.columna; c++) {

                    //si es igual pongo una mina
                    if (tabla_bide[f][c].id == id_aleatoria) {
                        //      tabla_bide[f][c].innerHTML = "<img src=bomba.jpeg id=bomba >";
                        tabla_bide[f][c].innerHTML = "*";

                        tabla_bide[f][c].value = "*";
                        console.log("mina colocada en la posicion " + id_aleatoria);
                        console.log("valor " + tabla_bide[f][c].value);
                    }
                }


            }
            minas_total++;
        }

        for (let f = 0; f < this.fila; f++) {

            for (let c = 0; c < this.columna; c++) {

                if (tabla_bide[f][c].value != "*") {
                    //izquierda ponemos el 1 , tambien comprobamos que no hay una minas
                    if (((c - 1) >= 0) && (tabla_bide[f][c - 1].value == "*")) {
                        //La celda de la derecha
                        tabla_bide[f][c].innerHTML = "1";
                    }
                    if (((f - 1) >= 0) && (tabla_bide[f - 1][c].value == "*")) {
                        //La celda de abajo
                        tabla_bide[f][c].innerHTML = "1";
                    }
                    if (((c + 1) <= this.columna - 1) && (tabla_bide[f][c + 1].value == "*")) {
                        //La celda de la izquierda
                        tabla_bide[f][c].innerHTML = "1";
                    }
                }


            }


        }


    }





}

export default Tabla;