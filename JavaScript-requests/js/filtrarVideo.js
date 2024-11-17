import { conexionAPI } from "./conexionAPI.js";
import { crearCard } from "./listarVideos.js";

async function filtrarVideo(evento){
    evento.preventDefault();

    const datosBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conexionAPI.buscarVideos(datosBusqueda);

    const lista = document.querySelector("[data-lista]")

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    };

    busqueda.forEach(video => {lista.appendChild(crearCard(video.titulo,video.descripcion,video.url,video.imagem))
        
    });

};

const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click",evento=>filtrarVideo(evento))