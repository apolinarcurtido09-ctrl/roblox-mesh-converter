const input = document.getElementById("meshInput");
const button = document.getElementById("readBtn");
const info = document.getElementById("info");

function leerFloat(bytes, offset) {
    const view = new DataView(bytes.buffer);
    return view.getFloat32(offset, true);
}

button.onclick = async () => {

    const file = input.files[0];

    if (!file) {
        info.textContent = "No seleccionaste ningún archivo.";
        return;
    }

    const buffer = await file.arrayBuffer();
    const bytes = new Uint8Array(buffer);

    let texto = "";

    for (let i = 28; i < 100; i += 4) {
        texto += "Offset " + i + " = " + leerFloat(bytes, i) + "\n";
    }

    info.textContent = texto;
};
