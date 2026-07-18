alert("script.js cargado");

const input = document.getElementById("meshInput");
const button = document.getElementById("readBtn");
const info = document.getElementById("info");

button.addEventListener("click", async () => {

    alert("Botón pulsado");

    const file = input.files[0];

    if (!file) {
        info.textContent = "No seleccionaste ningún archivo.";
        return;
    }

    info.textContent =
`Archivo:
${file.name}

Tamaño:
${file.size} bytes`;
});
