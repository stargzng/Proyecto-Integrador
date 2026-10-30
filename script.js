const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");
const imagen = document.querySelector("#carruselImagenes img");


let indice = 0;
const imagenes = [
    "./img/MV.png",
    "./img/FC.png",
    "./img/VB.png",
    "./img/LN.png",
    "./img/SP.png",
]




function avanzar() {
    indice++

    if (indice >= imagenes.length) {
        indice = 0
    }

    imagen.src = imagenes[indice];
}


function retroceder() {
    indice--

    if (indice < 0) {
        indice = imagenes.length - 1;
    }

    imagen.src = imagenes[indice];
}


btnSiguiente.addEventListener("click", avanzar);
btnAnterior.addEventListener("click", retroceder);

