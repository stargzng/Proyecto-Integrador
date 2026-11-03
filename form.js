const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const inputTel = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");

const mensajeNombre = document.getElementById("mensaje-nombre");
const mensajeCorreo = document.getElementById("mensaje-correo");
const mensajeTelefono = document.getElementById("mensaje-telefono");

formulario.addEventListener("submit", validarFormulario)

function validarFormulario(event) {
    event.preventDefault();

    const nombre = inputNombre.value;
    const correo = inputCorreo.value;
    const telefono = inputTel.value;

    mensaje.classList.add("visible");
    mensajeNombre.textContent = `Gracias por registrarte ${nombre}`;
    mensajeCorreo.textContent = `Correo: ${correo}`;
    mensajeTelefono.textContent = `Telefono: ${telefono}`;


}