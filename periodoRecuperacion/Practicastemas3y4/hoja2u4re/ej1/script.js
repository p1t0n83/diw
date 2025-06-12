window.addEventListener("load", function () {
  let contador = 0;
  let mensaje = this.document.getElementById("mensaje");
  let boton = this.document.getElementById("boton");
  boton.addEventListener("click", function (e) {
    e.preventDefault();
   contador++; 
   mensaje.textContent="Haz click";
   if(contador==5){
       mensaje.textContent="Vas en racha";
   }
   if(contador==10){
    mensaje.textContent="Eres un campeon";
   }
   if(contador==15){
    contador=0;
    mensaje.textContent="Increible";
   }
});
});
