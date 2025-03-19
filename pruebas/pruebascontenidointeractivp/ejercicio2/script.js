document.addEventListener("DOMContentLoaded", function() {
    let oculto = document.querySelector(".oculto");
    let boton = document.querySelector(".mas");
    let texto = document.querySelector(".texto");

    // Inicialmente oculto
    oculto.style.visibility = "hidden";
    boton.textContent = "Mostrar Más";

    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("mas")) {
            if (oculto.style.visibility === "hidden") {
                oculto.style.visibility = "visible";
                boton.textContent = "Mostrar Menos";
            } else {
                oculto.style.visibility = "hidden";
                boton.textContent = "Mostrar Más";
                texto.style.textAlign = "left";
            }
        } else if (event.target.classList.contains("izquierda")) {
            texto.style.textAlign = "left";
        } else if (event.target.classList.contains("centro")) {
            texto.style.textAlign = "center";
        } else if (event.target.classList.contains("justificado")) {
            texto.style.textAlign = "justify";
        }
    });
});
