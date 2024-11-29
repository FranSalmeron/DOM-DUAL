export class UsuarioClases {
    #password; // propiedad privada
    constructor(nombre,email,password){
        this.nombre = nombre
        this.email = email
        this.#password = password
    }

    //---- metodos publicos -----
    login = function(email,password){
        //  comprobar el email y el password.
        if(this.email == email && _password == password){
            return `Bienvenido ${this.nombre}`;
        }
        return "Error en las credenciales";
    }

    // actualizar el email
    updateEmail = function(newEmail){
        this.email = newEmail;
        return `Email actualizado ${this.email}`;
    }

    //obtener toda la informacion del USUARIO
    getInfo = function() {
        return `Ùsuario: ${this.nombre} - email: ${this.email}`;
    }
}