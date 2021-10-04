//creo una funciona
function introduccion() {
  
    var lineas = "";
    var palabraintroducida = prompt("Introduce palabra");
    var contenedor = document.getElementById("contenedor");
    contenedor.value = palabraintroducida;
    console.log( "pa intro"+palabraintroducida);
    console.log(contenedor.value);
    var palabraoriginal = contenedor.value;
  
 //   console.log(palabraoriginal);

    for (let i = 0; i < palabraoriginal.length; i++) {
        if (palabraoriginal.charAt(i) == " ") {
            lineas = lineas + " ";
        }
        lineas = lineas + "-";
    }
    console.log(lineas);
    document.getElementById("contenedor").innerText = lineas;
    //guardo en un array las variables que quiero utlizar
    var arr_return = [palabraoriginal,lineas];
    return arr_return;
}

//exporta todo lo que hay en la funcion export 
export default introduccion;

