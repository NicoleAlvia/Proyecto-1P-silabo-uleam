const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	codigo: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	asignatura: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	carrera: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	nivel: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	docente: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
}

const campos = {
	codigo: false,
	asignatura: false,
	carrera: false,
	nivel: false,
	docente: false,
	
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "codigo":
			validarCampo(expresiones.codigo, e.target, 'codigo');
			break;
		case "asignatura":
			validarCampo(expresiones.asignatura, e.target, 'asignatura');
			break;
		case "carrera":
			validarCampo(expresiones.carrera, e.target, 'carrera');
			break;
		case "nivel":
			validarCampo(expresiones.nivel, e.target, 'nivel');
			break;
		case "docente":
			validarCampo(expresiones.docente, e.target, 'docente');
			break;
	
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
		window.location='Registro_asignatura.html';
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
	if(campos.codigo && campos.asignatura && campos.carrera && campos.nivel  && campos.docente  ){
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