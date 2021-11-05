window.onload = function () {

    //declaracion de los gurpos 
    //label para las preguntas
    var labeldiv = document.getElementById("labeldiv");
    var check = document.getElementById("check");
    //botones siguietne y atras
    var volver = document.getElementById("idvolver");
    var siguiente = document.getElementById("idsiguiente");
    var empezar = document.getElementById("empezar");
    var formulario = document.getElementById("formularioprueba");
    var resultado = document.getElementById("resultado");
    var validarbtn = false;

    //array de preguntas
    const arraypreguntas = ["¿Cuántas veces escuchas música?",
        "¿Prefieres usar auriculares o monitores/ altavoces para escuchar música?",
        "¿Te gusta bailar cuando estás en eventos, conciertos, y/o clubes?",
        "¿Prefieres escuchar música en casa o en eventos en vivo?",
        "¿Cuál es tu género musical favorito?",
        "¿Alguna vez usas o has usado la música para tu regulación emocional?",
    ];
    const arrayrespuestas = [
        ["Entre una y tres veces por semana", "Des tres a cinco veces por semana  ", "Todos los dias"],
        ["Auriculares", "Monitores o altavoces"],
        ["¡SI!", "No"],
        ["En casa", "En eventos"],
        ["Pop", "Country", "Clásica", "Rap/Hip-Hop", "Rock", "Dance"],
        ["Si", "NO"],
    ];

    const valuerespuestas = ["A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
    ];

    //contador de preguntas
    var cont_preg = 0;
    //contador delos valores de las repsuestas
    var cont_value = 0;
    //contadores para las respuestas finales

    var contadorres = [0, 0, 0, 0, 0, 0];

    formulario.style.display = "none";
    btnempezar();
    /*cuando pulse empezar se mostrara el formulario*/
    function btnempezar() {
        empezar.addEventListener('click', () => {
            formulario.style.display = "inline";
        });
    }


    /*muestro la primer pregunta*/
    sacarpregunta = arraypreguntas[0];
    console.log(sacarpregunta);
    labeldiv.innerHTML = sacarpregunta;
    //funcion de mostrar las respuestas
    pasar_checkbox(cont_preg);

    //boton siguiente
    botonsiguiente();
    btonvolver();


    /*fuction del boton volver  */
    function btonvolver() {
        volver.addEventListener("click", () => {
            var sacarpregunta = "";
            /*funcion para saber cual tengo selecionado */
            valueselect();

            cont_preg--;
            sacarpregunta = arraypreguntas[cont_preg];
            console.log(sacarpregunta);
            console.log(cont_preg);
            labeldiv.innerHTML = sacarpregunta;
            pasar_checkbox(cont_preg);
        });
    }
    resultadofinal();

    /*function del boton siguiente */
    function botonsiguiente() {
        siguiente.addEventListener("click", () => {
            var sacarpregunta = "";
            /*funcion para saber cual tengo selecionado */
            valueselect();

            //contador de preguntas
            cont_preg++;
            sacarpregunta = arraypreguntas[cont_preg];
            console.log(sacarpregunta);
            console.log("array de respuestas " + arrayrespuestas.length);
            console.log("contador de preguntas " + cont_preg);
            labeldiv.innerHTML = sacarpregunta;
            pasar_checkbox(cont_preg);


        });
    }

    /*muestro las respuestas segun las preguntas */
    function pasar_checkbox(cont_preg) {
        check.innerHTML = "";
        cont_value = 0;
        //
        if (cont_preg == arrayrespuestas.length) {
            console.log("fin de las preguntas");
            resultadofinal();


        } else {
            /*muestro los checkbox y los radios */
            for (let i = 0; i < arrayrespuestas[cont_preg].length; i++) {
                /*a las preguntas de la posicion del array
                1,2,3,5  las respuestas las creo un input de tipo  radio*/
                if (cont_preg == 1) {
                    console.log(cont_preg);
                    console.log("respuestas " + arrayrespuestas[cont_preg][i]);
                    check.innerHTML += "<input name='" + cont_preg + "' type='radio' value='" + valuerespuestas[cont_value] + "'>" + arrayrespuestas[cont_preg][i] + "<br>";

                } else if (cont_preg == 2) {
                    console.log(cont_preg);
                    console.log("respuestas " + arrayrespuestas[cont_preg][i]);
                    check.innerHTML += "<input name='" + cont_preg + "' type='radio' value='" + valuerespuestas[cont_value] + "'>" + "<label for='idinput'>" + arrayrespuestas[cont_preg][i] + "</label>" + "<br>";

                } else if (cont_preg == 3) {
                    console.log(cont_preg);
                    console.log("respuestas " + arrayrespuestas[cont_preg][i]);
                    check.innerHTML += "<input name='" + cont_preg + "' type='radio' value='" + valuerespuestas[cont_value] + "'>" + arrayrespuestas[cont_preg][i] + "<br>";

                } else if (cont_preg == 5) {
                    console.log(cont_preg);
                    console.log("respuestas " + arrayrespuestas[cont_preg][i]);
                    check.innerHTML += "<input name='" + cont_preg + "' type='radio' value='" + valuerespuestas[cont_value] + "'>" + arrayrespuestas[cont_preg][i] + "<br>";

                } else {
                    console.log("respuestas " + arrayrespuestas[cont_preg][i]);
                    check.innerHTML += "<input name='" + cont_preg + "' type='checkbox' value='" + valuerespuestas[cont_value] + "'>" + arrayrespuestas[cont_preg][i] + "<br>";
                }
                cont_value++;


            }
        }


    }

    function valueselect() {
        //obtengo el name del input de laca pregunta 
        let grupo = document.getElementsByName(cont_preg);

        for (let i = 0; i < grupo.length; i++) {
            //si esta seleccionada me saca el valor 
            if (grupo[i].checked) {

                validarbtn = true;
                console.log("seleccionado" + validarbtn);
                //si esta selecionado suma una pregunta

                console.log("valores " + grupo[i].value);
                if (grupo[i].value == "A") {
                    console.log("valores " + grupo[i].value);
                    contadorres[0]++;
                }
                if (grupo[i].value == "B") {
                    console.log("valores " + grupo[i].value);
                    contadorres[1]++;
                }
                if (grupo[i].value == "C") {
                    console.log("valores " + grupo[i].value);
                    contadorres[2]++;
                }
                if (grupo[i].value == "D") {
                    console.log("valores " + grupo[i].value);
                    contadorres[3]++;
                }
                if (grupo[i].value == "E") {
                    console.log("valores " + grupo[i].value);
                    contadorres[4]++;
                }
                if (grupo[i].value == "F") {
                    console.log("valores " + grupo[i].value);
                    contadorres[5]++;
                }
                if (grupo[i].value == "G") {
                    console.log("valores " + grupo[i].value);
                    contadorres[6]++;
                }
            } else {
                console.log("seleccionado " + validarbtn);

            }

        }
        console.log(contadorres);
        console.log(contadorres[0]);


    }

    function resultadofinal() {
        console.log(contadorres);
        console.log(contadorres[0]);
        //cuanto tenga mas de 4 valores "A";
        if (contadorres[0] >= 4) {
            console.log("Te gusta mucho la musica");
            formulario.innerHTML =
                "TIenes el autoestima alto, eres creativ@ , extrovetid@ y  con gusto";
            setTimeout(() => {
                window.location.reload();
            }, 5000);
        }
        if (contadorres[2] >= 1 && contadorres[1] >= 4 &&contadorres[6] >= 1) {
            console.log("Te gusta mucho la musica");
            formulario.innerHTML =
                "TIenes el  autoestima alta , creativ@ y gentil";
            setTimeout(() => {
                window.location.reload();
            }, 5000);
        }
        if (contadorres[1] >= 4 && contadorres[2] >= 1 &&contadorres[5] >= 1) {
            console.log("Te gusta mucho la musica");
            formulario.innerHTML =
                "TIenes el  autoestima alta , creativ@ y gentil";
            setTimeout(() => {
                window.location.reload();
            }, 5000);
        }
        if (contadorres[0] >= 2 && contadorres[1] >= 3 &&contadorres[3] >= 1) {
            console.log("Te gusta mucho la musica");
            formulario.innerHTML =
                "TIenes el  autoestima alta";
            setTimeout(() => {
                window.location.reload();
            }, 5000);
        }
        if (contadorres[0] == 2 && contadorres[1] == 3 &&contadorres[3] == 1) {
            console.log("Te gusta mucho la musica");
            formulario.innerHTML =
                "TIenes el  autoestima alta , creativ@ y gentil";
            setTimeout(() => {
                window.location.reload();
            }, 5000);
        }
        if (contadorres[0] == 3 && contadorres[1] == 3 &&contadorres[3] == 1) {
            console.log("Te gusta mucho la musica");
            formulario.innerHTML =
                "TIenes el  autoestima alta , creativ@ y gentil";
            setTimeout(() => {
                window.location.reload();
            }, 5000);
        }if (contadorres[0] == 3 && contadorres[1] == 3 ) {
            console.log("Te gusta mucho la musica");
            formulario.innerHTML =
                "TIenes el  autoestima alta , creativ@ y gentil";
            setTimeout(() => {
                window.location.reload();
            }, 5000);
        }




//c1 b4 dance


    }





}