window.onload = function () {
    console.log("dfhfgh");

    //declaramos las id

    var btngaleria = document.getElementById("btngaleria");
    var divgaleria = document.getElementById("galeria");
    var btnclasificacion = document.getElementById("btnclasificacion");
    var labelradio = document.getElementById("radio");
    var labelslect = document.getElementById("select");
    var slect = document.getElementById("pregunta1");
    var resultado = document.getElementById("resultado");
  
    var img = document.getElementById("img");
    var atras = document.getElementById("atras");
    var siguiente = document.getElementById("siguiente");
    var clasificaciondiv = document.getElementById("clasif");

    //oculto slect
    slect.style.display = "none";

    const valueradio = ["10k",
        "Maraton",
    ];
    const valueoption = ["junior",
        "senior",
        "veteranos",
    ];

    inicio();


    function inicio() {
        //nuestro la foto por defecto
        var con_ima = 1;
        img.innerHTML = "<img src='" + con_ima + ".jpg'>"
    }





    //id del gruposelect
    var select = document.getElementById("pregunta1");
    slect.addEventListener('change',
        function () {
            var selectedOption = this.options[select.selectedIndex];
            console.log(selectedOption.text);
            resultado.innerHTML = selectedOption.text + "<br>";
        })

        var radio = document.getElementsByName("nameradio");
      for (let i = 0; i < radio.length; i++) {
        console.log(radio[i].value);
          
      }
    //funciones
    btngaleria.addEventListener('click', () => {
        img.style.display = "inline";
        atras.style.display = "inline";
        siguiente.style.display = "inline";
        clasificaciondiv.style.display = "none";
        galeria();
        
        
    })

    btnclasificacion.addEventListener('click', () => {
        img.style.display = "none";
        atras.style.display = "none";
        siguiente.style.display = "none";
        clasificaciondiv.style.display = "inline";

        clasificacion();
    })



    //funcion clasififacion
    function clasificacion() {
        var cantidad_radio = 2;
        var cantidad_option = 3;
        var name_radio = "nameradio";
        //contador value
        var cont_value = 0;
        var cont_value_option = 0;

        //for con la cantidad de radios
        for (let i = 0; i < cantidad_radio; i++) {
            labelradio.innerHTML += "<input name='" + name_radio + "' type='radio'  value='" + valueradio[cont_value] + "'>" + valueradio[cont_value];
            cont_value++;
        }
        //nuestro el select
        slect.style.display = "inline";
        /* labelslect.innerHTML += "<select>"


         for (let j = 0; j < cantidad_option; j++) {
            
             labelslect.innerHTML += " <option value='" + valueoption[cont_value_option] + "'>"+ valueoption[cont_value_option]+"</option>";
            cont_value_option++;
          }
          labelslect.innerHTML += "</select>"*/

    }

    //funcion clasififacion
    atras.addEventListener('click',()=>{
        console.log("click en atras")
       
    })
    siguiente.addEventListener('click',()=>{
        console.log("click en siguiente")
        var contadoratras=1;
       for (let i = 0; i < 3; i++) {
          
        img.innerHTML = "<img src='" + contadoratras + ".jpg'>"
     
        console.log(contadoratras);
        contadoratras++
       }
       
        
       
    })





}