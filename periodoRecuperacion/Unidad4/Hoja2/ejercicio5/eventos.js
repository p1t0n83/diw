document.addEventListener("DOMContentLoaded", () => {
  const enviarBtn = document.getElementById("enviarBtn");
  const span = document.getElementById("span");
  enviarBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    if (nombre.length < 5) {
      span.style.color = "red";
      span.textContent ="Brooooo ponle mas de 5 caracteres o es que no sabes leer? Fijo que te peg..";
    } else if (!nombre.match(/^[a-zA-Z0-9]+$/)) {
      span.style.color = "red";
      span.textContent ="Mano, mano, mano...esto contiene algo mas que letras y numeros";
    } else {
      span.style.color = "green";
      span.textContent = "Muy bien lelin, sumaste 2+2 ";
    }
  });
});
