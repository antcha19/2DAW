window.onload = function () {

    const mapa1 = new Map([
        ["España", "46mill"],
        ["Colombia", "46mill"],
        ["EE UU", "350mill"],
    ]);
    console.log(mapa1);


   
    for (let [clave, valor] of mapa1) {

        // Create a <li> list
        var list = document.createElement("li");
        // Create a text node
        var text = document.createTextNode("Clave:  " + clave + " valor:  " + valor);
        // Append the text to <li>
        list.appendChild(text);
        // Append <li> to <ul> with
        document.getElementById("ulista").appendChild(list);
    }

}