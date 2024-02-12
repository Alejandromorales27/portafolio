
const botonVoltear=document.getElementById("voltearPalabra")
const entradaTexto=document.getElementById("voltearTexto")

entradaTexto.addEventListener('click',()=>{
    entradaTexto.innerHTML=""
})



botonVoltear.addEventListener('click',voltearPalabra) 

function voltearPalabra(){

    let textoAVoltear=entradaTexto.value
    let nuevaPalabra=""

    for(let i=textoAVoltear.length-1;i>=0;i--){
        nuevaPalabra+=textoAVoltear[i]

    }

    insertarPalabra(nuevaPalabra)
}

function insertarPalabra(palabra){
    const palabraVolteada=document.getElementById("laPalabraVoleteada")
    let nuevoTexto=`<p>${palabra}</p>`
    palabraVolteada.innerHTML=nuevoTexto
}

