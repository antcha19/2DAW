window.onload = function () {

    
    document.getElementById("enlace").addEventListener('click', () => {
        var oculto = document.getElementById("adicional");
        oculto.className = "visible";

        var visible = document.getElementById("enlace");
        visible.className = "oculto";

    })

}