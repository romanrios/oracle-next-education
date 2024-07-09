let numeroMaximoPosible = 10;
let numeroSecreto = Math.ceil(Math.random() * numeroMaximoPosible);
let numeroUsuario;
let intentos = 0;
let maximosIntentos = 5;

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(
    prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`)
  );
  intentos++;
  if (numeroUsuario == numeroSecreto) {
    alert(
      `Acertaste, el número es ${numeroUsuario}. Lo hiciste en ${intentos} ${
        intentos == 1 ? "intento" : "intentos"
      }.`
    );
    break;
  } else {
    if (numeroSecreto > numeroUsuario) {
      alert("No acertaste, el número secreto es mayor.");
    } else {
      alert("No acertaste, el número secreto es menor.");
    }
  }
  if (intentos >= maximosIntentos) {
    alert(`Llegaste al máximo de ${maximosIntentos} intentos.`);
    break;
  }
}
