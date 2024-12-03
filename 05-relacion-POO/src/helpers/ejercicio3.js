
export function Empleado(nombre,edad, puesto){
    this.nombre = nombre;
    this.edad = edad;
    this.puesto = puesto;
    // salario lo hago compartido para la clase
    Empleado.prototype.calcularSalario = function(){
        const salarioBase = {
            junior: 1500,
            senior: 2500,
            master: 5000,
        };
        return salarioBase[this.puesto] || 0;
    };
    Empleado.prototype.info = function () {
        console.log
        (`
            ${this.nombre} (${this.edad}) - ${this.puesto} - ${this.calcularSalario()} €
        `);
    };
}    

// subFuncion constructora llamada EmpleadoFreelance 

export function EmpleadoFreelance(nombre,edad,precioHora) {
    //Este constructor se crea con el constructor padre y con las propiedades puestas luego.
    Empleado.call(this, nombre,edad, "freelance");
    this.precioHora = precioHora;
    // tengo que heredar los metodos de la funcion constructora PADRE
    EmpleadoFreelance.prototype = Object.create(Empleado.prototype);
    // y que el constructor sea el del PADRE
    EmpleadoFreelance.prototype.constructor = EmpleadoFreelance;

    // soobrescribimos el metodo calcularSalario y el info
    EmpleadoFreelance.prototype.info = function() {
        console.log(`
            
            `);
    }
    EmpleadoFreelance.prototype.calcularSalario = function() {

    }

}