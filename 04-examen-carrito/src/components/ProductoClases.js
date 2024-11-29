let id = 1;

export class ProductoClases {
    constructor(nombre,precio,stock,urlImagen){
        this.id = id++
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.urlImagen = urlImagen
    }
    // --- Metodos Publicos ---
    getInfoProducto = function() {
        return `Producto: ${this.id}-${this.nombre} - precio: ${this.precio} - stock: ${this.stock} - <img src="${this.urlImagen}" alt="defecto.png">`;
    } 

    updateStock = function(cantidad,id){
        if(this.id == id){
            if((this.stock+cantidad > 0) || (this.stock-cantidad > 0)){
                this.stock += cantidad;
            }
        }
    }
}