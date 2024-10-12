const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonLargo = document.querySelector('.app__card-button--largo');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const imagen = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botones = document.querySelectorAll('.app__card-button');
const inputEnfoqueMusica = document.querySelector('#alternar-musica');
const botonIniciarPausar = document.querySelector('#start-pause');
const textoIniciarPausar = document.querySelector('#start-pause span');
const iconIniciarPausar = document.querySelector('#start-pause img');
const timerText = document.querySelector('#timer');


let tiempoTranscurridoEnSegundos = 1500;
let idIntervalo = null;

// AUDIO
const audioMusica = new Audio('./sonidos/luna-rise-part-one.mp3');
const audioBeep = new Audio('./sonidos/beep.mp3');
const audioPause = new Audio('./sonidos/pause.mp3');
const audioPlay = new Audio('./sonidos/play.wav');


botonEnfoque.addEventListener('click', () => {
    tiempoTranscurridoEnSegundos = 1500;
    cambiarContexto('enfoque');
});

botonCorto.addEventListener('click', () => {
    tiempoTranscurridoEnSegundos = 300;
    cambiarContexto('descanso-corto');
});

botonLargo.addEventListener('click', () => {
    tiempoTranscurridoEnSegundos = 900;
    cambiarContexto('descanso-largo');
});


function cambiarContexto(contexto) {
    mostrarTiempo();
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


audioMusica.loop = true;

inputEnfoqueMusica.addEventListener('change', () => {
    if (audioMusica.paused) {
        audioMusica.play();
    } else {
        audioMusica.pause();
    }
});

const cuentaRegresiva = () => {
    if (tiempoTranscurridoEnSegundos <= 0) {
        audioBeep.play();
        reiniciar();
        return;
    };
    tiempoTranscurridoEnSegundos -= 1;
    mostrarTiempo()
};

botonIniciarPausar.addEventListener('click', iniciarPausar);

function iniciarPausar() {
    if (idIntervalo) {
        // PAUSE
        audioPause.play();
        textoIniciarPausar.textContent = "Comenzar";
        iconIniciarPausar.setAttribute('src', './imagenes/play_arrow.png');
        reiniciar();
        return;
    }
    // PLAY
    idIntervalo = setInterval(cuentaRegresiva, 1000);
    audioPlay.play();
    textoIniciarPausar.textContent = "Pausar";
    iconIniciarPausar.setAttribute('src', './imagenes/pause.png');
}

function reiniciar() {
    clearInterval(idIntervalo);
    idIntervalo = null;
}

const mostrarTiempo = () => {
    const tiempo = new Date(tiempoTranscurridoEnSegundos * 1000);
    const tiempoFormateado = tiempo.toLocaleTimeString('es-AR', { minute: '2-digit', second: '2-digit' });
    timerText.textContent = tiempoFormateado;
};

mostrarTiempo();
