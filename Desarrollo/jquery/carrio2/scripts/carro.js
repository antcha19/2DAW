$(document).ready(function () {



  //parte 1
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

  //parte 3
  $(function () {
    var $car = $("#cart_items");
    var pos_ori = $car.offset();
    let ancho_ori = $car.width();
    //guardo en una variable la posicion izquierda
    var pos_izquierda = pos_ori.left;

    // sumanos el pos_izquierda mas el ancho del div
    var pos_derecha = pos_izquierda + $car.width();
    
    var total = parseInt(pos_derecha) + parseInt(pos_izquierda);
  

    $("#btn_clear").bind("click", function () {
      //click a todos las class .delete
      $(".delete").trigger("click");
      var $cart_items = $("#cart_items");
      var pos = $cart_items.offset();
      //iguala la posicion 
      pos.left = pos.left;
      $cart_items.offset(pos);
    })


    $("#btn_prev").bind("click", function () {
      var $car = $("#cart_items");
      var pos = $car.offset();
      console.log(pos_izquierda);
      console.log(pos.left);
      if (pos_izquierda > pos.left) {
        pos.left += 50;
        $car.offset(pos);
      }
    });


    $("#btn_next").bind("click", function () {
      var pos = $("#cart_items").offset();
      var $width = $("#cart_items").width();
      pos.left -= 50;
      if ($width + pos.left > pos_ori.left + ancho_ori) {
        $("#cart_items").offset(pos);
      }


    });



  })


  //parte 2
  dobleclick();


  function dobleclick() {

    //doble click al elemento

    $(".item").bind("dblclick", function () {
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
      //cantidad de productos 
      var numArticulosCarrito = $("#cart_items").children().length
      if (numArticulosCarrito > 3) {
        $("#cart_items").width($("#cart_items").width() + 120);

      }

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

    $delete = $('<a  href="" class="delete"></a>');
    $clonado.append($delete);
    //añado a cart_items el clonado
    $("#cart_items").append($clonado);


    $delete.on("click", function () {
      var numArticulosCarrito = $("#cart_items").children().length;

      //elemento pardre del enlace
      var idpadre = $(this).parent().attr("id");
      //id de la lista arituclos original
      var id = idpadre.substring(1);

      //saca el stock  del productos a borrar con la id
      $stock = $("#" + id).find(".stock");
      $s_texto = $stock.text();

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
      $("#C" + $item.attr("id")).remove();

      //borrar 120pix
      if (numArticulosCarrito > 4) {
        console.log(numArticulosCarrito);
        $("#cart_items").width($("#cart_items").width() - 120);
      }


      return false;
    })

  }

})