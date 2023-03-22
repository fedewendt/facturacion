//capturamos los datos ingresados en el formulario y realizamos los calculos para la facturacion

function calcularCostoTotal(){

	let lecturaAnterior = parseInt(document.getElementById("lecturaAnterior").value);
	let lecturaActual = parseInt(document.getElementById("lecturaActual").value);
	let tipoConsumidor = document.getElementById("opcion").value

	let consumo = lecturaActual-lecturaAnterior

	let precioKw = 1;
	let cargoFijo = 1;
	let impuesto = 1;


		costoTotal = 0;
		 if(tipoConsumidor == "residencial"){
		 	precioKw = 4.57;
		 	cargoFijo = 357;
		 	impuesto = 1.21;
		 }

		 if(tipoConsumidor == "comercial"){
		 	precioKw = 6.79;
		 	cargoFijo = 569;
		 	impuesto =1.21;
		 }

		 costoTotal = ((lecturaActual-lecturaAnterior)*precioKw+cargoFijo)*impuesto;


//mostramos en pantalla la informacion para el usuario
    
    document.getElementById('consumo').innerHTML = consumo;

    document.getElementById('precioKw').innerHTML = precioKw;

	document.getElementById('cargoFijo').innerHTML = cargoFijo;

	document.getElementById('impuesto').innerHTML = impuesto;

	document.getElementById('costoTotal').innerHTML = costoTotal;






		 return costoTotal;


	}