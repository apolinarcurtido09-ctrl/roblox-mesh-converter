/*
======================================
 Roblox Mesh Studio
 Version: 0.1.3
 Estado: Estable

 Historial

 v0.1.0
 - Proyecto creado

 v0.1.1
 - Mejoras visuales

 v0.1.2
 - Preparado para futuras ventanas

 v0.1.3
 - Código reorganizado
======================================
*/

"use strict";

/*=========================
    CONFIGURACIÓN
=========================*/

const APP = {

    version: "0.1.3",

    nombre: "Roblox Mesh Studio"

};

/*=========================
    ELEMENTOS HTML
=========================*/

const meshInput = document.getElementById("meshInput");

const readBtn = document.getElementById("readBtn");

const info = document.getElementById("info");

/*=========================
    VARIABLES
=========================*/

let currentFile = null;

let currentBytes = null;

/*=========================
    FUNCIONES
=========================*/

function limpiar(){

    info.textContent = "Esperando archivo...";

}

function mostrarError(error){

    info.textContent =
`Ha ocurrido un error.

${error}`;

}

function mostrarInformacion(file, header){

    info.textContent =
`${APP.nombre}

Versión

${APP.version}

Archivo

${file.name}

Tamaño

${file.size} bytes

Cabecera

${header}`;

}

async function abrirArchivo(){

    const file = meshInput.files[0];

    if(!file){

        info.textContent = "Selecciona un archivo .mesh";

        return;

    }

    currentFile = file;

    const buffer = await file.arrayBuffer();

    currentBytes = new Uint8Array(buffer);

    const header =
        new TextDecoder().decode(
            currentBytes.slice(0,32)
        );

    mostrarInformacion(file, header);

}

/*=========================
    EVENTOS
=========================*/

readBtn.addEventListener("click", async ()=>{

    try{

        await abrirArchivo();

    }

    catch(error){

        mostrarError(error);

    }

});

/*=========================
    INICIO
=========================*/

limpiar();

console.log(APP.nombre + " " + APP.version + " iniciado.");
