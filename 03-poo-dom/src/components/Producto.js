
let id = 1;

export function Producto (nombre,precio,stock,urlImagen){
    this.id = id++;
    this.nombre = nombre; // Variables Publicas
    this.precio = precio;
    this.stock = stock;
    this.urlImagen = urlImagen;
    // --- Metodos Publicos ---
    this.getInfoProducto = function() {
        return `Producto: ${this.id}-${this.nombre} - precio: ${this.precio} - stock: ${this.stock} - <img src="${this.urlImagen}" alt="defecto.png">`;
    } 
    
    this.updateStock = function(cantidad,id){
        if(this.id == id){
            if((this.stock+cantidad > 0) || (this.stock-cantidad > 0)){
                this.stock += cantidad;
            }
        }
    }
}