import { Producto } from "./Producto";

export default class Carrito {
    constructor() {
        this.productos = [];
    }
    // agregar "un Producto" al carrito.
    agregarProducto(nombre,cantidad,precio){
        this.productos.push(new Producto(nombre,precio,cantidad))
        // guardar en el localStorage
    }

    borrarProducto(index){
        this.productos.splice(index,1);
        // guardar en el localStorage
    }

    editarProducto(index,newCantidad){
        if(newCantidad > 0){
            this.productos[index].cantidad = newCantidad;
            // guardar en el localStorage
        }
    }

    calcularTotal(){
        this.productos.reduce((total,producto) => total+producto.calcularTotal(),0);
    }
    // extra ---- localStorage ---------

    guardarLocalStorage(){
        localStorage.setItem("carrito",JSON.stringify(this.productos));
    }

    cargarLocalStorage(){
        const carrito = JSON.parse(localStorage.getItem("carrito"));  
        // coger y guardar en productos un map creado de carrito con productos
        if(carrito){
            this.productos = carrito.map((producto) => new Producto(carrito.nombre,carrito.precio,carrito.cantidad));
        }
    }
    // ordenar por nombre

    //ordenar por precio

}