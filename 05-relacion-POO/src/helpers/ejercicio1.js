
export default function Tarea(nombre) {
    // propiedades estaticas
    Tarea.contador=1;
    // propiedades privadas
    // propiedades publicas
    this.nombre = nombre;
    this.id = Tarea.contador++;
    this.completada = false;

    // metodo publico
    this.toggleCompletada = function(){
        this.completada = !this.completada;
    }
    // metodo privado
    // function logEstado(){
    //     console.log(`La tarea ${this.nombre} está ${this.completada ? "Completada" : "No Completada"}`);
    // }

    // crear una propiedad estatica del objeto
    // que lo tengan todas las instancias.
    Tarea.prototype.info = function() {
        console.log(`La tarea ${this.nombre} está ${this.completada ? "completada" : "pendiente"}`);
    };

}

export class TareaClass {
    // propiedad privada
    #completada;

    //constructor
    constructor(nombre) {
        this.id = TareaClass.contador++;
        this.nombre = nombre;
        this.completada = false;
    }

    // metodo publico
    toggleCompletada() {
        this.#completada = !this.#completada;
    }

    info(){
        console.log(`
            La tarea ${this.nombre} esta ${this.#completada ? "completada" : "pendiente"}`);
    }
}