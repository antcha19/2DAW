//#id
//.class

$(function () {
    //clonado de div   -----------EJERCICIO 1

    $("#dialogo").hide;
    $("#clonado").clone().appendTo("#duplicado");

    var $img = $("#duplicado");

    //----------- EJERCICIO 2

    $("#idimagen").hover(function () {
        //fondo blanco a la imagen
        $('#idimagen').css('opacity', '0');
        alert("Hace calor y el autor Mariscal")
        
    });


    //-----ejercicio 3
    //añado clase para identificar la iagen que quiero cambiar
    $("img").addClass("img_anayda");
    $('body').on('dblclick', '.img_anayda ', function () {
        var $img = $(this).attr('src');

        console.log($img);

        if ($img == "img/Mariscal3.jpg") {
            $(".img-responsive").css({
                'border': '8px',
                'padding': '20px',
                'border-style': 'solid',
                'border-color': 'black',
            });
        }


    })


    //ejercicio 4 ------------




})