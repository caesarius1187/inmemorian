$(document).ready(function(){
    //var iTamPantalla = calcularTamPantalla();		
    //getDetallesManoDeObra();
    getDetallesProducto();

    $('#OrdentrabajoCosto').val('');

    $("#tblListaClientes").dataTable({ 
            "sPaginationType": "full_numbers",
            "sScrollY": "200px",
        "bScrollCollapse": true,
        "iDisplayLength":100,
    });

    $( "input.datepicker" ).datepicker({
        yearRange: "-100:+50",
        changeMonth: true,
        changeYear: true,
        constrainInput: false,
        showOn: 'both',
        buttonImage: "",
        dateFormat: 'dd-mm-yy',
        buttonImageOnly: true
    });
    $("#tblListaClientes_filter").attr("style","float:left; text-align:center");
    $(".buttonTipoOrden").click(function(){
            hiddeAllRows();
             if($(this).hasClass("buttonTipoOrden")){
            $( this ).switchClass( "buttonTipoOrden", "buttonTipoOrdenDesactivado", 250 );
          }else{
            $(".buttonTipoOrden").each(function(){
                    $(this).switchClass( "buttonTipoOrden", "buttonTipoOrdenDesactivado", 0 );
          });
            $( this ).switchClass( "buttonTipoOrdenDesactivado", "buttonTipoOrden", 250 );
          }
          setTimeout(
              function() 
              {
                    activateRowsActives()
              }, 300);
    })
    $(".buttonTipoOrdenDesactivado").click(function(){
            hiddeAllRows();
             if($(this).hasClass("buttonTipoOrdenDesactivado")){
                    $(".buttonTipoOrden").each(function(){
                    $(this).switchClass( "buttonTipoOrden", "buttonTipoOrdenDesactivado", 0 );
            });
            $( this ).switchClass( "buttonTipoOrdenDesactivado", "buttonTipoOrden", 250 );

          }else{
                    $( this ).switchClass( "buttonTipoOrden", "buttonTipoOrdenDesactivado", 250 );
          }
             setTimeout(
              function() 
              {
                    activateRowsActives()
              }, 300);
    })
    function hiddeAllRows(){
            $('#tblAddOrdenTrabajo tr').each(function() {
                    if(!$(this).hasClass('all')){
                            $(this).hide();
                    }
            });
    }
    function activateRowsActives(){
            if($('#btnN-CMG').hasClass("buttonTipoOrden")){
                    showTrWithClass('ncmg');
                    $('#OrdentrabajoTipoorden').val('ncmg');
                    $('#OrdentrabajoTipotrabajo')
                        .find('option')
                        .remove()
                        .end()
                        .append('<option value="PLACA PARA NICHO NEGRO BRASIL">PLACA PARA NICHO NEGRO BRASIL</option>')
                        .append('<option value="LATERALES">LATERALES</option>')
                        .append('<option value="GRABADO">GRABADO</option>')
                        .append('<option value="FLORERO DE ACERO 10 X 5">FLORERO DE ACERO 10 X 5</option>')
                        .append('<option value="FOTO ENLOZADA 9 X 12">FOTO ENLOZADA 9 X 12</option>')
                        .val('PLACA PARA NICHO NEGRO BRASIL')
                    ;
            }
            if($('#btna1b1r1').hasClass("buttonTipoOrden")){
                    showTrWithClass('a1b1r1');
                    $('#OrdentrabajoTipoorden').val('a1b1r1');
                    $('#OrdentrabajoTipotrabajo')
                        .find('option')
                        .remove()
                        .end()
                        .append('<option value="L???PIDA NUEVA CON GRABADO DE 1 NIVEL">L???PIDA NUEVA CON GRABADO DE 1 NIVEL</option>')
                        .append('<option value="AGREGADO DE 1 NIVEL">AGREGADO DE 1 NIVEL</option>')
                        .append('<option value="RESTAURACION DE 1 NIVEL">RESTAURACION DE 1 NIVEL</option>')
                        .val('L???PIDA NUEVA CON GRABADO DE 1 NIVEL')
                    ;
            }
            if($('#btna2b2r2').hasClass("buttonTipoOrden")){
                    showTrWithClass('a2b2r2');
                    $('#OrdentrabajoTipoorden').val('a2b2r2');
                    $('#OrdentrabajoTipotrabajo')
                        .find('option')
                        .remove()
                        .end()
                        .append('<option value="L???PIDA NUEVA CON GRABADO DE 2 NIVEL">L???PIDA NUEVA CON GRABADO DE 2 NIVEL</option>')
                        .append('<option value="AGREGADO DE 2 NIVEL">AGREGADO DE 2 NIVEL</option>')
                        .append('<option value="RESTAURACION DE 2 NIVEL">RESTAURACION DE 2 NIVEL</option>')
                        .val('L???PIDA NUEVA CON GRABADO DE 2 NIVEL')
                    ;
            }
            if($('#btna3b3r3').hasClass("buttonTipoOrden")){
                    showTrWithClass('a3b3r3');
                    $('#OrdentrabajoTipoorden').val('a3b3r3');
                    $('#OrdentrabajoTipotrabajo')
                        .find('option')
                        .remove()
                        .end()
                        .append('<option value="L???PIDA NUEVA CON GRABADO DE 3 NIVEL">L???PIDA NUEVA CON GRABADO DE 3 NIVEL</option>')
                        .append('<option value="AGREGADO DE 3 NIVEL">AGREGADO DE 3 NIVEL</option>')
                        .append('<option value="RESTAURACION DE 3 NIVEL">RESTAURACION DE 3 NIVEL</option>')
                        .val('L???PIDA NUEVA CON GRABADO DE 3 NIVEL')
                    ;
            }
            if($('#btnplacbronce').hasClass("buttonTipoOrden")){
                    showTrWithClass('placbronce');
                    $('#OrdentrabajoTipoorden').val('placbronce');
                    $('#OrdentrabajoTipotrabajo')
                        .find('option')
                        .remove()
                        .end()
                        .append('<option value="PLACA DE BROCE">PLACA DE BROCE</option>')
                        .val('PLACA DE BROCE')
                    ; 
            }
            if($('#btnplacnicho').hasClass("buttonTipoOrden")){
                    showTrWithClass('placnicho');
                    $('#OrdentrabajoTipoorden').val('placnicho');
                    $('#OrdentrabajoTipotrabajo')
                        .find('option')
                        .remove()
                        .end()
                    .append('<option value="PLACA PARA NICHO NEGRO BRASIL">PLACA PARA NICHO NEGRO BRASIL</option>')
                        .append('<option value="LATERALES">LATERALES</option>')
                        .append('<option value="GRABADO">GRABADO</option>')
                        .append('<option value="FLORERO DE ACERO 10 X 5">FLORERO DE ACERO 10 X 5</option>')
                        .append('<option value="FOTO ENLOZADA 9 X 12">FOTO ENLOZADA 9 X 12</option>')
                        .val('PLACA PARA NICHO NEGRO BRASIL')
                    ; 
            }
            if($('#btnplacips').hasClass("buttonTipoOrden")){
                    showTrWithClass('placips');
                    $('#OrdentrabajoTipoorden').val('placips');
                    $('#OrdentrabajoTipotrabajo')
                        .find('option')
                        .remove()
                        .end()
                    .append('<option value="PLACA PARA NICHO NEGRO BRASIL">PLACA PARA NICHO NEGRO BRASIL</option>')
                        .append('<option value="LATERALES">LATERALES</option>')
                        .append('<option value="GRABADO">GRABADO</option>')
                        .append('<option value="FLORERO DE ACERO 10 X 5">FLORERO DE ACERO 10 X 5</option>')
                        .append('<option value="FOTO ENLOZADA 9 X 12">FOTO ENLOZADA 9 X 12</option>')
                        .val('PLACA PARA NICHO NEGRO BRASIL')
                    ; 
            }
    }
    function showTrWithClass(classToShow){
            $('#tblAddOrdenTrabajo tr').each(function() {
                    if($(this).hasClass(classToShow)){
                            $(this).show();
                    }
            });
    }
    mostrarTipoDeOrdenInicial();
        //calculo del saldo
    $("#OrdentrabajoTotal").change(function() {
            calcularSaldo();
    });
    $("#OrdentrabajoAcuenta").change(function() {
            calcularSaldo();
    });
    $("#OrdentrabajoSaldo").change(function() {
            calcularSaldo();
    });
    $(".recalculable").change(function() {
        actualizarTotal();
    });
    actualizarTotal();
    $("#OrdentrabajoParaips").on('change',function(){
        if($("#OrdentrabajoParaips").prop('checked') == true){    
            $(".paraips").show();
        }else{
            $(".paraips").hide();
        }
    });
    $("#OrdentrabajoParaips").trigger('change');
});
//vamos a inicializar el formulario en caso de que el campo Tipo de Orden venga con un valor predeterminado
function calcularSaldo(){
	var total = $("#OrdentrabajoTotal").val();
	var acuenta = $("#OrdentrabajoAcuenta").val();
	var saldo = total - acuenta;
	$("#OrdentrabajoSaldo").val(saldo);
}
function mostrarTipoDeOrdenInicial(){
	switch($('#OrdentrabajoTipoorden').val()){
		case'ncmg':
			$('#btnN-CMG').trigger( "click" );
		break;
		case'a1b1r1':
			$('#btna1b1r1').trigger( "click" );
		break;
		case'a2b2r2':
			$('#btna2b2r2').trigger( "click" );
		break;
		case'a3b3r3':
			$('#btna3b3r3').trigger( "click" );
		break;
		case'placbronce':
			$('#btnplacbronce').trigger( "click" );
		break;
		case'placnicho':
			$('#btnplacnicho').trigger( "click" );
		break;
		case'placips':
			$('#btnplacips').trigger( "click" );
		break;
		default:
		$('#btnN-CMG').trigger( "click" );
		break;
	}	
}

