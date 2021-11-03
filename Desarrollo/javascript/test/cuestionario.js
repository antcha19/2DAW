window.onload = function () {

    //declaracion de los gurpos 
    var group1 = document.getElementsByName("respuestas");
    var group2 = document.getElementsByName("respuestas2");
    var group3 = document.getElementsByName("respuestas3");
    var group4 = document.getElementsByName("respuestas4");
    var resultadobtn = document.getElementById("resultadobtn");
    var labelrespuesta = document.getElementById("resultado");
    var empezarcues = document.getElementById("empezar");
    var divformulario = document.getElementById("divformulario");
    //label para las preguntas
    var labeldiv = document.getElementById("labeldiv");
    var check = document.getElementById("check");
    //botones siguietne y atras
    var volver = document.getElementById("idvolver");
    var siguiente = document.getElementById("idsiguiente");

    //array de preguntas
    const arraypreguntas = ["¿Cuántas veces escuchas música?",
        "¿Prefieres usar auriculares o monitores/ altavoces para escuchar música?",
        "¿Te gusta bailar cuando estás en eventos, conciertos, y/o clubes?",
        "¿Prefieres escuchar música en casa o en eventos en vivo?",
        "¿Cuál es tu género musical favorito?",
        "¿Alguna vez usas o has usado la música para tu regulación emocional?",
    ];
    const arrayrespuestas = [
        ["Entre una y tres veces por semana", "Des tres a cinco veces por semana  ", "Todos los dias", "Ningún dia"],
        ["Auriculares", "Monitores o altavoces"],
        ["¡SI!", "No"],
        ["En casa", "En eventos"],
        ["Pop", "Country", "Clásica", "Rap/Hip-Hop","Rock", "Dance"],
        ["Si", "NO"],
        ["Respuesta A7", "Respuesta B4", "Respuesta C4", "Respuesta D4"],
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

    //contador a cero
    var contador = 0;
    var contador2 = 0;
    var contador3 = 0;
    var contador4 = 0;
    //resultado segun las preguntas
    var contador_respuestasA = 3;
    var contador_respuestasB = 3;
    var contador_respuestasC = 2;
    //respuesta en texto
    var respuestas = "Respuesta 1";
    var respuestas2 = "Respuesta 2";
    var respuestas3 = "Respuesta 3";
    var respuestas4 = "Respuesta 4";


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
            cont_preg--;
            sacarpregunta = arraypreguntas[cont_preg];
            console.log(sacarpregunta);
            labeldiv.innerHTML = sacarpregunta;
            pasar_checkbox(cont_preg);

        });
    }

    /*function del boton siguiente */
    function botonsiguiente() {
        siguiente.addEventListener("click", () => {
            var sacarpregunta = "";
            cont_preg++;
            sacarpregunta = arraypreguntas[cont_preg];
            console.log(sacarpregunta);
            labeldiv.innerHTML = sacarpregunta;
            pasar_checkbox(cont_preg);

        });
    }

    /*muestro las respuestas segun las preguntas */
    function pasar_checkbox(cont_preg) {
        check.innerHTML = "";
        cont_value = 0;
        /*muestro los checkbox */
        for (let i = 0; i < arrayrespuestas[cont_preg].length; i++) {

            console.log("respuestas " + arrayrespuestas[cont_preg][i]);
            check.innerHTML += "<div><input name='" + cont_preg + "' type='checkbox' value='" + valuerespuestas[cont_value] + "'>" + arrayrespuestas[cont_preg][i]+"</div>";
            cont_value++;
        }
    }






    //bton btn resultado
    btnresultado();

    function btnresultado() {

        resultadobtn.addEventListener('click', () => {
            //funciones de los check
            checkpreguntas1();
            checkpreguntas2();
            checkpregunta3();
            checkpregunta4();



            //resultado dependiendo las respuestas
            if (contador == contador_respuestasA) {
                console.log(respuestas + "contiene " + contador + "sleccionados");

            }
            if (contador2 == contador_respuestasB) {

                console.log(respuestas2 + "contiene " + contador2 + "sleccionados");
            }

        })
    }


    function checkpreguntas1() {
        for (let i = 0; i < group1.length; i++) {
            //si esta selecionado , me nuestar el value
            if (group1[i].checked) {

                if (group1[i].value == "a") {
                    contador++;
                    console.log(group1[i].value);
                    console.log("contador A tiene" + contador);
                }
                if (group1[i].value == "b") {
                    contador2++;
                    console.log(group1[i].value);
                    console.log("contador B tiene " + contador2);
                }
                if (group1[i].value == "c") {
                    contador3++;
                    console.log(group1[i].value);
                    console.log("contador C tiene" + contador3);
                }
            }

        }
    }

    function checkpreguntas2() {
        for (let j = 0; j < group2.length; j++) {
            if (group2[j].checked) {

                if (group2[j].value == "a") {
                    contador++;
                    console.log(group2[j].value);
                    console.log("contador A2 tiene" + contador);

                }
                if (group2[j].value == "b") {
                    contador2++;
                    console.log(group2[j].value);
                    console.log("contador B2 tiene" + contador2);

                }
                if (group2[j].value == "c") {
                    contador3++;
                    console.log(group2[j].value);

                    console.log("contador C2 tiene " + contador3);

                }
            }

        }
    }

    function checkpregunta3() {

        for (let k = 0; k < group3.length; k++) {
            if (group3[k].checked) {

                if (group3[k].value == "a") {
                    contador++;
                    console.log(group3[k].value);

                    console.log("contador A3 tiene" + contador);

                }
                if (group3[k].value == "b") {
                    contador2++;
                    console.log(group3[k].value);
                    console.log("contador B3 tiene" + contador2);

                }
                if (group3[k].value == "c") {
                    contador3++;
                    console.log(group3[k].value);
                    console.log("contador C3 tiene " + contador3);

                }
            }

        }
    }

    function checkpregunta4() {
        for (let l = 0; l < group4.length; l++) {

            if (group4[l].checked) {
                if (group4[l].value == "a") {
                    contador++;
                    console.log(group4[l].value);
                    console.log("contador A4 tiene" + contador);
                }
                if (group4[l].value == "b") {
                    contador2++;
                    console.log(group4[l].value);
                    console.log("contador B4 tiene" + contador2);
                }
                if (group4[l].value == "c") {
                    contador3++;
                    console.log(group4[l].value);
                    console.log("contador C4 tiene" + contador3);
                }
            }
        }
    }

}