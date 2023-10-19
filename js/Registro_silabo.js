const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresiones = {
	codigo: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	silabo: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	carrera: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	unidad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	periodo: /^[a-zA-Z0-9-/\_\-]{4,16}$/,
	paralelo: /^[a-zA-Z0-9-/\_\-]{1,16}$/,
	docente: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
}
const campos = {
	codigo: false,
	silabo: false,
	carrera: false,
	unidad: false,
	periodo: false,
	paralelo: false,
	docente: false,	
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "codigo":
			validarCampo(expresiones.codigo, e.target, 'codigo');
			break;
		case "silabo":
			validarCampo(expresiones.silabo, e.target, 'silabo');
		break;
		case "carrera":
			validarCampo(expresiones.carrera, e.target, 'carrera');
		break;
		case "unidad":
			validarCampo(expresiones.unidad, e.target, 'unidad');
		break;
		case "periodo":
			validarCampo(expresiones.periodo, e.target, 'periodo');
		break;
		case "paralelo":
			validarCampo(expresiones.paralelo, e.target, 'paralelo');
		break;
		case "docente":
			validarCampo(expresiones.docente, e.target, 'docente');
		break;
	
	}
}
function validar() {
	// Obtener nombre de archivo
	const archivo = document.getElementById('archivo').value,
	// Obtener extensión del archivo
		extension = archivo.substring(archivo.lastIndexOf('.'),archivo.length);
	// Si la extensión obtenida no está incluida en la lista de valores
	// del atributo "accept", mostrar un error.
	if(document.getElementById('archivo').getAttribute('accept').split(',').indexOf(extension) < 0) {
	  alert('Archivo inválido. No se permite la extensión ' + extension);
	}
  }
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}
		function cancelar(){
		window.location='Registro_silabo.html';
}
		function volver(){
		window.location='home.html';
}
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const submi = document.getElementById('submit');
	if(campos.codigo && campos.silabo && campos.carrera && campos.unidad && campos.periodo && campos.paralelo  && campos.docente  ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});