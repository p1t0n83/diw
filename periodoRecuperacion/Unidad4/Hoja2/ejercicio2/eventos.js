document.addEventListener("DOMContentLoaded",()=>{
      const desplegable=document.getElementById("desplegable");
      const opciones=document.getElementById("opciones");
      const resultado=document.getElementById("resultado");
      opciones.style.display="none";
      desplegable.addEventListener("click",()=>{
          opciones.style.display="inline";
      });

      opciones.addEventListener("click",(e)=>{
       let opcion=e.target.textContent;
        opciones.style.display="inline";
        resultado.textContent=opcion;
          opciones.style.display="none";
      })
})