const meshInput=document.getElementById("meshInput");

const readBtn=document.getElementById("readBtn");

const info=document.getElementById("info");

const APP_VERSION="0.1.0";

readBtn.addEventListener("click",async()=>{

const file=meshInput.files[0];

if(!file){

info.textContent="Selecciona un archivo .mesh";

return;

}

try{

const buffer=await file.arrayBuffer();

const bytes=new Uint8Array(buffer);

const header=new TextDecoder().decode(bytes.slice(0,32));

info.textContent=
`Roblox Mesh Studio

Version:

${APP_VERSION}

Archivo:

${file.name}

Tamaño:

${file.size} bytes

Cabecera:

${header}`;

}

catch(error){

info.textContent=

"Error al leer el archivo.\n\n"+error;

}

});
