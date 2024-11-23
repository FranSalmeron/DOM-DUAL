import listProduct from "./components/listProduct";


const productos = ["Laptop","Smartphone","Tablet"];


document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const listaProductos = listProduct(productos);
    
    app.appendChild(listaProductos);

});