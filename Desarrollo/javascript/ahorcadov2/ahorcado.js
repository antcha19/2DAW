   //import toda la funciones
   import introduccion from './pa_introducida.js';
   import ocultar_botones from './ocultar.js';

   import comprobar_letra from './comprobar.js';

   window.onload = function () {

       //variables globales
       // var palabraoriginal;
       let lineas = "";
       // declarcion de los botones y todo lo que necesito
       let empezar = document.getElementById("empezar");
       let comprobar = document.getElementById("botoncomprobar");
       let reiniciar = document.getElementById("reiniciar");
       let arr_return = "";
       let palabraoriginal = "";
       

       //desabilito el boton empezar hasta que termine de jugar
       reiniciar.setAttribute("disabled", "true");

       empezar.addEventListener('click', () => {
           //recogo el array con las variables que necesito
           arr_return = introduccion();
           //obtengo la posicion 0 que tiene guardada la varia palabraoriginal
           palabraoriginal = arr_return[0];
           lineas = arr_return[1]
           ocultar_botones();
       })

       comprobar.addEventListener('click', () => {
           //recogo los datos de la palabara original
           //paso el array
           arr_return = comprobar_letra(arr_return);

       })

       //boton reiniciaar
       reiniciar.addEventListener('click', () => {
           window.location.reload();
       })

       //boton comprobar podemos utilizar el telcado "Enter"
       window.addEventListener('keyup', teclado, true);

       function teclado(elevento) {
           var evento = elevento;
           console.log("has pulsado " + evento.keyCode);
           if (evento.keyCode == "13") {
               //paso el array
               comprobar_letra(arr_return);
           }
       }

       //mensaje al pasar el 
     /*  comprobar.addEventListener('mouseover', () => {

           comprobar = alert("Puedes pulsar la tecla ENTER");
       })*/
     







   }