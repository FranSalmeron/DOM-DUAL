// Autor: Francisco José Salmerón Puig

// Crear un formulario que permita validar el correo electronico si es email no es valido mostrara un mensaje de error dinamico debajo del texto

import divForm from "./components/divForm.js";

import formComponent from "./components/formComponent.js";

document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");
    // crear un contenedor para mi formulario
    const divFormulario = divForm();
    const formComponente = formComponent();

    // ------------- Ejercicio Contenedor Formulario test email ----------
    // app.appendChild(formComponente); // formComponent inyectado
    // app.appendChild(divFormulario); // divForm inyectado

    // ----------- Crear tabla dinamicamente ------------------
    //Dado un array de objetos con datos de usuarios nombre edad y email genera una tabla dinámicamente en la que cada fila 
    //corresponda un usuario. Añade funcionalidad para ordenar las filas por nombre o edad haciendo click en los encabezados de las columnas
    //2ºParte: utilizando la lista de usuarios añadir un input para que ha medida que busquemos filtre en tiempo real los usuarios con su nombre

    
});
