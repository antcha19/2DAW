window.onload = function () {

    document.getElementById("botonJugar").addEventListener('click', jugarAhorcado, false);
    document.getElementById("botonComprobar").addEventListener('click', comprobarLetra, false);

    let palabra = "";

    let letraUsada = [""];

    const ahorcado = ["A", "H", "O", "R", "C", "A", "D", "O"];

    let numErrores = 0;

    let numAciertos = 0;

    const listaPalabras = ["videoconsola", "lampara", "barril", "catamaran", "circuito", "pasarela", "maceta", "cuadro", "museo"];

    document.getElementById("inputLetras").style.display = "none";
    document.getElementById("sitioLetras").style.display = "none";
    document.getElementById("contenedorLetras").style.display = "none";
    document.getElementById("botonComprobar").style.display = "none";


    function jugarAhorcado() {

        let palabraAleatoria = Math.floor(Math.random() * listaPalabras.length);
        palabra = listaPalabras[palabraAleatoria];

        crearRayas();

        document.getElementById("botonJugar").style.display = "none";
        document.getElementById("reglasJuego").style.display = "none";
        document.getElementById("inputLetras").style.display = "block";
        document.getElementById("sitioLetras").style.display = "block";
        document.getElementById("contenedorLetras").style.display = "block";
        document.getElementById("botonComprobar").style.display = "block";


        const stringPalabra = palabra.split("");
        document.getElementById("numLetras").innerHTML = stringPalabra.length;

    }

    function comprobarLetra() {

        let letraIntroducida = document.getElementById("introducirLetras").value;
        const stringPalabra = palabra.split("");

        let encontrada = false;

        for (let i = 0; i < letraUsada.length; i++) {
            if (letraIntroducida.toLowerCase() == letraUsada[i].toLowerCase()) {
                encontrada = true;
            }
        }

        if (encontrada) {
            alert("Esa letra ya la has introducido!!!")
        } else {
            letraUsada.push(letraIntroducida);
            encontrada = false;

            let existe = false;

            for (let i = 0; i < stringPalabra.length; i++) {
                if (letraIntroducida.toLowerCase() == stringPalabra[i].toLowerCase()) {

                    existe = true;
                    numAciertos++;

                    for (let z = 0; z < stringPalabra.length; z++) {
                        if (stringPalabra[z] == letraIntroducida) {
                            let arrayRayas = document.getElementById("sitioLetras").value;
                            let rayasSeparadas = arrayRayas.split("");
                            rayasSeparadas[z] = stringPalabra[z];
                            let posicionRayas = rayasSeparadas.join('');
                            document.getElementById("sitioLetras").value = posicionRayas;
                        }
                    }

                    if (numAciertos == stringPalabra.length) {
                        alert("Enhorabuena has acertado la palabra!!");
                        window.location.reload();
                    }
                }
            }
            if (!existe) {
                numErrores++;

                const pAhorcado = document.createElement("span");
                const idAhorcado = document.createAttribute("id");

                idAhorcado.value = "idAhorcado";
                pAhorcado.setAttributeNode(idAhorcado);

                let palabraAhorcado = document.createTextNode(ahorcado[numErrores - 1] + " ");

                pAhorcado.appendChild(palabraAhorcado);

                let divInput = document.getElementById("inputLetras");
                document.body.insertBefore(pAhorcado, divInput);

            }

        }

        if (numErrores == 8) {
            alert("Has fallado, la palabra era " + palabra);
            window.location.reload();
        }
    }

    function crearRayas() {
        let lineas = "";

        for (let i = 0; i < palabra.length; i++) {
            lineas = lineas + "-";
        }

        document.getElementById("sitioLetras").value = lineas;
    }
    document.querySelector('#introducirLetras').value = '';
    document.querySelector('#introducirLetras').focus();
}       