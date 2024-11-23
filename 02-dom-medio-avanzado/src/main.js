// Autor: Francisco José Salmerón Puig

// Crear un formulario que permita validar el correo electronico si es email no es valido mostrara un mensaje de error dinamico debajo del texto

import divForm from "./components/divForm.js";
import dynamicTable from "./components/dynamicTable.js";
import formComponent from "./components/formComponent.js";
import singUp from "./components/sing-up.js";
import ulList from "./components/list.js";
import modalDelete from "./components/modalDelete.js";

const data = 
[
  { nombre: "Juan", edad:25, email: "juan@gmail.com" },
  { nombre: "Ana", edad: 30, email: "ana@gmail.com" },
];
  
const headers = 
[
    "Nombre","Edad","Email"
];

document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");
    // crear un contenedor para mi formulario
    const divFormulario = divForm();
    const formComponente = formComponent();
    const singUP = singUp();
    const table = dynamicTable(data,headers);
    const ulLista = ulList();
    const modal = modalDelete();
    // ------------- Ejercicio Contenedor Formulario test email ----------
    // app.appendChild(formComponente); // formComponent inyectado
    // app.appendChild(divFormulario); // divForm inyectado

    // ----------- Crear tabla dinamicamente ------------------
    //Dado un array de objetos con datos de usuarios nombre edad y email genera una tabla dinámicamente en la que cada fila 
    //corresponda un usuario. PENDIENTE IMPORTANTE Añade funcionalidad para ordenar las filas por nombre o edad haciendo click en los encabezados de las columnas
    //PENDIENTE IMPORTANTE 2ºParte: utilizando la lista de usuarios añadir un input para que ha medida que busquemos filtre en tiempo real los usuarios con su nombre
    app.appendChild(modal);
    //app.appendChild(singUP);
    app.appendChild(ulLista);
    //app.appendChild(table);

      // Configurar eventos después de que los componentes se hayan añadido al DOM
      setupEventListeners();
});

function setupEventListeners() {
    const list = document.getElementById("list");
    const modal = document.getElementById("confirmationModal");
    const confirmDeleteBtn = document.getElementById("confirmDelete");
    const cancelDeleteBtn = document.getElementById("cancelDelete");

    let itemToDelete = null;

    function showModal(item) {
        itemToDelete = item;
        modal.style.display = "flex";  // Mostrar el modal
    }

    function closeModal() {
        modal.style.display = "none"; // Ocultar el modal
    }

    // Evento para eliminar el elemento si se confirma
    confirmDeleteBtn.addEventListener("click", () => {
        if (itemToDelete) {
            itemToDelete.remove();  // Eliminar el elemento
            closeModal();  // Cerrar el modal
        }
    });

    // Evento para cerrar el modal si se cancela
    cancelDeleteBtn.addEventListener("click", closeModal);

    // Evento para mostrar el modal cuando se hace clic en el botón "Eliminar"
    list.addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains("delete-btn")) {
            const item = event.target.parentElement; // Obtener el `li` que contiene el botón
            showModal(item);
        }
    });
}
