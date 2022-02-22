//#id
//.class

$(function () {

    var $codigohtml = "";
    var $codigohtmlfinal = "";
    var $aceptar = " <input type='submit' value='Aceptar' id='aceptar'>";
    var $eliminar = " <input type='button' value='Eliminar' id='eliminar'>";
    //oculto text area html
    $("#areahtml").hide();
    $("#dialogo").hide();


    $(".anadido").on("dblclick",function () {

        //obtengo la id con el hijo y con attr el atributo id
        var id = $(this).children().attr("id");
        console.log(id);

        if (id == "texto") {
            console.log("input texto");
            //  var $clonadotexto =  $('#texto').clone().attr("id", "C"+ $('#texto').attr("id") );
            $codigohtml += "<div class='clonado'>Titulo<input  type=text id=textoclonado placeholder=Añade ></div>";

        } else if (id == "select") {
            console.log("input select");
            // $('#select').clone().appendTo('#formulariofinal');
            $codigohtml += "<div class=clonadoselect> <select  id=selectclonado class=form-select></select></div>";

        } else if (id == "radio") {
            console.log("input radio");
            $codigohtml += "<div class=clonado><input type=radio id=radioclonado value=Radio> <label for=Radio>Radioooo</label></div>";

        } else if (id == "textarea") {
            console.log("input textarea");
            $codigohtml += "<div class=clonado><textarea id=areaclonado cols=5 rows=5>Comentarios </textarea></div>";

        } else if (id == "idfecha") {
            console.log("input idfecha");

            $codigohtml += "<div class=clonado><input type=date id=idfecha></div>";

        }
        $("#formulariofinal").html($codigohtml);
        //control formulario vacio
        if ($("#formulariofinal").children().length >= 1) {
            $("#dialogo").hide();
        }
    })
    $(".clonado").on("click",function () {
        console.log("adfgdafg");
        var $idclonado = $(this).children().attr("id");
        console.log($idclonado);
        if ($idclonado == "radioclonado") {
            var div = "";
            div += "<div class=edit>Edita el nombre del radio<input type=text id=sizeeditradio></div>";
            div += $eliminar;
            div += $aceptar;
            $("#areahtml").hide();
            $("#editable").html(div);
        } else if ($idclonado == "textoclonado") {
            var div = "";
            div += "<div class=edit>Cambia el nombre del Titulo<input type=text placeholder=Titulo id=tituloedit><input type=number id=sizeedit placeholder=Tamaño></div>";
            div += $eliminar;
            div += $aceptar;
            $("#areahtml").hide();
            $("#editable").html(div);
        } else if ($idclonado == "idfecha") {
            var div = "";
            div += $eliminar;
            $("#areahtml").hide();
            $("#editable").html(div);
        }
        else if ($idclonado == "areaclonado") {
            var div = "";
            div += ""
            div += " <input type=text id=idput placeholder=cols>";
            div += " <input type=text id=idput2 placeholder=rows>";
            div += $aceptar;
            div += $eliminar;
            $("#areahtml").hide();
            $("#editable").html(div);
        }

    })


    //btn aceptar
    $("#aceptar").click(function () {
        $contador = 1;
        //input
        $("#textoclonado").attr("maxlength", $("#sizeedit").val());
        //oculto aceptar y eliminar
        $("#aceptar").hide();
        $("#eliminar").hide()
        $(".edit").hide();
        if ($idclonado == "radioclonado") {
            $("#sizeeditradio").val();
            console.log($("label").attr("value"));
        }
        if ($idclonado == "areaclonado") {

            //ocultamos los input necesario
            $("#idput").hide();
            $("#idput2").hide();
            $codigohtmlfinal = "<div class=area_final><textarea id=area_final cols=30 rows=10>Comentarios </textarea></div>";

            //modificamos el cols y rows
            $("#area_final").attr("cols", $("#idput").val());
            $("#area_final").attr("rows", $("#idput2").val());

        }
        //valor input 
        if ("#tituloedit") {
            $valor = $("#tituloedit").val();
            $codigohtmlfinal = $input = '<label id=titulo><input type=text></input>';
            $("#titulo").val($valor);
        }
        $("#formfinal").html($codigohtmlfinal);
    });
    //eliminar btn
    $("#eliminar").click(function () {
        console.log("btn eliminar")
        console.log($idclonado);
        $("#" + $idclonado).remove();
        //ocultamos los input necesario con animacion
        $("#idput").effect("drop", 3000);
        $("#idput2").effect("drop", 3000);
        //ocultamos los botones con animacion
        $("#eliminar").effect("drop", 3000);
        $("#aceptar").effect("drop", 3000);
        $(".edit").effect("drop", 3000);
    })

    //genero el codigo html
    $("#codigohtml").on("click", function () {
        console.log("btn html")

        if ($("#formulariofinal").children().length != 0) {
            $("#areahtml").effect("bounce", 3000);
            $("#areahtml").html($("#formulariofinal").html());
        } else {
            $("#dialogo").show();
            $("#dialogo").dialog({
                hide: { effect: "clip", duration: 1000 },
                show: { effect: "fadeIn", duration: 1000 },
            }
            );
        }
    });

})