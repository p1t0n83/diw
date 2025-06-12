window.addEventListener("load", function () {
  const texto2 = this.document.getElementById("texto2");
  const botones = this.document.getElementById("botones");
  texto2.style.display = "none";
  botones.style.display = "none";
  const boton = this.document.getElementById("mostrar");

  boton.addEventListener("click", function (e) {
    e.preventDefault();
    if (boton.innerText == "Mostrar mas") {
      texto2.style.display = "inline";
      botones.style.display = "inline";
      boton.textContent = "Mostrar menos";
    } else {
      texto2.style.display = "none";
      botones.style.display = "none";
      boton.textContent = "Mostrar mas";
    }
  });

  const iz = this.document.getElementById("iz");
  const cen = this.document.getElementById("cen");
  const just = this.document.getElementById("justi");
  const textos = this.document.getElementById("textos");
  iz.addEventListener("click", function (e) {
    textos.style.textAlign="left";
  });
  cen.addEventListener("click", function (e) {
    textos.style.textAlign="center";
  });
  just.addEventListener("click", function (e) {
    textos.style.textAlign="justify";
  });
});