//Obtiene los modelos de la marca seleccionada para la seleccion del producto a reparar
function getModelos(){
	var formData = $('#OrdentrabajoMarcaId').serialize(); 
	$.ajax({ 
			type: 'POST', 
			url: serverLayoutURL+'/modelos/getbycategory', 
			data: formData, 
			success: function(data,textStatus,xhr){ 
				$('#OrdentrabajoModeloId').empty();
				//if(data != "")
				//alert(data);
				if(data.indexOf("<option") == -1)
				{
					var sOpciones = "<option value='0'></option>";
					$('#OrdentrabajoModeloId').html(sOpciones);
				}
				else				
					$('#OrdentrabajoModeloId').html(data);					
				
				getProductos();
			}, 
			error: function(xhr,textStatus,error){ 
				alert(textStatus); 
			} 
		});	
		return false; 
	}
//Obtiene los productos del modelo seleccionado para el producto a reparar
function getProductos(){
	var formData = $('#OrdentrabajoModeloId').serialize(); 
	$.ajax({ 
			type: 'POST', 
			url: serverLayoutURL+'/productos/getbymodel', 
			data: formData, 
			success: function(data,textStatus,xhr){ 
				$('#OrdentrabajoProductoId').empty();
				$('#OrdentrabajoProductoId').html(data);
				if(data != "")
					getFallas();
			}, 
			error: function(xhr,textStatus,error){ 
				alert(textStatus); 
			} 
		});	
		return false; 
}	

