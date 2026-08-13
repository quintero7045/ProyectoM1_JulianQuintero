const paletteElement = document.querySelector("#palette");
const paletteSizeElement = document.querySelector("#palette-size");
const generateButton = document.querySelector("#generate-button");
const paletteStatus = document.querySelector("#palette-status");
const toastElement = document.querySelector("#toast");

let toastTimeout;

function generateHexColor() {
  const characters = "0123456789ABCDEF";
  let hex = "#";

  for (let i = 0; i < 6; i += 1) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    hex += characters[randomIndex];
  }

  return hex;
}

function showToast(message) {
  clearTimeout(toastTimeout);

  toastElement.textContent = message;
  toastElement.classList.add("is-visible");

  toastTimeout = setTimeout(() => {
    toastElement.classList.remove("is-visible");
  }, 2200);
}

function renderPalette(size) {
  paletteElement.innerHTML = "";

  const colors = [];

  for (let i = 0; i < size; i += 1) {
    colors.push(generateHexColor());
  }

  colors.forEach((color, index) => {
    const card = document.createElement("article");
    card.className = "color-card";
    card.style.backgroundColor = color;

    const info = document.createElement("div");
    info.className = "color-info";

    const name = document.createElement("p");
    name.className = "color-name";
    name.textContent = `Color ${index + 1}`;

    const code = document.createElement("p");
    code.className = "color-code";
    code.textContent = color;

    info.append(name, code);
    card.appendChild(info);
    paletteElement.appendChild(card);
  });

  paletteStatus.textContent = `Paleta generada con ${size} colores.`;
  showToast(`¡Paleta de ${size} colores generada!`);
}

generateButton.addEventListener("click", () => {
  const size = Number(paletteSizeElement.value);
  renderPalette(size);
});

renderPalette(Number(paletteSizeElement.value));