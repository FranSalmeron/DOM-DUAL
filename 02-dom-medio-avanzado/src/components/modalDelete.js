
export default function modalDelete () {
    const modal = document.createElement("div");
    modal.id = "confirmationModal";
    modal.className = "modal";
    
    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    
    const message = document.createElement("p");
    message.textContent = "¿Estás seguro de que quieres eliminar este elemento?";
    
    const confirmButton = document.createElement("button");
    confirmButton.id = "confirmDelete";
    confirmButton.textContent = "Sí";
    
    const cancelButton = document.createElement("button");
    cancelButton.id = "cancelDelete";
    cancelButton.textContent = "No";
    
    modalContent.appendChild(message);
    modalContent.appendChild(confirmButton);
    modalContent.appendChild(cancelButton);
    
    modal.appendChild(modalContent);
    
    return modal;
}