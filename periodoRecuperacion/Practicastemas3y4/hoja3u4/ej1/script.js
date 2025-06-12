window.addEventListener("load",function(){
    const boton=document.getElementById("boton");

    boton.addEventListener("click",function(e){
    e.preventDefault();
   if(document.body.style.backgroundColor=="white"){
    document.body.style.backgroundColor="red";
   }else{
    document.body.style.backgroundColor="white";
   }
    })

    
})