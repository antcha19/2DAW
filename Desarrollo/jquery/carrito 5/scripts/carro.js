var posCarritoInicial;
var anchoCarritoInicial;
var anchoProductoEnCarrito = 120;
var velocidadEfectos = 600;
var velocidadDesplazamiento = 0;

function actualizaStockProducto($item, incremento) {
  $item.find(".stock").hide()
  var stock = parseInt($item.children(".stock").html().replace("Stock ", ""));

  if (stock + incremento >= 0) {
    stock += incremento;
    $item.children(".stock").html("Stock " + stock);
    if (stock == 0) {
      $item.find(".stock").addClass("agotado");
      $item.unbind("dblclick");
    } else {
      if (stock == 1 && incremento == 1) {
        $item.find(".stock").removeClass("agotado");
        establece_evento_dblclick_items($item);
      }
    }
  }
  $item.find(".stock").fadeIn(velocidadEfectos);
}

function actualizaNumeroProductosPedidos(incremento) {
  $("#citem").hide();

  var numProductosPedido = parseInt($("#citem").val());
  numProductosPedido += incremento;
  $("#citem").val(numProductosPedido);

  $("#citem").fadeIn(velocidadEfectos);
}

function actualizaPrecioTotal($item, incremento) {
  $("#cprice").hide();

  var precioPedido = parseInt($("#cprice").val());
  precioPedido += parseInt(incremento);
  $("#cprice").val(precioPedido + " €");

  $("#cprice").fadeIn(velocidadEfectos);
}

function incrementaAnchoCarrito(incremento) {
  $("#cart_items").width($("#cart_items").width() + incremento);
  if (incremento > 0)
    velocidadDesplazamiento += 500;
  else
    velocidadDesplazamiento -= 500;
}

function anyadeProductoAlCarrito($item) {
  var $delete = $('<a href="" class="delete"></a>');
  //input para la cantidad
  var $cantidad = $('<input class="cantidad" type="text" value="1" readonly="true"/>')
  //enlalce para disminuir
  var $minus = $('<a href="" class="minus"></a>');
  //enlace para aincrementar
  var $add = $('<a href="" class="add"></a>');

  //button delete
  $(".delete").button({
    icons: {
      primary: "ui-icon-circle-close"
    },
    text: false
  });

  //button delete
  $(".add").button({
    icons: {
      primary: " ui-icon-circle-plus"
    },
    text: false
  }); 
  //button delete
  $(".minus").button({
    icons: {
      primary: "ui-icon-circle-minus"
    },
    text: false
  });




  var id = "c" + $item.attr("id");
  $copia = $item.clone().attr("id", id).addClass('icart').prepend($minus, $add, $delete, $cantidad);
  $copia.children(":not(a)").addBack().css("cursor", "default").find(".stock").hide();
  $copia.hide();

  $("#cart_items").prepend($copia);
  $copia.animate({
    width: "toggle"
  }, velocidadEfectos);
}

function eliminaProductoDelCarrito($item) {
  //ponemos efeect al borrar  
  $item.effect("explode", {
    mode: "hide"
  }, 1000, function () {
    var id = $(this).attr("id");
    id = id.substring(1);

    actualizaStockProducto($("#" + id), 1);

    actualizaNumeroProductosPedidos(-1);

    actualizaPrecioTotal($item, -parseInt($item.children(".price").html()));

    var pos = $("#cart_items").offset();

    var numArticulosCarrito = $("#cart_items").children().length - 1;
    if (numArticulosCarrito >= 4) {
      incrementaAnchoCarrito(-anchoProductoEnCarrito);

      var anchoCarrito = $("#cart_items").width();
      var der = pos.left + anchoCarrito;
      if (der < posCarritoInicial.left + anchoCarritoInicial)
        pos.left = posCarritoInicial.left;
    }

    if (numArticulosCarrito <= 4) {
      pos.left = posCarritoInicial.left;
      $("#btn_prev").hide();
      $("#btn_next").hide();
    }

    if (numArticulosCarrito == 0) {
      $("#btn_clear").hide();
      $("#btn_comprar").hide();
    }

    $("#cart_items").offset(pos);

    $(this).remove();
  });
}

function establece_evento_dblclick_items($items) {
  $items.dblclick(function () {
    actualizaNumeroProductosPedidos(1);

    actualizaStockProducto($(this), -1)

    actualizaPrecioTotal($(this), parseInt($(this).children(".price").html()));

    anyadeProductoAlCarrito($(this));

    var numArticulosCarrito = $("#cart_items").children().length;
    if (numArticulosCarrito > 4) {
      incrementaAnchoCarrito(anchoProductoEnCarrito);
      $("#btn_prev").show();
      $("#btn_next").show();
    }

    $("#btn_clear").show();
    $("#btn_comprar").show();
  });
}

$(function () {
  anchoCarritoInicial = $("#cart_items").width();
  posCarritoInicial = $("#cart_items").offset();

  establece_evento_dblclick_items($(".item"));

  $(document).on("click", ".delete", function () {
    eliminaProductoDelCarrito($(this).parent());

    return false;
  });

  $("#btn_clear").click(function (evento) {
    $(".delete").trigger("click");
  }).hide();

  $("#btn_comprar").hide();

  $("#btn_prev").mouseover(function (evento) {
    var pos = $("#cart_items").offset();

    if (pos.left <= posCarritoInicial.left) {
      $("#cart_items").animate({
        left: "+=" + (posCarritoInicial.left - pos.left)
      }, velocidadDesplazamiento);
    }
  }).mouseout(function () {
    $("#cart_items").stop(true, false);
  }).hide();

  $("#btn_next").mouseover(function () {
    var pos = $("#cart_items").offset();
    var ancho = $("#cart_items").width();
    var der = pos.left + ancho;

    if (der >= posCarritoInicial.left + anchoCarritoInicial) {
      $("#cart_items").animate({
        left: "-=" + (der - posCarritoInicial.left - anchoCarritoInicial)
      }, velocidadDesplazamiento);
    }
  }).mouseout(function () {
    $("#cart_items").stop(true, false);
  }).hide();
});