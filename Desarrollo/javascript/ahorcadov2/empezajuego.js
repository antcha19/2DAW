  function empezarjuego() {
      
      //mostara al pulsar empezar juego
      var comprobar = document.getElementById("comprobar");
      comprobar.style.display = "inline";

      //ocultamos el boton de empezar juego 
      let empezar_oculto = document.getElementById("empezar");
      empezar_oculto.style.display = "none";
  }

  export default empezarjuego;