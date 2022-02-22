//#id
//.class

$(function () {

    var $codigohtml = "";
    var $codigohtmlfinal = "";
    var $aceptar = " <button type=submit id=aceptar>Aceptar</button>";
    
    var ideliminar  ="";
    //oculto text area html
    $("#areahtml").hide();
    $("#dialogo").hide();
    $("#dialog").hide();


    $(document).on('click', 'input[type="button"]', function (event) {
        let id1 = this.id;
        console.log("Se presionó el Boton con Id :" + id1)
        $class = "";
        switch (id1) {
            case "input":

                var div = "";
                div += "<div class=edit>Introduce nombre y tamaño<br><input type=text placeholder=Titulo id=tituloedit><input type=number id=sizeedit placeholder=Tamaño></div>";

                div += $aceptar;
                // $("#areahtml").hide();
                $("#editable").html(div);
                break;
            case "select":
                var div = "";
                div += '<div>Introduce nombre y tamaño<input type=text placeholder=Titulo id=introselect><input type=number id=sizeedit placeholder=Tamaño></div>';
                div += $aceptar;
                //$("#areahtml").hide();
                $("#editable").html(div);
                break;
            case "radio":
                var div = "";
                div += '<div>Introduce nombre y tamaño<br><input type=text placeholder=Titulo id=introradio></div>';
                div += $aceptar;
                //$("#areahtml").hide();
                $("#editable").html(div);
                break;
            case "textarea":
                var div = "";
                div += '<div>Introduce el tamaño<br><input type=text id=idput placeholder=cols><input type=text id=idput2 placeholder=rows></div>';
                div += $aceptar;
                //$("#areahtml").hide();
                $("#editable").html(div);
                break;

            default:
                break;
        }
        $("#formulariofinal").html($codigohtml);
        //control formulario vacio
        if ($("#formulariofinal").children().length >= 1) {
            $("#dialogo").hide();
        }
        $("#aceptar").click(function () {
            console.log(id1);
            switch (id1) {
                case "input":
                    //input 
                    var div1 = "";
                    $valor = $("#tituloedit").val();
                    console.log($valor);
                    div1 = '<div  class="items_en_uso" id=classinput><label >' + $valor + '</label><br> <input type="text" id="inputtext" ></input><br></div>'
                    $(div1).clone().appendTo("#formfinal");
                    break;
                case "select":
                    var div2 = "";
                    //input 
                    $valor = $("#introselect").val();
                    console.log($valor);
                    div2 = '<div class="items_en_uso" id=classselect><label>Select</label><br> <select id=selectin><option>' + $valor + '</option></select><br></div>'
                    //clono el div y lo añado añ formulario
                    $(div2).clone().appendTo("#formfinal");
                    break;
                case "radio":
                    var div3 = "";
                    //input 
                    $valor = $("#introradio").val();
                    console.log($valor);
                    div3 = '<div class="items_en_uso" id=classradio><label >Radio</label><br> <input type=radio ><label>' + $valor + '</label><br></div>'
                    $(div3).clone().appendTo("#formfinal");
                    break;
                case "textarea":
                    var div4 = "";
                    $valor2 = $("#idput").val();
                    $valor3 = $("#idput").val();
                    div4 = '<div class="items_en_uso" id="classarea" ><textarea id=area_final cols=' + $valor2 + ' rows=' + $valor3 + '>Comentarios </textarea></div>';
                    $(div4).clone().appendTo("#formfinal");
                default:
                    break;
            }

            $('body').on('click', '.items_en_uso', function () {
                ideliminar = $(this).attr('id');

                if (ideliminar == "classarea" || ideliminar == "classradio" || ideliminar == "classselect" || ideliminar == "classinput") {
                    dialogo();
                }
                return ideliminar;
            })
            function dialogo() {
                
                $("#dialog").dialog({
                    modal: true,
                    show: { effect: "bounce", duration: 800 },
                    hide: { effect: "explode", duration: 800 },
                    title: "Confirmar",
                    closeOnEscape: false,
                    open: function (event, ui) { $(".ui-dialog-titlebar-close", ui.dialog).hide() },
                    buttons: {
                        "Sí": function () {
                            if (ideliminar == "classarea") {
                                $('#classarea').remove();
                            }
                            if (ideliminar == "classradio") {
                                $('#classradio').remove();
                            }
                            if (ideliminar == "classselect") {
                                $('#classselect').remove();
                            }
                            if (ideliminar == "classinput") {
                                $('#classinput').remove();
                            }
                           
                            $(this).dialog("close");

                        },
                        "No": function () {
                            $(this).dialog("close");
                        }
                    },

                });
            }

            //eliminar
            $("#classradio").click(function () {

                
            })
        });
    });
    //genero el codigo html
    $("#codigohtml").on("click", function () {
        console.log("btn html")
        if ($("#formfinal").children().length != 0) {
            $("#areahtml").effect("bounce", 3000);
            $("#areahtml").html($("#formfinal").html());
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