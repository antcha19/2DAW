$(function () {

  console.log("Script cargado");
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

    $(".item").dblclick(function () {
      //le paso el this;
      actualizar_stock($(this), 1);
      add_carrito($(this));

    })
  }

  //$item es el this del
  function actualizar_stock($item, valor) {
    //busco dentro del item el strock
    $stock = $item.find(".stock");
    $stocktext = $stock.text();
    //numero del stock
    let stocksub = $stocktext.substring(6);
    if (stocksub > 0) {
      console.log("es mayor que cero");
      var stocknuevo = stocksub - (valor);
      //modificado el stock 
      $stock.text("Stock " + stocknuevo);
      //imcrementamos las compras
      $("#citem").val(parseInt($("#citem").val()) + 1);
      //sumanos el precio
      $precio = $item.find(".price").text();
      let espacio = $precio.indexOf(" ");
      let precio = $precio.substring(0, espacio);
      //agotado
      if (stocknuevo == 0) {
        $stock.addClass("agotado");
      }

      //suma cantidad total de la compras
      $("#cprice").val(parseInt($("#cprice").val()) + parseInt(precio) + " €");
    }


  }

  function add_carrito($item) {
    //elemento clonado
    $clonado = $item.clone().attr("id", "C" + $item.attr("id"));
    //Le añadiremos la clase icart a la copia creada
    $clonado.addClass("icart");
    //elemento de la clase stock
    $clonado.find(".stock").hide();

    //Cambiaremos la propiedad css cursor del elemento
    $clonado.css("cursor", "default");

    var $delete = $('<a   class="delete"></a>');
    $clonado.prepend($delete);
    //añado a cart_items el clonado
    $("#cart_items").prepend($clonado);

    $delete.click(function () {
      //elemento pardre del enlace
      var idpadre = $(this).parent().attr("id");
      //id de la lista arituclos original
      var id = idpadre.substring(1);
      console.log(id);
      //saca el stock  del productos a borrar con la id
      $stock = $("#" + id).find(".stock");
      $s_texto = $stock.text();
      console.log($s_texto);
      //cantidad del stock
      let stocksub = $s_texto.substring(6);
      let parse = parseInt(stocksub);
      //hago la suma
      let suma = parse + 1;
      //cambio el stock
      $stock.text("Stock " + suma);
      //quito la class agoatado
      if (parse == 0) {
        $stock.removeClass("agotado");
      }

      //actuliazamos la compra
      $("#citem").val(parseInt($("#citem").val()) - 1);
      //actualizamos el precio $precio esta declarado en actualizar_stock
      $precio_quitar = $item.find(".price").text();
      let espacio = $precio_quitar.indexOf(" ");
      let precio = $precio_quitar.substring(0, espacio);
      $("#cprice").val(parseInt($("#cprice").val()) - parseInt(precio) + " €");
      //eliminamos el articulo de la compra
       $("#C"+$item.attr("id")).remove();
     
     // return false;
    })
  }


})