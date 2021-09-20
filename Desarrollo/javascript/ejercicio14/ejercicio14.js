window.onload = function () {

    //Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
    document.getElementById("enlace_1").onclick = oculta;

    /*Cuando se vuelva a pinchar sobre el mismo enlace, 
    se muestre otra vez esa sección de contenidos*/
    document.getElementById("enlace_1").onclick = oculta2;

    /*Completar el resto de enlaces de la página para 
    que su comportamiento sea idéntico al del primer enlace*/
    var elementos = document.getElementsByTagName("p");

    for (var i = 0; i < elementos.length; i++) {
        elementos[i].onclick = oculta3;

    }

    /*Cuando una sección se oculte, debe cambiar el mensaje 
    del enlace asociado (pista: propiedad innerHTML)*/



}

function oculta() {
    var oculta = document.getElementById("contenidos_1");
    oculta.style.display = "none";

}
function oculta2() {
    var oculta = document.getElementById("contenidos_1");
    oculta.style.display = "inline";

}

function oculta3() {
    var parrafo = document.getElementsByTagName("a");

    for (var i = 0; i < parrafo.length; i++) {
        this.id.parrafo[i].style.display = "none";
    }
  

}