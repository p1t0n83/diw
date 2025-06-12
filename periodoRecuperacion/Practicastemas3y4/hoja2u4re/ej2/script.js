window.addEventListener("load", function () {
  let boton=this.document.getElementById("boton");
  let opciones=this.document.getElementById("opciones");
  opciones.style.display="none";
  boton.addEventListener("click",function(e){
         e.preventDefault();
         opciones.style.display="inline";
  });

  opciones.addEventListener("click",function(e){
    e.preventDefault();
    boton.textContent=e.target.textContent;
    opciones.style.display="none";
  })
});
