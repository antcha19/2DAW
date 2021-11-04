var namegroup = document.getElementsByName("deporte");
var lbel = document.getElementById("label");
var comprobar = document.getElementById("comprobar");
var contador = 0;
var opcion = "";
var opcion2 = "";
var opcion3 = "";


for (let i = 0; i < namegroup.length; i++) {
    namegroup[i].addEventListener('click', () => {
        if (namegroup[i].checked) {

            if (contador < 2) {
                contador++
                //   lbel.innerHTML = "has selecionado "+ contador;

            } else {

                // lbel.innerHTML = "solo puede selecionar 3";
                namegroup[i].checked = false;
            }

        } else {
            contador--;
            //  lbel.innerHTML = "has selecionado "+ contador;
        }

    })
}

comprobar.addEventListener('click', ()=>{
    for (let i = 0; i < namegroup.length; i++) {
      
        //si esta selecionado , me nuestar el value
        if (namegroup[i].checked) {
            console.log(namegroup[i].value);
            lbel.innerHTML += namegroup[i].value + " ";
        }
    
    
    }
})
