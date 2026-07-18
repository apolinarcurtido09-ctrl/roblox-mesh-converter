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

    let texto = "";

for(let i = 0; i < 256; i += 4){

    let valor = leerFloat(bytes, i);

    texto +=
        "Offset "
        + i.toString().padStart(3," ")
        + " = "
        + valor
        + "\n";

}

info.textContent = texto;
