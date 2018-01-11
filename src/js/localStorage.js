// Código javascript
function init(){
	if(window.localStorage === undefined){    		
	    console.log("El navegador no soporta localStorage");
	    return;
	}

	var datosFormRecuperado = JSON.parse(window.localStorage.getItem("datosForm"));

	if (datosFormRecuperado != null) {
		document.getElementById("nombre").setAttribute('value', datosFormRecuperado.nombre);  
		document.getElementById("apellidos").setAttribute('value', datosFormRecuperado.apellidos);
		document.getElementById("telefono").setAttribute('value', datosFormRecuperado.telefono);
		document.getElementById("email").setAttribute('value', datosFormRecuperado.email);
		document.getElementById("fechaNacimiento").setAttribute('value', datosFormRecuperado.fechaNacimiento);
		document.getElementById("altura").setAttribute('value', datosFormRecuperado.altura);
		document.getElementById("color").setAttribute('value', datosFormRecuperado.color);
		document.getElementById("web").setAttribute('value', datosFormRecuperado.web);

		console.log(datosFormRecuperado);
		console.log("Datos cargados correctamente.");
	}
	else{
		console.log("No hay datos.");
	}
};

window.addEventListener("load", init, false);

//var miCocheRecuperado = JSON.parse(window.sessionStorage.getItem("miCoche") ); 


function save(){
	var datosForm = 
	{  
		nombre: document.getElementById("nombre").value,   
		apellidos: document.getElementById("apellidos").value,
		telefono: document.getElementById("telefono").value,
		email: document.getElementById("email").value,
		fechaNacimiento: document.getElementById("fechaNacimiento").value,
		altura: document.getElementById("altura").value,
		color: document.getElementById("color").value,
		web: document.getElementById("web").value
	}; 

	if(window.localStorage!==undefined){    
		window.localStorage.setItem("datosForm", JSON.stringify(datosForm));
		console.log(datosForm);
	}else{
	    console.log("El navegador no soporta localStorage");
	}
}
