window.onload = function () {

    const festivos = new Set();
    festivos.add("12/10/2021");
    festivos.add("17/08/2021");
    festivos.add("12/11/2021");
    festivos.add("12/04/2021");

    var div = document.getElementById("div");
    var fechaintroducida = prompt("Introduce palabra");
    for (let i = 0; i < festivos.size; i++) {
        if (festivos.has(fechaintroducida)) {
            div.innerHTML = "es festivo";
        } else {
            div.innerHTML = " no es festivo";
        }
    }
}