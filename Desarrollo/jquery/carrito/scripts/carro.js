$(function () {
    <input type="text" data-autocomplete-source="/path/to/ajax/results"
                    data-hint="Type in a search term"
                    data-searching="Searching" />
    console.log("DOcumento cargado");
  //cambia de color al item es una class
   $(".item").css('background-color','#cecece' );
   $("#cart_items").css('border','4px solid black');
   $("img").css('border','1px solid blue');
   //hijos directos
   $(".item > label ").css('text-decoration', 'underline');
   /* color rojo a todos los botones que estan dentro del cart-....*/ 
   $("#cart_container  button").css('color', 'red');
   $(".item   label + label").css('color', 'white');
   //todos los input de la pagina
   //color de verde a todos los que contengas 
   $(":contains('€'), input").css('color','green');
   //cambia color al div vacio
   $("div:empty").css('background-color', 'yellow');
   //cambia color al primero y al ultimo
   $(".item:first, .item:last").css('background-color', 'red');
   //border al img que sea una imagen
   $("img[src*='camiseta']").css('border-color','green');
  

      
})