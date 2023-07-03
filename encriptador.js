
/* esta funcion se ocupo en su momento para que el input creciera de manera automatica al escribir
 */
/* let formulario= document.getElementById("formulario");
let textoEscrito=formulario.value;
console.log(textoEscrito)
let ancho=formulario.offsetWidth;
console.log(ancho)
let factor=10;
let calculaTamaño;
let nuevoAAncho=0;


    formulario.addEventListener("input",function(){
        if(nuevoAAncho<=800){
            let longitud=formulario.value.length
            nuevoAAncho=ancho+longitud*factor;
            formulario.style.width=calculaTamaño
            calculaTamaño=nuevoAAncho+"px";
            console.log(nuevoAAncho)
            console.log(calculaTamaño)
        }


        
    }) */

    let mensaje= document.getElementById("mensaje");
    console.log(mensaje)
    


    mensaje.addEventListener("contextmenu",function(e){
            mensaje.innerHTML = "";
    })
    mensaje.addEventListener("click",function(e){
        mensaje.innerHTML = "";
   
    });

    mensaje.addEventListener("keypress",function(e){
        mensaje.innerHTML = "";
   
    });


    let mensajeEncriptado=document.getElementById("mensajeEncriptado");
    let mensajeguardado="";

    function imagenSinTexto(){
        mensajeEncriptado.innerHTML=`
        <section class="sinTexto">
        <img class="imagenTexto" src="./img/image 1.png" alt="">
        <h1>Ningún mensaje fue encontrado</h1>
        <p>Ingresa el texto que desees encriptar o desencriptar.</p>
    </section>`

}

   
/*     en esta funcion se encripta el mensaje y se muestra en el cuadro encriptado*/    
    function leermensaje(){
        
        if(!(mensaje.value=="")){
            mensajeguardado=mensaje.value;/*  se creo una variable para guardar el mensaje original */
            mensajeAencriptar=(mensaje.value).split(""); /* esta parte de aqui es para generar un array a partir del mensaje a encriptar */
            mensajeAencriptar.sort(()=>0.5-Math.random()) /* Lo que hace el método sort() con la función ()=>0.5-Math.random() es comparar dos elementos del array y devolver un valor negativo, cero o positivo según el resultado de la resta. Si el resultado es negativo, significa que el primer elemento se ordena antes que el segundo. Si el resultado es positivo, significa que el primer elemento se ordena después que el segundo. Si el resultado es cero, significa que los elementos se mantienen en el mismo lugar. */
            mensajeAencriptar=mensajeAencriptar.join("") /* aqui es donde se une el arrat anterior */
            mensajeEncriptado.innerHTML=`${mensajeAencriptar}`; 
            mensaje.value = "";
        }else{
            imagenSinTexto()
        }
      
    };





/*esta funcion es para desencriptar el mensaje encriptado*/    
    function desencriptar(){
        console.log(mensajeguardado)
        mensaje.value=mensajeguardado
    }




    

     function evitar(e){
        e.preventDefault();
    } 

    


  

