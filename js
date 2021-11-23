//      RESUMEN
//-------------------

//EXPRESIONES REGULARES
// Número de teléfono nacional (sin espacios)
//Exp. Reg.: /^\d{9}$/ o también /^[0-9]{9}$/ 

//Número de teléfono internacional
//Exp. Reg.: /^\(\+\d{2,3}\)\d{9}$/

//Fecha con formato DD/MM/AAAA
//Exp. Reg.: /^\d{2}\/\d{2}\/\d{4}$/

//Código postal
//Exp. Reg.: /^\d{5}$/ 

//Email
//Exp. Reg.: /^(.+\@.+\..+)$/
// .+ --> al menos un carácter cualquiera que no sea salto de línea


//Número entero
//Exp. Reg.: /^(\+|\-)?\d+$/ o también /^[+-]?\d+$/ o también /^[+-]?[0-9]+$/
//Puede ser positivo o negativo, por eso están el + y -

//Número real
//Exp. Reg.: /^[+-]?\d+([,.]\d+)?$/

//Obtener value
//-------------
//elemento.options[elemento.selectedIndex].value

/*
Validaciones en formulario
--------------------------
if(input.value == ""){//Comprobar que se rellene el input
    input.checkValidity();
    input.setCustomValidity('No rellenado.');
    input.reportValidity('');
}else{
    input.setCustomValidity('');
}
if(!input.checkValidity()){
    input.setCustomValidity('No rellenado.');
    input.reportValidity('');
}else{
    input.setCustomValidity('');
}
Capturar movimiento de ratón en div
-----------------------------------
eldiv.addEventListener('mousemove',(ev)=>{
    x = ev.clientX;
    y = ev.clientY;
    h1.innerText = "Posición x: "+x+" - Posición y: "+y;
    setTimeout(ev,100);
});
*/

/*
Clase
------
export default Clase{
    constructor(atributo) {
        this.atributo = atributo;
    }
}
En el documento de código fuera del window.onload = function (){}
-----------------------------------------------------------------
import Clase from "./clase.js";
extends --> Para heredar
*/

/*
EVENTOS
-------
Focus--> Click (Hacer focus) en un input
Blur--> Salir del focus del input, clickear fuera
MouseOver--> Ratón por encima
MouseOut --> Ratón no está por encima
MouseDown --> Click sin soltar
MouseUp --> Click soltando
MouseMove --> Mover ratón
KeyDown --> Pulsar tecla sin soltar
KeyUp --> Soltar tecla
Change --> Cambiar el value de algun input
Click
OnContextMenu --> Click derecho
*/

/*
Plantillas cadenas de carácteres ejemplo
----------------------------------------
const valor1 = parseInt(prompt('Ingrese primer valor:'));
const valor2 = parseInt(prompt('Ingrese segundo valor:'));
document.write(`La suma de ${valor1} y ${valor2} es ${valor1+valor2}`);
Funciones con parámetros por defecto
------------------------------------
function generarLista(vec, tipo = '<ul>') {
    let lista = tipo;
    for (let x = 0; x < vec.length; x++)
        lista += `<li>${vec[x]}</li>`;
    if (tipo == '<ul>')
        lista += '</ul>';
    else
       lista += '</ol>'
    return lista;
}
const opciones1 = ['opción 1', 'opción 2', 'opción 3', 'opción 4', 'opción 5'];
document.write(generarLista(opciones1));
const opciones2 = ['opción a', 'opción b', 'opción c', 'opción d'];
document.write(generarLista(opciones2, '<ol>'));
//Parámetros Rest
//---------------
function sumar(...valores) {
    let suma = 0;
    for (let x = 0; x < valores.length; x++)
        suma += valores[x];
    return suma;
}
document.write(sumar(10, 2, 44, 3));
document.write('<br>');
document.write(sumar(1, 2));
document.write('<br>');
document.write(sumar());
document.write('<br>');
MAPS
----
const mapa1 = new Map();
mapa1.set("casa", "house");
const mapa1 = new Map([
    ["casa", "house"],
    ["rojo", "red"],
    ["auto", "car"]
]);
mapa1.forEach((valor, clave) => document.write(`${clave}  ${valor}<br>`));
mapa1.get(nom_variable)
mapa1.delete("casa"); --> Eliminar un elemento
mapa1.clear(); --> Eliminar todos los elementos
console.log(mapa1.size);    // 0
Set
---
const conjunto1 = new Set();
conjunto1.add("C");
const conjunto1 = new Set(["C", "Pascal", "PHP", "Python"]);

