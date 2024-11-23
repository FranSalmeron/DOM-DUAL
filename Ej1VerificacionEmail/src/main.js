// Autor: Francisco José Salmerón Puig

// Crear un formulario que permita validar el correo electronico si es email no es valido mostrara un mensaje de error dinamico debajo del texto
import emailCheck from "./components/emailCheck.js";

document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");
    // crear un contenedor para mi formulario
    const divEmail = emailCheck();

    app.appendChild(divEmail);
});

