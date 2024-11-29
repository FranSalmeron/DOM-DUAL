// se pretende realizar una aplicacion que ejemplifique un carrito de la compra de la compra disponemos de las siguientes opciones:
// a) Agregar productos(Nombre cantidad precio),
// b) Editar protductos (Editas la cantidad)
// c) Eliminar productos
// d) Actualizar el total del carrito de forma dinammica
// e) usar clases
// f) Usar funciones constructoras/funciones
// g) Partimos de un div llamado app y  todo se genera dinamicamente
// Ampliacion: guardaremos en el local storage nuestro carrito de la compra

// crear instancias carrito // cargar_carrito_localStorage

//principio formulario para añadir productoss
//luego listado de productos
//al fondo el total 
// todo en el app
import Carrito from "./components/Carrito";
import { Producto } from "./components/Producto";
const carrito = new Carrito();


// crear h1 -- carrito <--- create Element 
// resto con INNERHTML
// crear un contenedor <form></form>
// crear imputs Nombre, cantidad, precio
// crear boton de añadir al carrito

// declaracion de funciones
const renderListaCarrito = () => {
    // capturamos el ul
    const lista = document.getElementById("lista-productos");
    const totalCarrito = document.getElementById("total-carrito");
    
};

const agregarProductoHandler = (event) => {
    // no recargar página
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const cantidad = Number(document.getElementById("cantidad").value);
    const precio = Number(document.getElementById("precio").value.trim());
    if(nombre && cantidad >= 0 && precio >= 0){
        carrito.agregarProducto(nombre,precio,cantidad);
        // PINTAR EL PRODUCTO EN EL <UL>
        renderListaCarrito()
        console.log(carrito);
    } else {
        alert("Error al introducir los valores")
    }
    event.target.reset();
    
};

//añadir DIV para colocar los productos de mi 
function renderCarrito() {
    // selecciono el APP.
    const app = document.getElementById("app");

    const tituloH1 = document.createElement("h1");
    tituloH1.innerText = "Carrito Productos";
    app.appendChild(tituloH1);

    app.innerHTML += `
    <form id="form-producto">
    <input type="text" id="nombre" placeholder="Nombre del producto" required/><br>
    <input type="number" id="cantidad" placeholder="Cantidad del producto" required/><br>
    <input type="number" id="precio" placeholder="Precio del producto" required/><br>
    <button type="submit">Agregar al carrito</button>
    </form>
    <div id="container-productos">
        <ul id="lista-prodcutos"></ul>
    </div>
    <footer>
        <p> Total del carrito: <strong id="total-carrito">0</strong> </p>
    </footer>
    `;
    document.getElementById("form-producto")
            .addEventListener("submit", agregarProductoHandler);
}


renderCarrito();

