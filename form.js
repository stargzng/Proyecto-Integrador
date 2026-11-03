const formulario = document.getElementById("formulario");

const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const inputTel = document.getElementById("telefono");

const mensaje = document.getElementById("mensaje");
const mensajeNombre = document.getElementById("mensaje-nombre");
const mensajeCorreo = document.getElementById("mensaje-correo");
const mensajeTelefono = document.getElementById("mensaje-telefono");


const patronTelefono = /^[0-9]{10,15}$/;
const patronCorreo = /^[^\s@]+@[a-z]{2,}\.[a-z]+$/;
const patronNombre = /^[a-zA-Z\s]{3,30}$/;


formulario.addEventListener("submit", validarFormulario)


function validarFormulario(event) {

    event.preventDefault();


    const nombre = inputNombre.value.trim();
    const correo = inputCorreo.value.trim();
    const telefono = inputTel.value.trim();


    if (validarCorreo(correo) && validarNombre(nombre) && validarTel(telefono)) {
        mensaje.classList.add("visible");
        mensajeNombre.textContent = `Gracias por registrarte ${nombre}!`;
        mensajeCorreo.textContent = `Correo: ${correo}`;
        mensajeTelefono.textContent = `Telefono: ${telefono}`;
    }

}


function validarNombre(nombre) {

    const errorNombre = document.querySelector(".error-nombre");

    if (!patronNombre.test(nombre)) {

        if (errorNombre === null) {
            const nuevoError = document.createElement("p");

            nuevoError.textContent = "El nombre debe tener entre 3 y 30 caracteres. Y solo deben ser letras";
            nuevoError.classList.add("error", "error-nombre");

            inputNombre.after(nuevoError);
        }

        return false;
    }

    if (errorNombre !== null) {
        errorNombre.remove();
    }

    return true;

}


function validarCorreo(correo) {


    const errorCorreo = document.querySelector(".error-correo");

    if (!patronCorreo.test(correo)) {

        if (errorCorreo === null) {
            const nuevoError = document.createElement("p");
            nuevoError.classList.add("error", "error-correo")

            nuevoError.textContent = "Ingrese una direccion de correo valida!"

            inputCorreo.after(nuevoError);
        }
        return false;
    }

    if (errorCorreo !== null) {
        errorCorreo.remove();
    }

    return true;
}


function validarTel(telefono) {

    const errorTelefono = document.querySelector(".error-telefono");

    if (!patronTelefono.test(telefono)) {

        if (errorTelefono === null) {
            const nuevoError = document.createElement("p");
            nuevoError.textContent = "El telefono debe tener entre 10 y 15 digitos";
            nuevoError.classList.add("error", "error-telefono");

            inputTel.after(nuevoError);

        }

        return false;
    }

    if (errorTelefono !== null) {
        errorTelefono.remove();
    }

    return true;
}