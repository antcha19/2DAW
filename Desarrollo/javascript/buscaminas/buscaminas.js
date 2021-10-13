window.onload = function () {

    var btnjugar = document.getElementById("jugar");
    var cuadrado = document.getElementById("cuadrado");



    btnjugar.addEventListener('click', () => {
        console.log("click en jugar");
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                console.log("divI " + i + " divJ " + j)
                let newdiv = document.createElement("div");
                cuadrado.appendChild(newdiv);

            }

        }
    })


}