const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonLargo = document.querySelector('.app__card-button--largo');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const imagen = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botones = document.querySelectorAll('.app__card-button');
const inputEnfoqueMusica = document.querySelector('#alternar-musica');
const musica = new Audio('./sonidos/luna-rise-part-one.mp3');



botonEnfoque.addEventListener('click', () => {
    cambiarContexto('enfoque');
});

botonCorto.addEventListener('click', () => {
    cambiarContexto('descanso-corto');
});

botonLargo.addEventListener('click', () => {
    cambiarContexto('descanso-largo');
});


function cambiarContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    imagen.setAttribute('src', `./imagenes/${contexto}.png`);

    switch (contexto) {
        case 'enfoque':
            titulo.innerHTML = `
             Optimiza tu productividad,<br>
             <strong class="app__title-strong">sumérgete en lo que importa.</strong>
            `;
            break;
        case 'descanso-corto':
            titulo.innerHTML = `
             Relájate un momento,<br>
             <strong class="app__title-strong">recarga energías rápidamente.</strong>
            `;
            break;
        case 'descanso-largo':
            titulo.innerHTML = `
             Tómate un respiro largo,<br>
             <strong class="app__title-strong">desconecta y vuelve con todo.</strong>
            `;
            break;
    };
};

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        botones.forEach(b => b.classList.remove('active'));
        boton.classList.add('active');
    })
});


musica.loop = true;

inputEnfoqueMusica.addEventListener('change', () =>{
if(musica.paused){
    musica.play();
} else {
    musica.pause();
}
});