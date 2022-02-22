$(function() {

	var id;//Se refiere al type del input que añadimos
	var i = 0;//Contador para diferenciar las clases
	var clase;//Nombre de la clase seleccionada

	//Ocultar divs
	$('#editar').hide();
	$('#editar2').hide();
	$('#contenedor2').hide();


	/**
	 * Añadimos iconos a los siguientes botones
	 */
	$("#trash").button(
		{ icons: {primary: "ui-icon-circle-close"}
		, text: true
	});

	$("#guardar").button(
		{ icons: {primary: "ui-icon-circle-plus"}
		, text: true
	});

	$("#guardar2").button(
		{ icons: {primary: "ui-icon-circle-plus"}
		, text: true
	});

	$("#text").button(
		{ icons: {primary: "ui-icon-comment"}
		, text: true
	});

	$("#number").button(
		{ icons: {primary: "ui-icon-arrow-2-n-s"}
		, text: true
	});

	$("#radio").button(
		{ icons: {primary: " ui-icon-bullet"}
		, text: true
	});

	$("#checkbox").button(
		{ icons: {primary: "ui-icon-circlesmall-close"}
		, text: true
	});

	$("#date").button(
		{ icons: {primary: "ui-icon-calendar"}
		, text: true
	});

	$("#select").button(
		{ icons: {primary: "ui-icon-triangle-1-s"}
		, text: true
	});

	/**
	 * Cuando hacemos click sobre la clase boton guardamos la id en la variable id y animaremos la aparicion de los divs.
	 */
    $(document).on("click", ".boton", function(){
		id = $(this).attr("id");

		$('#botones').slideToggle(900);
		$("#editar").slideToggle(900);
	});

	/**
	 * Cuando hacemos submit sobre este form se volvera a ocultar el div editar y se mostrara botones.
	 */
	$('#propiedades').on('submit', function(e){
		e.preventDefault();

		$('#botones').slideToggle(900);
		$("#editar").slideToggle(900);
		i++;

		if(id == 'select'){
			$input = '<label class="editar'+i+'">'+$('#titulo').val()+'<select id="" class="form-control inputs" style="width:'+$('#tamaño').val()*5+'px;"><option>Ejemplo1</option><option>Ejemplo2</option><option>Ejemplo3</option></select></label><br>';
		}else{
			$input = '<label class="editar'+i+'">'+$('#titulo').val()+'<input type="'+id+'" id="" value="" class="form-control inputs" size="'+$('#tamaño').val()+'"></label><br>';
		}
		
		$('#form').append($input);
		$('.editar'+i).hide();
		$('.editar'+i).slideToggle(900);
	
	
	});

	/**
	 * Cuando hagamos click sobre la clase inputs
	 * se guardara el nombre de la clase seleccionada
	 * si el elemento sobre el que hemos clicado es un select,
	 * se guardara lo que es, si no se guardara el type
	 * entonces se ocultara botones y editar se mostrará.
	 */
	$(document).on("click", ".inputs", function(){
		clase = $(this).parent().attr("class");
		if($(this).is("select")) {
			id = 'select';
		}else{
			id = $(this).attr('type');
		}

		$('#botones').hide();
		$("#editar2").show();

	});

	/**
	 * Cuando hagamos submit,si es select se le cambiara 
	 * los atributos de select y si no al input normal
	 * se animara el añadirlo de nuevo
	 * y se ocultara editar y mostrara los botones.
	 * 
	 */
	$('#propiedades2').on('submit', function(e){
		//Detener accion
		e.preventDefault();

		if (id == 'select') {
			$input = $('#titulo2').val()+'<select id="" class="form-control inputs" style="width:'+$('#tamaño2').val()*5+'px;"><option value="">Ejemplo1</option><option value="" selected>Ejemplo2</option><option value="">Ejemplo3</option></select>';
		}else{
			$input = $('#titulo2').val()+'<input type="'+id+'" id="" value="" class="form-control inputs" size="'+$('#tamaño2').val()+'">';
		}

		$('.'+clase).html($input).hide().slideToggle(600);
		$('#botones').show();
		$("#editar2").hide();
	
	});

	/**
	 * Si lo que queremos es borrar el input seleccionado 
	 * pulsaremos sobre eliminar y nos saldra un dialogo
	 * si se pulsas en si se eliminara,si no no hará nada 
	 * en los dos casos se cerrara el dialogo.
	 */
	$('#trash').on('click', function(e){

		var $contenido = $('<div id="dialog" title="Dialog Title">¿Quieres borrar este item?</div>');
		$("body").append($contenido);

		$("#dialog").dialog({ 
			modal: true, 
			show: {effect: "bounce", duration: 600}, 
			hide: {effect: "explode", duration: 600}, 
			title: "Confirmar vaciado", 
			closeOnEscape: false, 
			open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog).hide()},
			buttons: { 
				"Sí": function() { 
				 $('.'+clase).remove();
				 $(this).dialog( "close" ); 
				 $('#botones').show();
				 $("#editar2").hide();
				},
				 "No": function (){
				 $(this).dialog("close"); }
				
				},
				close: function(evento){
					$contenido.remove();
				}
			});
	});

	/**
	 * Al pulsar sobre crear se mostrara el div donde se muestra el html
	 * se ocultaran los otros divs y se ñadira el contenido de html que hemos creado
	 */

	$('#crear').on('click', function(e){
		//Tiempo para ejecutar la animación del div de resultado.
		$('#contenedor2').slideToggle(600);
		$('#resultado').text($('#form').html());
		$('#crear').hide();
		$('#items').hide();
		$("#contenedor").hide();
	});

	/**
	 * Al pulsar sobre crear2, se refrescara la pagina para que se vuelva a empezar la creación del formulario.
	 */
	$('#crear2').on('click', function(e){
		//Refrescar página de nuevo.
		location.reload();
	});
});