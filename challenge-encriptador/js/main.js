function showResultEncrypt() {
  const outputSection = document.querySelector("#main__output");
  const textareaText = document.querySelector("#main__input__textarea").value;
  outputSection.innerHTML = `
      <p class="result">${textareaText}</p>
      <button onclick="copyToClipboard('${textareaText}')">Copiar</button>
    `;
}

function showResultDecrypt(result) {
  const outputSection = document.querySelector("#main__output");
  outputSection.innerHTML = `
        <p class="result">${result}</p>
        <button onclick="copyToClipboard('${result}')">Copiar</button>
      `;
}

function copyToClipboard(text) {
  alert(text);
}
