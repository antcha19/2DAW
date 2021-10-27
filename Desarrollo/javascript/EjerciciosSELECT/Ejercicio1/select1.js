window.onload = function () {

    //Ejercicio1
    var idpizza = document.getElementById("pizzas")
    var texto = document.getElementById("texto");


    //Ejercicio1
    idpizza.addEventListener('change', () => {
        texto.value = idpizza.options[idpizza.selectedIndex].value;
    })

    //Ejercicio2
    var resultado = document.getElementById("resultado");
    var procesadores = document.getElementById("procesador");
    var monitores = document.getElementById("monitor");
    var Disco = document.getElementById("disco");
    var calcular = document.getElementById("calcular");
    //Ejercicio2
    calcular.addEventListener('click', () => {
        var re_procesadores = parseInt(procesadores.options[procesadores.selectedIndex].value);
        var re_monitores = parseInt(monitores.options[monitores.selectedIndex].value);
        var re_disco = parseInt(Disco.options[Disco.selectedIndex].value);

        console.log(re_procesadores + re_monitores + re_disco);

        resultado.value = re_procesadores + re_monitores + re_disco + "€";
    });


    //Ejercicio3
    var pizzas3 = document.getElementById("pizzas3");
    var cantidad = document.getElementById("cantidad");
    var calcular_precio = document.getElementById("calcular_precio");
    var resultadopizza = document.getElementById("resultadopizza");

    calcular_precio.addEventListener('click', () => {
        var selecpizza = parseInt(pizzas3.options[procesadores.selectedIndex].value);
        console.log(selecpizza);
        console.log(cantidad.value);
        resultadopizza.value = selecpizza * cantidad.value + "€";
    });

    //Ejercicio3
    var pregunta1 = document.getElementById("pregunta1");
    var pregunta2 = document.getElementById("pregunta2");
    var pregunta3 = document.getElementById("pregunta3");
    var pregunta4 = document.getElementById("pregunta4");
    var resultado4 = document.getElementById("resultado4");
    var resultadocorrecto = document.getElementById("resultadocorrecto");
    var resultadoincorrecto = document.getElementById("resultadoincorrecto");


    resultado4.addEventListener('click', () => {
        var pre1 = pregunta1.options[pregunta1.selectedIndex].value
        console.log(pre1)
        var pre2 = pregunta2.options[pregunta2.selectedIndex].value
        console.log(pre2)
        var pre3 = pregunta3.options[pregunta3.selectedIndex].value
        console.log(pre3)
        var pre4 = pregunta4.options[pregunta4.selectedIndex].value
        console.log(pre4)
        var incorrectas = 0;
        var correctas = 0;
        if (pre1 == "a") {
            correctas++;
        } else {
            incorrectas++
        }
        if (pre2 == "a") {
            correctas++;
        } else {
            incorrectas++
        }
        if (pre3 == "a") {
            correctas++;
        } else {
            incorrectas++
        }
        if (pre4 == "a") {
            correctas++;
        } else {
            incorrectas++
        }
        console.log(correctas)
        console.log(incorrectas)

        resultadocorrecto.value = correctas;
        resultadoincorrecto.value = incorrectas;
    });





}