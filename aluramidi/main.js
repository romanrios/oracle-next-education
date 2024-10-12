// Selecciona todos los botones
const teclas = document.querySelectorAll(".tecla");

// Mapeo de clases de botones a los IDs de audio
const sonidos = {
    tecla_pom: "#sonido_tecla_pom",
    tecla_clap: "#sonido_tecla_clap",
    tecla_tim: "#sonido_tecla_tim",
    tecla_puff: "#sonido_tecla_puff",
    tecla_splash: "#sonido_tecla_splash",
    tecla_toim: "#sonido_tecla_toim",
    tecla_psh: "#sonido_tecla_psh",
    tecla_tic: "#sonido_tecla_tic",
    tecla_tom: "#sonido_tecla_tom"
};

// Función para reproducir sonido
function playSound(soundId) {
    const audio = document.querySelector(soundId);
    audio.currentTime = 0; // Reinicia el tiempo de reproducción
    audio.play();
}

// Añade el event listener a cada botón
teclas.forEach(tecla => {
    tecla.onclick = () => {
        const claseTecla = tecla.classList[1]; // Obtiene la clase del botón (ej. "tecla_pom")
        playSound(sonidos[claseTecla]); // Reproduce el sonido correspondiente
    };

    tecla.onkeydown = (e) => {
        if(e.code == 'Enter' || e.code == 'Space')
        tecla.classList.add('activa');
    };  


    tecla.onkeyup = () => tecla.classList.remove('activa');
    tecla.onblur = () => tecla.classList.remove('activa');
});
