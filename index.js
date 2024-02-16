// juego voltear palabra
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

//videojuego piedra papel tijera

let tiradaJudador;
let tiradaComputador;
let puntosJugador=0;
let puntosPc=0
const puntosJ=document.getElementById('puntosJugador')
const batalla=document.getElementById('batalla')
const puntosIa=document.getElementById('puntosIA')
const piedra=document.getElementById('piedra')
const papel=document.getElementById('papel')
const tijeras= document.getElementById('tijeras')
const tiradaJ=document.getElementById('tirada-jugador')
const tiradaPc=document.getElementById('tirada-pc')
const botonReinicio=document.getElementById('button-reinicio')

piedra.addEventListener('click',escucharJugada)

tijeras.addEventListener('click',escucharJugada)

papel.addEventListener('click',escucharJugada)

botonReinicio.addEventListener('click',reinicio)

function escucharJugada(e){
    tiradaJudador=e.target.innerText
    tiradaJ.innerHTML=tiradaJudador
    tiradaComputadora()
    comienzaJuego()
}

function aleatorio(max,min){
    return Math.floor(Math.random()*(max-min+1)+min)

}

function tiradaComputadora(){
    let jugadaAleatoria=aleatorio(3,1)
    if(jugadaAleatoria==1){
        tiradaComputador='🪨'
    }else if(jugadaAleatoria==2){
        tiradaComputador='🧻'
    }else{
        tiradaComputador='✂️'
    }

    tiradaPc.innerHTML=tiradaComputador

}

function comienzaJuego(){
    if(tiradaJudador=='🪨' && tiradaComputador=='✂️'){
        puntosJugador++
        batalla.innerHTML='GANASTE'
    }else if(tiradaJudador=='🧻' && tiradaComputador=='🪨'){
        puntosJugador++
        batalla.innerHTML='GANASTE'
    }else if(tiradaJudador=='✂️' && tiradaComputador=='🧻'){
        puntosJugador++
        batalla.innerHTML='GANASTE'
    }else if(tiradaJudador==tiradaComputador){
        batalla.innerHTML='EMPATE'
    }else{
        puntosPc++
        batalla.innerHTML='PERDISTE'
    }
    puntos(puntosJugador,puntosPc)
    return batalla.innerHTML
}

function puntos(puntosJugador,puntosPc){
    puntosJ.innerHTML=puntosJugador
    puntosIa.innerHTML=puntosPc
}

function reinicio(){
    tiradaJ.innerHTML=""
    tiradaPc.innerHTML=""
    batalla.innerHTML=""
    puntosJugador=0;
    puntosPc=0
    puntos(puntosJugador,puntosPc)

}