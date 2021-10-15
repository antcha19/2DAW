 export default class tabla {
     //creo el constructor para crea el tabla
     constructor(filas, columnas) {
         this.x = filas;
         this.y = columnas;
     }


     creartabla() {
         let texto = "";
         for (let i = 0; i < this.x; i++) {
             texto += "<tr>";
             for (let j = 0; j < this.y; j++) {
                 texto += "<td></td>";
             }
             texto += "</tr>";
             console.log(texto)
         }
         
         document.getElementById("cuadrado").innerHTML = texto;
         
     }

 }