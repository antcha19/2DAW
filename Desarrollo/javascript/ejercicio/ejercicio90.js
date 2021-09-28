window.onload = function () {

    document.write(ejer());

    function ejer() {
        const dia = new Date();

        const cadena = `
      
        Dia ${dia.getDate()}
        Mes ${dia.getMonth()}
        Año ${dia.getFullYear()} 
         `;
        return cadena;
    }



}