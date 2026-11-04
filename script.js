const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");
const imagen = document.querySelector("#carruselImagenes img");


let indice = 0;

const imagenes = [
    { src: "./img/MV.png", alt: "Max Verstappen" },
    { src: "./img/FC.png", alt: "Franco Colapinto" },
    { src: "./img/OP.png", alt: "Oscar Piastri" },
    { src: "./img/KA.png", alt: "Kimi Antonelli" },
    { src: "./img/LN.png", alt: "Lando Norris" },
    { src: "./img/GR.png", alt: "George Russell" },
    { src: "./img/AA.png", alt: "Alexander Albon" },
    { src: "./img/EO.png", alt: "Esteban Ocon" },
    { src: "./img/OB.png", alt: "Olliver Bearman" },
    { src: "./img/LL.png", alt: "Liam Lawson" },
    { src: "./img/LH.png", alt: "Lewis Hamilton" },
    { src: "./img/AL.png", alt: "Arvid Lindblad" },
    { src: "./img/NH.png", alt: "Nico Hülkenberg" },
    { src: "./img/VB.png", alt: "Valtteri Bottas" },
    { src: "./img/SP.png", alt: "Sergio Perez" },
    { src: "./img/PG.png", alt: "Pierre Gasly" },
    { src: "./img/GB.png", alt: "Gabriel Bortoleto" },
    { src: "./img/IH.png", alt: "Isaack Hadjar" },
    { src: "./img/LC.png", alt: "Lance Stroll" },
    { src: "./img/CS.png", alt: "Carlos Sainz" },
    { src: "./img/FA.png", alt: "Fernando Alonso" },
    { src: "./img/CL.png", alt: "Charles Leclerc" },
]


btnSiguiente.addEventListener("click", avanzar);
btnAnterior.addEventListener("click", retroceder);


function avanzar() {
    indice++

    if (indice >= imagenes.length) {
        indice = 0
    }

    imagen.src = imagenes[indice].src;
    imagen.alt = imagenes[indice].alt;
}


function retroceder() {
    indice--

    if (indice < 0) {
        indice = imagenes.length - 1;
    }

    imagen.src = imagenes[indice].src;
    imagen.alt = imagenes[indice].alt;

}






