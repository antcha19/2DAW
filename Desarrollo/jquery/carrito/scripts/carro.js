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
    $(".item").dblclick(function () {
      //le paso el this;
      actualizar_stock($(this),1);
    })
  }


  function actualizar_stock($item,valor) {
    //  \d indica que quieres que coja números
    // /g indica que quieres buscar de manera global en todo el string.
    var valores = /(\d+)/g;
    //busco dentro del item el strock
    var stock = $item.find(".stock").text();
    console.log(stock);
let stocksub = stock.substring(6);
console.log(stocksub);

    //lo guarda en un array
    var stock = stock.match(valores);
    var valorstock = stock[0];
    console.log(valorstock);
    if (valorstock >0) {
      console.log("es mayor que cero");
      console.log("es mayor que cero");
      //modificado el stock 
      $item.find(".stock").text("Stock " +(valorstock -valor) );
    }
     if (valorstock == 0){
      console.log("Esta agotado");
      $item.find(".stock").addClass("agotado");
    }

  }

})