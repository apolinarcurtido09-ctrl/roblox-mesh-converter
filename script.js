const input = document.getElementById("meshInput");
const button = document.getElementById("readBtn");
const info = document.getElementById("info");

function leerFloat(bytes, offset){

    const view = new DataView(bytes.buffer);

    return {
        little: view.getFloat32(offset, true),
        big: view.getFloat32(offset, false)
    };

}

button.onclick = async ()=>{

    const file = input.files[0];

    if(!file){
        info.textContent="No seleccionaste ningún archivo.";
        return;
    }

    const buffer = await file.arrayBuffer();

    const bytes = new Uint8Array(buffer);

    let texto="";

    for(let i=0;i<128;i+=4){

        const f=leerFloat(bytes,i);

        texto +=
`Offset ${i}

Little: ${f.little}

Big: ${f.big}

----------------

`;

    }

    info.textContent=texto;

};
