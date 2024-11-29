
export function UsuarioFabrica(nombre,email,password){
    let _password = password;
    return {
        nombre,
        email,
            login(email,password){
            //  comprobar el email y el password.
            if(
                this.email == email && 
                _passwordpassword == password){
                return `Bienvenido ${this.nombre}`;
            }
            return "Error en las credenciales";
        },
        // actualizar el email
        updateEmail(newEmail){
            this.email = newEmail;
            return `Email actualizado ${this.email}`;
        },
        //obtener toda la informacion del USUARIO
        getInfo() {
            return `Ùsuario: ${this.nombre} - email: ${this.email}`;
        }
    }

}