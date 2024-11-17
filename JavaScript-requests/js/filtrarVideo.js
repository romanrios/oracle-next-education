import { conexionAPI } from "./conexionAPI.js";
import { crearCard } from "./mostrarVideos.js";

async function filtrarVideo(evento) {
    evento.preventDefault();

    const datosBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conexionAPI.buscarVideos(datosBusqueda);

    const lista = document.querySelector("[data-lista]")

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    };

    busqueda.forEach(video => {
        lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagem))
    });

    if (busqueda.length == 0) {
        lista.innerHTML = `<h2 class="mensaje__titulo">No fueron encontrados elementos para ${datosBusqueda} :( </h2>`
    }

};


const inputEle = document.querySelector('#buscar');
inputEle.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        filtrarVideo(event);
    }
});


const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click", evento => filtrarVideo(evento))