document.addEventListener("DOMContentLoaded",()=>{
       let contador=0;
       const boton=document.getElementById("contadorBtn");
       let parrafo=document.getElementById("contador");
       
       boton.addEventListener("click",()=>{
           contador++;
            parrafo.textContent = "Conteo: " + contador;
       });
     
})