const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");
const imagen = document.querySelector("#carruselImagenes img");


let indice = 0;
const imagenes = [
    "./img/MV.png",
    "./img/FC.png",
    "./img/OP.png",
    "./img/KA.png",
    "./img/LN.png",
    "./img/GR.png",
    "./img/AA.png",
    "./img/EO.png",
    "./img/OB.png",
    "./img/LL.png",
    "./img/LH.png",
    "./img/AL.png",
    "./img/NH.png",
    "./img/VB.png",
    "./img/SP.png",
    "./img/PG.png",
    "./img/GB.png",
    "./img/IH.png",
    "./img/LC.png",
    "./img/CS.png",
    "./img/FA.png",
    "./img/CL.png",
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

