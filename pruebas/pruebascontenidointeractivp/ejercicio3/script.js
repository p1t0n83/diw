document.addEventListener("DOMContentLoaded", function() {
    let nombre = document.querySelector("#nombre");
    let contrasena = document.querySelector("#contrasena");
    let edad = document.querySelector("#edad");
    let email = document.querySelector("#email");
    let telefono = document.querySelector("#telefono");
    let enviar = document.querySelector("#enviar");
    let spanNombre=document.querySelector("#error-nombre");
    let spanContrasena=document.querySelector("#error-contrasena");
    let spanEdad=document.querySelector("#error-edad");
    let spanEmail=document.querySelector("#error-email");
    let spanTelefono=document.querySelector("#error-telefono");
    function addFocusAndBlurEvents(element) {
        element.addEventListener("focus", function() {
            element.style.backgroundColor = "lightyellow";
        });
        element.addEventListener("blur", function() {
            element.style.backgroundColor = "";
        });
    }

    addFocusAndBlurEvents(nombre);
    addFocusAndBlurEvents(contrasena);
    addFocusAndBlurEvents(edad);
    addFocusAndBlurEvents(email);
    addFocusAndBlurEvents(telefono);
      enviar.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

        if (nombre.value === "") {
            nombre.style.border = "1px solid red";
            spanNombre.textContent="El nombre no puede estar vacío";
        }  if (contrasena.value === "") {
            contrasena.style.border = "1px solid red";
            spanContrasena.textContent="La contraseña no puede estar vacío";
        }  if (edad.value === "") {
            edad.style.border = "1px solid red";
            spanEdad.textContent="La edad no puede estar vacío";
        }if (email.value === "") {
            email.style.border = "1px solid red";
            spanEmail.textContent="El email no puede estar vacío";
        } if (telefono.value === "") {
            telefono.style.border = "1px solid red";   
           spanTelefono.textContent="El telefono no puede estar vacío";
        }
    });
});