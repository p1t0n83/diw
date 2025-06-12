window.addEventListener("load", function () {
  let mostrar = this.document.getElementById("mostrar");
 
  
  let secreto = this.document.getElementById("secreto");

  

  mostrar.addEventListener("click", function () {
   if(mostrar.innerText=="Ocultar"){
  mostrar.textContent="Mostrar";
  secreto.style.display="none";
   }else{
    mostrar.textContent="Ocultar";
   secreto.style.display="inline"; 
  }
  });
});
