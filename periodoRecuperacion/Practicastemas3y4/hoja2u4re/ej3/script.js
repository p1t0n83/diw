window.addEventListener("load", function () {
  let aumenta = this.document.getElementById("aumenta");
  let disminuye = this.document.getElementById("disminuye");
  let contador = 0;
  let conteo = this.document.getElementById("contador");

  aumenta.addEventListener("click", function () {
    if (contador != 15) {
      contador++;
        conteo.textContent = contador;
    }
    if (contador == 10) {
      conteo.textContent = "Felicidades";
    }
  });

  disminuye.addEventListener("click", function () {
    if (contador > 0) {
      contador--;
       conteo.textContent = contador;
    }
    if (contador == 10) {
      conteo.textContent = "Felicidades";
    }
  });
});
