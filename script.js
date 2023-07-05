const textInput = document.getElementById("textInput");
const outputDiv = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");

textInput.addEventListener("input", updateOutput);

copyBtn.addEventListener("click", copyText);

function updateOutput() {
  const inputText = textInput.value;
  const replacedText = inputText.replace(/ /g, " \uD83E\uDD38 ");
  outputDiv.innerText = replacedText;
}

function copyText() {
  const range = document.createRange();
  range.selectNode(outputDiv);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Text copied to clipboard!");
}
