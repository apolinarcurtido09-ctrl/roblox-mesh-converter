const input = document.getElementById("meshInput");
const button = document.getElementById("readBtn");
const info = document.getElementById("info");

button.onclick = async () => {

    const file = input.files[0];

    if (!file) {
        alert("Selecciona un archivo.");
        return;
    }

    const buffer = await file.arrayBuffer();

    const bytes = new Uint8Array(buffer);

    const header = new TextDecoder().decode(bytes.slice(0, 32));

    let hex = "";

    const mostrar = Math.min(256, bytes.length);

    for(let i=0;i<mostrar;i++){

        if(i%16===0){

            hex += "\n"+i.toString(16).padStart(4,"0")+": ";

        }

        hex += bytes[i].toString(16).padStart(2,"0")+" ";

    }

    info.textContent =
`Archivo: ${file.name}

Tamaño: ${file.size} bytes

Cabecera:

${header}

Primeros ${mostrar} bytes:

${hex}`;
}