//obtiene los modelos de la marca seleccionada para agregar productos a vender en la orden de trabajo
function getModelosDetalle(){
	var formData = $('#OrdentrabajoMarcadetalleId').serialize(); 
	$.ajax({ 
			type: 'POST', 
			url: serverLayoutURL+'/modelos/getbycategory', 
			data: formData, 
			success: function(data,textStatus,xhr){ 
				$('#OrdentrabajoModelodetalleId').empty();
				//alert(data);
				if(data.indexOf("<option") == -1)
				{
					var sOpciones = "<option value='0'></option>";
					$('#OrdentrabajoModelodetalleId').html(sOpciones);
				}
				else
				{
					$('#OrdentrabajoModelodetalleId').html(data);
				}
				//if(data=!"")
				//	getProductosDetalle();
				getProductosDetalle();
			}, 
			error: function(xhr,textStatus,error){ 
				alert(textStatus); 
			} 
		});	
		return false; 
	}
//obtiene los productos del modelo seleccionado para agregar productos a vender en la orden de trabajo
function getProductosDetalle(){
	var formData = $('#OrdentrabajoModelodetalleId').serialize(); 
	$.ajax({ 
			type: 'POST', 
			url: serverLayoutURL+'/productos/getbymodel', 
			data: formData, 
			success: function(data,textStatus,xhr){ 
				$('#OrdentrabajoProductodetalleId').empty();
				$('#OrdentrabajoProductodetalleId').html(data);
				if(data!="")
					getDetallesProducto();
				}, 
			error: function(xhr,textStatus,error){ 
				alert(textStatus); 
			} 
		});	
		return false; 
}	

