//#id
//.class

$(function () {

    var $codigohtml = ""

    //oculto text area html
    $("#areahtml").hide();
    $("#dialogo").hide();

    //generar input
    $(".anadido").dblclick(function () {

        //obtengo la id con el hijo y con attr el atributo id
        var id = $(this).children().attr("id");
        console.log(id);

        if (id == "texto") {
            console.log("input texto");
            //  var $clonadotexto =  $('#texto').clone().attr("id", "C"+ $('#texto').attr("id") );
            $codigohtml += "<div class='clonado'> Titulo<input  type=text id=textoclonado placeholder=Añade ></div>";
        } else if (id == "select") {
            console.log("input select");
            // $('#select').clone().appendTo('#formulariofinal');
            $codigohtml += "<div class=clonado> <select  id=selectclonado class=form-select></select></div>";
           
        } else if (id == "radio") {
            console.log("input radio");
            $codigohtml += "<div class=clonado><input type=radio id=radioclonado value=Radio> <label for=Radio>Radio</label></div>";

        } else if (id == "textarea") {
            console.log("input textarea");
            $codigohtml += "<div class=clonado><textarea id=areaclonado>Comentarios </textarea></div>";
          
        } else if (id == "idfecha") {
            console.log("input idfecha");
           
            $codigohtml += "<div class=clonado><input type=date id=idfecha></div>";
         
        }
        $("#formulariofinal").html($codigohtml);
        //control formulario vacio
        if ($("#formulariofinal").children().length >= 1) {
            $("#dialogo").hide();
        }


        $(".clonado").click(function () {
            var $idclonado = $(this).children().attr("id");
            console.log($idclonado);
            if ($idclonado == "radioclonado") {
                var div="";
                div += "Edita el nombre del radio<div class=edit><input type=text></div>";
                div += " <input type='button' value='Aceptar' id='aceptar'>";
                div += " <input type='button' value='Eliminar' id='eliminar'>";
               
                $("#areahtml").hide();
                $("#editable").html(div);
            }else if ($idclonado == "textoclonado") {
                var div="";
                div += "Cambia el nombre del Titulo<div class=edit><input type=text placeholder=Titulo id=tituloedit><input type=number id=sizeedit placeholder=Tamaño></div>";
                div += " <input type=submit value=Aceptar id=aceptar>";
                div += " <input type='button' value='Eliminar' id='eliminar'>";
              

                $("#areahtml").hide();
                $("#editable").html(div);
            }
            $("#aceptar").click(function () {
               // console.log($("#textoclonado").attr("id"))
               $("#textoclonado").attr("maxlength",$("#sizeedit").val());
            })
            $("#eliminar").click(function () {
                console.log("btn eliminar")
                console.log($idclonado);
                $("#"+$idclonado).remove();
              // $idclonado.remove();
             
             })

        })
    })

    

    //genero el codigo html
    $("#codigohtml").on("click", function () {
        console.log("btn html")

        if ($("#formulariofinal").children().length != 0) {
            $("#areahtml").show();
            $("#areahtml").html($("#formulariofinal").html());
        } else {
            $("#dialogo").show();
           
           
            
        }
    });

    

    //modificar






})