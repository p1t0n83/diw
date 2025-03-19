document.addEventListener("DOMContentLoaded", function() {
    let body = document.body; // Obtiene el body

    let coloresFondo = ["orange", "red", "blue", "green", "yellow"];
    let colores = ["white", "black", "white", "black", "white"];
    
    let i = 0;
    body.style.backgroundColor = coloresFondo[i];
    body.style.color = colores[i];

    body.addEventListener("click", function() {
        i = (i + 1) % coloresFondo.length; // Avanza y reinicia automáticamente
        body.style.backgroundColor = coloresFondo[i];
        body.style.color = colores[i];

        console.log(`Color cambiado a: ${coloresFondo[i]}, Texto: ${colores[i]}`); // Depuración
    });
});
