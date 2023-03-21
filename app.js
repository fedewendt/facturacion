document.querySelector('#Calcular consumo').addEventListener(click, () =>{
	const lecturaAnterior = parseInt(document.querySelector('#Lectura anterior').value);
	const lecturaActual = parseInt(document.querySelector('#Lectura actual').value);
	const tipoConsumidor = document.querySelector('#tipo consumidor').value;
	

	function calcularCostoTotal(){
		costoTotal = 0;
		 if(tipoConsumidor == "residencial"){
		 	let precioKw = 4.57;
		 	let cargoFijo = 357;
		 	let impuesto = 1.21;
		 }

		 if(tipoConsumidor == "comercial"){
		 	let precioKw = 6.79;
		 	let cargoFijo = 569;
		 	let impuesto =1.21;
		 }

		 costoTotal = (lecturaActual-lecturaAnterior)*precioKw+cargoFijo+impuesto;

		 return costoTotal;


	}

	

    console.log(costoTotal);

})