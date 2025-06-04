document.addEventListener("DOMContentLoaded",()=>{
      const desplegable=document.getElementById("desplegable");
      const opciones=document.getElementById("opciones");
      opciones.style.display="none";
      desplegable.addEventListener("click",()=>{
          opciones.style.display="inline";
      });

      opciones.addEventListener("click",(e)=>{
       let opcion=e.target.textContent;
        opciones.style.display="inline";
        desplegable.textContent="Has elegido: "+opcion;
          opciones.style.display="none";
      })
})