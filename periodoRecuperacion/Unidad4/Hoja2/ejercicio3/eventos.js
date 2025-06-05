document.addEventListener("DOMContentLoaded", () => {
  let contador = 0;
  const incrementaBtn = document.getElementById("incrementaBtn");
  const decrementaBtn = document.getElementById("decrementaBtn");

  let conteo = document.getElementById("conteo");
  incrementaBtn.addEventListener("click", () => {
    contador++;
    conteo.textContent = "Contao: " + contador;
    if (contador == 10) {
      conteo.textContent = "LLEGASTE A 10 VIVA PHP";
    }
  });
  
  decrementaBtn.addEventListener("click", () => {
    if (contador > 0) contador--;
    conteo.textContent = "Contao: " + contador;
    if (contador == 10) {
      conteo.textContent = "LLEGASTE A 10 VIVA PHP";
    }
  });
});
