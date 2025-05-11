const input = document.querySelector("#input");
const button = document.querySelector("button");
const output = document.querySelector("#output");
const radioButtons = document.querySelector("#radioButtons");
const codeTitle = document.querySelector("#code-title");
const code = document.querySelector("#code");
const chal2 = document.querySelector("#chal-2");
const chal3 = document.querySelector("#chal-3");
const rules = document.querySelector("#rules");
const ruleLine = document.querySelector("#ruleLine");
const hintLine = document.querySelector("#hint");

const flag = "FLAG{XSS_is_awesome}";

function xssChallenge() {
  code.textContent = "";
  let inputV = input.value.trim();

  if (chal2.checked) {
    inputV = inputV.replace(/["<>]/g, "");
    if (inputV === "javascript:alert(flag)") {
      alert(flag); // Correct input for challenge 2 reveals the flag
    } else {
      codeOutput(`<a href="${inputV}">Click here</a>`);
      displayHint("Try using `javascript:` for a surprise!");
    }
  }
  else if (chal3.checked) {
    inputV = inputV.replace(/[<>]/g, "");
    codeOutput(`<img src="${inputV}">`);
    displayHint("What do broken images do? They whisper secrets using onerror.");
  }
}

function codeOutput(outputCode) {
  const codeContainer = document.getElementById("code-container");
  output.innerHTML = outputCode;
  code.textContent = outputCode;
  codeContainer.style.display = "none";

  output.onclick = () => {
    codeContainer.style.display = "block";
  };
}

function codeSelection() {
  code.textContent = "";
  output.textContent = "";
  hintLine.textContent = "";

  if (chal2.checked) {
    codeSnippet(`<a href="[input]">Click here</a>`);
    rulesDisplay('Filters: Removes <, >, and "');
    displayHint('If <script> is banned, invent your own door with javascript:!');
  } else if (chal3.checked) {
    codeSnippet(`<img src="[input]">`);
    rulesDisplay("Filters: Removes < and >");
    displayHint('What do broken images do? They whisper secrets using onerror.');
  }
}

function codeSnippet(codeSnip) {
  codeTitle.textContent = "Code Preview:";
  code.textContent = codeSnip;
}

function rulesDisplay(rule) {
  rules.textContent = rule;
}

function displayHint(hint) {
  const hintElement = document.getElementById("hint");
  hintElement.textContent = `Hint: ${hint}`;
}

button.addEventListener("click", xssChallenge);
radioButtons.addEventListener("click", codeSelection);
