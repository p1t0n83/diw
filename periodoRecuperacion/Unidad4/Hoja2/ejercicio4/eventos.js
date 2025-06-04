document.addEventListener("DOMContentLoaded", () => {
  
  const estadoBtn= document.getElementById("accionBtn");
  let secretito= document.getElementById("ultrasecret");
  estadoBtn.addEventListener("click", () => {
  if(estadoBtn.textContent=="Ver"){
     estadoBtn.textContent="Ocultar";
     secretito.style.display="inline";
  }else{
    estadoBtn.textContent="Ver";
     secretito.style.display="none";
  }
  });
});
