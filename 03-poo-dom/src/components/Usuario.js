export function Usuario (nombre,email,password) {
    this.nombre = nombre; // Variables públicas
    this.email = email;
    let _password = password;
    // ---- metodos publicos ----
    this.login = function(email,password){
        //  comprobar el email y el password.
        if(this.email == email && _password == password){
            return `Bienvenido ${this.nombre}`;
        }
        return "Error en las credenciales";
    }

    // actualizar el email
    this.updateEmail = function(newEmail){
        this.email = newEmail;
        return `Email actualizado ${this.email}`;
    }

    //obtener toda la informacion del USUARIO
    this.getInfo = function() {
        return `Ùsuario: ${this.nombre} - email: ${this.email}`;
    }
}