//Agrega un producto para vender en la orden de trabajo
function agregarproducto(){
	if(!checkstock()){
		alert("Seleccione un producto");
		return;
	}
	 
	var numDetalle = $('#OrdentrabajoNumDetalle').val();
	var newDetalle = '<tr id="RowDetalle'+numDetalle+'">';
	newDetalle +=' <td>';
	newDetalle +='	<div class="input text">';
	var nombreProducto = $('#OrdentrabajoProductoId option[value=' + $('#OrdentrabajoProductoId').val() + ']').html();
	newDetalle +='		<input readonly="readonly" value="'+nombreProducto+'" >';
	var idProducto = $('#OrdentrabajoProductoId').val();
	newDetalle +='		<input name="data[Detalleordentrabajo]['+numDetalle+'][producto_id]" readonly="readonly" id="Detalleordentrabajo'+numDetalle+'ProductoId" type="hidden" value="'+idProducto+'">';
	newDetalle +='	</div>';
	newDetalle +='</td> ';
	newDetalle +='<td>';
	newDetalle +='	<div class="input number">';
	var precioProducto = $('#OrdentrabajoPreciodetalle').val();
	newDetalle +='		<input name="data[Detalleordentrabajo]['+numDetalle+'][precio]" onchange="actualizarTotal();" step="any" id="Detalleordentrabajo'+numDetalle+'Precio" type="number" value="'+precioProducto+'" class="changeTotal">';
	newDetalle +='	</div>';
	newDetalle +='</td> ';
	newDetalle +='<td>';
	newDetalle +='	<div class="input number">';
	var cantidadProducto = $('#OrdentrabajoCantidaddetalle').val();
	newDetalle +='		<input name="data[Detalleordentrabajo]['+numDetalle+'][cantidad]" readonly="readonly" id="Detalleordentrabajo'+numDetalle+'Cantidad" type="number" value="'+cantidadProducto+'" class="changeTotal">';
	newDetalle +='	</div>';
	newDetalle +='</td>';
	newDetalle +='<td>';
	newDetalle +='	<div class="input number">';
	newDetalle +='		<input name="data[Detalleordentrabajo]['+numDetalle+'][descripcion]" id="Detalleordentrabajo'+numDetalle+'Descripcion" value="" >';
	newDetalle +='	</div>';
	newDetalle +='</td>';
	newDetalle +='<td>';
	newDetalle +='	<input  type="button" value="X"  title="Eliminar" onclick="eliminarDetalle('+numDetalle+')" class="eliminar">';
	newDetalle +='</td>';
	newDetalle +='</tr>';
	$('#OrdentrabajoNumDetalle').val(numDetalle*1+1);	
	$('#tableDOT').append(newDetalle);
	actualizarTotal();
}
//Elimina un producto a vender en la orden de trabajo
function eliminarDetalle(numDetalle){
	$('#RowDetalle'+numDetalle).remove() ;
	actualizarTotal();
}
function eliminarDetalleGuardado(numDetalle){
    formData = "";
    //alert(formData);
    $.ajax({
        type: 'POST',
        url: serverLayoutURL+'/detalleordentrabajos/delete/'+numDetalle,
        data: formData,
        success: function(data,textStatus,xhr){
            var respuesta = JSON.parse(data);
            alert(respuesta.respuesta);
            if(respuesta.error=="0"){
                $('#RowDetalle'+numDetalle).remove() ;
                actualizarTotal();
            }
        },
        error: function(xhr,textStatus,error){
            alert(textStatus);
        }
    });
    return false;
}
function eliminarDetalleManoDeObra(numDetalle){
	$('#RowDetalleManoDeObra'+numDetalle).remove() ;
	actualizarTotal();
}
//Checkea el stock del producto que se quiere vender en la orden de trabajo
function checkstock(){
	var cantidad=$('#OrdentrabajoCantidaddetalle').val()*1 ;
	var stock=$('#OrdentrabajoStockdetalle').val()*1 ;
	var left = stock-cantidad;
	if(isNaN(cantidad)||isNaN(stock)){
		return false;
	}
	if(cantidad==0){
		$('#OrdentrabajoCantidaddetalle').val(1) ;
		alert('No puede agregar cantidad 0');
		return false;
	}
	else if(left<0){
		$('#OrdentrabajoCantidaddetalle').val(stock) ;
		alert('No tiene suficiente stock de este producto. Disponible: '+stock);
		return false;
	}
	return true;
}
//Actualiza el costo total de la orden de trabajo
function actualizarTotal(){
	var numDetalle = $('#OrdentrabajoNumDetalle').val()*1;
	var total=0;
	for(var i=0;i<numDetalle;i++){
		if(document.getElementById('Detalleordentrabajo'+i+'Precio')) {
			var precio=$('#Detalleordentrabajo'+i+'Precio').val()*1 ;
			var cantidad=$('#Detalleordentrabajo'+i+'Cantidad').val()*1 ;
			total += precio*cantidad;
		}		
	}
	/*numDetalle = $('#OrdentrabajoNumDetalleManoDeObra').val()*1;
	for(var i=0;i<numDetalle;i++){
		if(document.getElementById('Manoobraxordentrabajo'+i+'Precio')) {
			var precio=$('#Manoobraxordentrabajo'+i+'Precio').val()*1 ;
			var cantidad=$('#Manoobraxordentrabajo'+i+'Cantidad').val()*1 ;
			total += precio*cantidad;
		}		
	}*/
	$('#OrdentrabajoCosto').val(total);
	$('#OrdentrabajoTotal').val(total);
    calcularSaldo();
}
//Obtiene los detalles del producto seleccionado para vender en la orden de trabajo
function getDetallesProducto(){
	//var formData = $('#OrdentrabajoProductodetalleId').serialize(); 
	formData = $('#OrdentrabajoProductoId').serialize(); 	
	//alert(formData);
	$.ajax({ 
			type: 'POST', 
			url: serverLayoutURL+'/productos/getdetalle', 
			data: formData, 
			success: function(data,textStatus,xhr){ 
				$('#tdDetalleProducto').empty();
				$('#tdDetalleProducto').html(data);				
				}, 
			error: function(xhr,textStatus,error){ 
				alert(textStatus); 
			} 
		});	
		return false; 
}	
//Obtiene los detalles de la mano de obra seleccionada para agregar a la orden de trabajo
function getDetallesManoDeObra(){
	var formData = $('#OrdentrabajoManodeobraId').serialize(); 
	$.ajax({ 
			type: 'POST', 
			url: serverLayoutURL+'/manodeobras/getdetalle', 
			data: formData, 
			success: function(data,textStatus,xhr){ 
				$('#tdDetalleManodeobra').empty();
				$('#tdDetalleManodeobra').html(data);				
				}, 
			error: function(xhr,textStatus,error){ 
				alert(textStatus); 
			} 
		});	
		return false; 
}	
function agregarmanodeobra(){
	var vPrecio=$('#OrdentrabajoPreciodetallemanodeobra').val()*1 ;
	if(isNaN(vPrecio)){
		alert("Seleccione una mano de obra");
		return false;
	}
	var numDetalle = $('#OrdentrabajoNumDetalleManoDeObra').val();
	var newDetalle = '<tr id="RowDetalleManoDeObra'+numDetalle+'">';
	newDetalle +=' <td>';
	newDetalle +='	<div class="input text">';
	var nombreManoDeObra = $('#OrdentrabajoManodeobraId option[value=' + $('#OrdentrabajoManodeobraId').val() + ']').html();
	newDetalle +='		<input readonly="readonly" value="'+nombreManoDeObra+'" >';
	var idManoDeObra = $('#OrdentrabajoManodeobraId').val();
	newDetalle +='		<input name="data[Manoobraxordentrabajo]['+numDetalle+'][manodeobra_id]" readonly="readonly" id="Manoobraxordentrabajo'+numDetalle+'ManodeobraId" type="hidden" value="'+idManoDeObra+'">';
	newDetalle +='	</div>';
	newDetalle +='</td> ';
	newDetalle +='<td>';
	newDetalle +='	<div class="input number">';
	var precioManoDeObra = $('#OrdentrabajoPreciodetallemanodeobra').val();
	newDetalle +='		<input name="data[Manoobraxordentrabajo]['+numDetalle+'][precio]" onchange="actualizarTotal();" step="any" id="Manoobraxordentrabajo'+numDetalle+'Precio" type="number" value="'+precioManoDeObra+'" class="changeTotal">';
	newDetalle +='	</div>';
	newDetalle +='</td> ';	
	newDetalle +='<td>';
	newDetalle +='	<div class="input number">';
	var cantidadManoDeObra = $('#OrdentrabajoCantidaddetalleManodeobra').val();
	newDetalle +='		<input name="data[Manoobraxordentrabajo]['+numDetalle+'][cantidad]" readonly="readonly" id="Manoobraxordentrabajo'+numDetalle+'Cantidad" type="number" value="'+cantidadManoDeObra+'" class="changeTotal">';
	newDetalle +='	</div>';
	newDetalle +='</td>';
	newDetalle +='<td>';
	newDetalle +='	<input  type="button" value="X" title="Eliminar" onclick="eliminarDetalleManoDeObra('+numDetalle+')" class="eliminar">';
	newDetalle +='</td>';
	newDetalle +='</tr>';
	$('#OrdentrabajoNumDetalleManoDeObra').val(numDetalle*1+1);	
	$('#tableDMOXOT').append(newDetalle);
	actualizarTotal();
}
function cargarCliente()
{
	location.href = "#lnkListaClientes";
}
function SeleccionarCliente(cliId)
{
	$("#OrdentrabajoClienteId").val(cliId);
	location.href = "#close";
}