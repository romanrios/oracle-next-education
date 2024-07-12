function showResultEncrypt() {
  const outputSection = document.querySelector("#main__output");
  const textareaText = document.querySelector("#main__input__textarea").value;
  outputSection.innerHTML = `
      <p id="result__text" class="result__text">${encrypt(textareaText)}</p>
      <button class="result__button" onclick="copyToClipboard()">Copiar</button>
    `;
}

function showResultDecrypt() {
  const outputSection = document.querySelector("#main__output");
  const textareaText = document.querySelector("#main__input__textarea").value;
  outputSection.innerHTML = `
        <p id="result__text" class="result__text">${decrypt(textareaText)}</p>
        <button class="result__button" onclick="copyToClipboard()">Copiar</button>
      `;
}

function copyToClipboard() {
  const textToCopy = document.getElementById("result__text").textContent;
  navigator.clipboard.writeText(textToCopy);
  alert("Texto copiado al portapapeles");
}

function encrypt(text) {
  return text
    .toLowerCase()
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function decrypt(text) {
  return text
    .replace(/ufat/g, "u")
    .replace(/ober/g, "o")
    .replace(/ai/g, "a")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e");
}
