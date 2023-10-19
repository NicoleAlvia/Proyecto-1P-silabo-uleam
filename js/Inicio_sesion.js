const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = { //EXPRESIONES
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, números, guión y guión bajo //PROPIEDADES
	password: /^.{4,12}$/, // 4 a 12 digitos.
}
const campos = { //CAMPOS
	usuario: false,
	password: false,
}

const validarFormulario = (e) => { //VALIDAR FORMULARIO
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
	}
}

const validarCampo = (expresion, input, campo) => { //VALIDAR CAMPO AL MOMENTO DE INGRESAR DATOS 
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
function ingresar(){
	window.location='home.html';
}
function cancelar(){
	window.location='Inicio_sesion.html';
}
	function volver(){
	window.location='index.html';
}
//LENAR TODOS LOS DATOS
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario); //CUANDO SE LEVANTA LA TECLA SE EJECUTARA LA FUNCION DE VALIDAR FORMULARIO
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {  //ENVIAR EN FORMULARIO CON SUS CAMPOS
	e.preventDefault();

	const subm = document.getElementById('submit');
	if(campos.usuario  && campos.password  ){
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