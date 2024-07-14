const outputSection = document.querySelector("#main__output");
const textareaText = document.querySelector("#main__input__textarea");
const headerLogo = document.querySelector("#header__logo");

headerLogo.addEventListener("click", function () {
  defaultOutput();
  textareaText.value = "";
});

function showResult(encryptOrDecrypt, message) {
  if (textareaText.value) {
    outputSection.innerHTML = `
      <textarea id="result__text" class="result__text">${encryptOrDecrypt(
        textareaText.value
      )}</textarea>
      <button class="result__button" onclick="copyToClipboard()">Copiar</button>
    `;
    swalFire(message);
  } else {
    defaultOutput();
  }
  textareaText.value = "";
}

function defaultOutput() {
  outputSection.innerHTML = `
  <img
       class="main__output__image"
       src="./images/searching-character.svg"
       alt="Searching character"
     />
     <div class="main__output__text-container">
       <p class="main__output__message">Ningún mensaje fue encontrado</p>
       <p class="main__output__info">
         Ingresa el texto que desees encriptar o desencriptar
       </p>
     </div>
 `;
}

function copyToClipboard() {
  const textToCopy = document.getElementById("result__text").textContent;
  navigator.clipboard.writeText(textToCopy);
  swalFire("Texto copiado al portapapeles");
}

const decryptionDict = Object.fromEntries(
  Object.entries(encryptionDict).map(([key, value]) => [value, key])
);

function encrypt(text) {
  return text
    .split("")
    .map((char) => encryptionDict[char] || char)
    .join("");
}

function decrypt(text) {
  const pattern = new RegExp(Object.keys(decryptionDict).join("|"), "g");
  return text.replace(pattern, (matched) => decryptionDict[matched]);
}

function sanitizeInput(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z\s]/g, "");
}

textareaText.addEventListener("input", () => {
  const sanitizedText = sanitizeInput(textareaText.value);
  textareaText.value = sanitizedText;
});

function swalFire(message) {
  Swal.fire({
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
}
