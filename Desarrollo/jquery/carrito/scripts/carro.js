$(function () {

  console.log("DOcumento cargado");
  /* //cambia de color al item es una class
    $(".item").css('background-color','#cecece' );
    $("#cart_items").css('border','4px solid black');
    $("img").css('border','1px solid blue');
    //hijos directos
    $(".item > label ").css('text-decoration', 'underline');
    // color rojo a todos los botones que estan dentro del cart-....// 
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
   */



  dobleclick();


  function dobleclick() {
    //doble click
    //cambiar
    //    $(".item").dblclick(function () {

    $(".item").click(function () {
      //le paso el this;
      actualizar_stock($(this), 1);
    })
  }


  function actualizar_stock($item, valor) {
    //busco dentro del item el strock
    $stock = $item.find(".stock");
    $stocktext = $stock.text();
    //numero del stock
    let stocksub = $stocktext.substring(6);
    if (stocksub > 0) {
      console.log("es mayor que cero");
      //modificado el stock 
      $stock.text("Stock " + (stocksub - (valor)));
    }
   
    if (stocksub < 2) {
      $stock.addClass("agotado");
    }

  }

})