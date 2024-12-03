
let id = 1;

export class Producto {
    constructor(nombre,cantidad,precio){
        this.id = id++;
        this.nombre = nombre; // Variables Publicas
        this.precio = precio;
        this.cantidad = cantidad;
    }
    // --- Metodos Publicos ---
    obtenerInfo(){
        return `Producto: ${this.id}-${this.nombre} - cantidad: ${this.cantidad} - precio: ${this.precio} - Total: ${this.calcularTotal()} `;
    }

    calcularTotal(){
        return this.cantidad * this.precio;
    }
    
    updateStock = function(cantidad,id){
        if(this.id == id){
            if((this.stock+cantidad > 0) || (this.stock-cantidad > 0)){
                this.stock += cantidad;
            }
        }
    }
}