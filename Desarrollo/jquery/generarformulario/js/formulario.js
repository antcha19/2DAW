//#id
//.class

$(function () {
 //oculto text area html
 $("#areahtml").hide();
 $("#dialogo").hide();

    //generar input
    $(".anadido").dblclick(function () {

        var html = ""
        //obtengo la id con el hijo y con attr el atributo id
        var id = $(this).children().attr("id");
        console.log(id);

        if (id == "texto") {
            console.log("input texto");
          var $clonadotexto =  $('#texto').clone().attr("id", "C"+ $('#texto').attr("id") );
            $clonadotexto.appendTo("#formulariofinal");
            html += "<br>";
        }
        else if (id == "select") {
            console.log("input select");
            $('#select').clone().appendTo('#formulariofinal');
            html += "<br>";
        }
        else if (id == "radio") {
            console.log("input radio");
            $('#radio').clone().appendTo('#formulariofinal');
            html += "<br>";
        }else if (id == "textarea") {
            console.log("input textarea");
            $('#textarea').clone().appendTo('#formulariofinal');
            html += "<br>";
        }
    })

    $("#codigohtml").on("click", function () {
        console.log("btn html")
     
        if ($("#formulariofinal").children().length != 0) {
            $("#areahtml").show();
            $("#areahtml").html($("#formulariofinal").html());
        }else{
            $("#dialogo").show();
            $("#dialogo").dialog(); 
        }

           
        
    });




})