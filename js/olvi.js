const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const campos = {
    correo: false,
}
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
    }
}
formulario.addEventListener('submit', (e) => { //ENVIAR EN FORMULARIO CON SUS CAMPOS
    e.preventDefault();

    const subm = document.getElementById('submit');
    if (campos.correo) {
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