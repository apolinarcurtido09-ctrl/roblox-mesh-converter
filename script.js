const input = document.getElementById("meshInput");
const button = document.getElementById("readBtn");
const info = document.getElementById("info");

button.onclick = async ()=>{

const file = input.files[0];

if(!file){

alert("Selecciona un archivo.");

return;

}

const buffer = await file.arrayBuffer();

const bytes = new Uint8Array(buffer);

// Intentamos leer los primeros 32 bytes como texto

const header = new TextDecoder().decode(
bytes.slice(0,32)
);

info.innerHTML=
`
Archivo:

${file.name}

Tamaño:

${file.size} bytes

Cabecera:

${header}
`;

};
