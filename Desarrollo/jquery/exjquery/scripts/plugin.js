$(document).ready(function () {

  $('.photo_slider ').each(function () {
    //anadir clase photoarea
    $('.photo_slider').addClass("photo-­area");


    //Guardar sus valores de alto y ancho así como los de la imagen que contiene.
    var $ancho = $(this).css("width");
    var $alto = $(this).css("height");

   // var $imagenancho = $(this).$("img").css("height");
   // var $imagenalto = $(this).children("img").css("width");
    
    

    

    //valores marginleft y top
    $(this).children("img").css("margin-left", "-150px");
    $(this).children("img").css("margin-top", "-150px");
    //agregar div photo_slider_img no funciona lo he modificado html  para poder seguir
    //$(this).children("img").before("<div class=photo_slider_img>");
  // $(this).children("img").after("</div>");
 

    $(this).children(".info_area p").before("<a class=close> Close </a>");
    //añado class more_info
    $(this).children(".info_area").after("<a class=more_info href=#>Más Info</a>");









    })
    //click envento mas info
    $(".more_info").click(function () {
      console.log("click en info");
      
      $("img").css("height", ancho);
      $("img").css("width", alto);
      //desapare el enlace more info
      $(".more_info").fadeOut(600, function()
			{	
			});

    })


    $(".close").click(function () {
      console.log("click en close");
      //El div de la clase “info_area” $(".info_area",$this) desaparecerá con una animación fadeOut
      $(".info_area").fadeOut(600, function () {
        $(this).children("img").css("margin-left", "-150px");
        $(this).children("img").css("margin-top", "-150px");
      })

      ////desapare el enlace more info
      $(".info_area").fadeIn(600, function()
			{	
			});

  })
  //obtengo el ancho y el alto de cada imagen
  $("img").each(function() {
     ancho = $(this).width();
    alto = $(this).height();
    console.log(ancho);
    console.log(alto);
    
  })

})