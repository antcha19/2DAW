window.onload = function () {
    /*   document.getElementById("demo").onmouseover = rojo;
       document.getElementById("demo").onmouseout = function () {
           normal()
       };*/

    document.getElementById("demo").addEventListener("mouseover", rojo, true);
    document.getElementById("demo").addEventListener("mouseout", normal, true)

}



function rojo() {
    document.getElementById("demo").style.color = "red";
}

function normal() {
    document.getElementById("demo").style.color = "blueviolet";
}