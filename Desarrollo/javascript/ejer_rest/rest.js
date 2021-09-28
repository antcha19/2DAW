window.onload = function () {



    document.getElementById("demo").innerHTML = ordenar();
   

  
    function ordenar() {
        const numeros = ["9", "2", "4", "8", "1"];

        var ordenado = numeros.sort();

        return ordenado;

    }
}