function buscadorProductos(event, lista, mensaje) {
  let valorBuscar = event.target.value.toLowerCase();
  let encontrados = 0;

  for (let producto of lista.children) {
    let valorProducto = producto.dataset.producto;

    if (!valorProducto.includes(valorBuscar)) {
      producto.style.display = "none";
    } else {
      producto.style.display = "block";
      encontrados++;
    }
  }

  if (encontrados == 0) {
    mensaje.textContent = "No existe ningun producto";
    mensaje.style.display = "inline";
  } else {
    mensaje.textContent = "";
    mensaje.style.display = "none";
  }
}


function importe(cantidad, precio) {
    const mensajeTotal = document.getElementById("total");
    total+=(cantidad*precio);
      mensajeTotal.textContent="Cantidad: "+total;
}


function sumarProductos(event) {
  let tarjeta = event.target;
  let precio = tarjeta.dataset.precio;
  switch (tarjeta.dataset.boton) {
    case "btnCepillo": {
      let cantidad = document.getElementById("cantidadCepillo").value;
      importe(cantidad, precio);
      break;
    }
    case "btnBolsa": {
      let cantidad = document.getElementById("cantidadBolsa").value;
      importe(cantidad, precio);
        break;
    }
    case "btnJabon": {
      let cantidad = document.getElementById("cantidadJabon").value;
      importe(cantidad, precio);
        break;
    }
  }
}
 let total=0;
window.addEventListener("DOMContentLoaded", function () {
 
  const lista = this.document.getElementById("lista");
  const mensaje = this.document.getElementById("mensaje");
  const buscadorInput = this.document.getElementById("buscador");
  buscadorInput.addEventListener("input", function (event) {
    buscadorProductos(event, lista, mensaje);
  });

  lista.addEventListener("click", function (event) {
    sumarProductos(event);
  });
});
