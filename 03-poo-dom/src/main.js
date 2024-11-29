// Implementar un perfil de login y actualizacion del perfil usando
// POO
// Objetivo: Crear una CLASE u OBJETO para modelar el inicio de sesion/perfil

// import { Usuario } from "./components/Usuario";
// import { UsuarioClases } from "./components/UsuarioClases";
// import { UsuarioFabrica } from "./components/UsuarioFabrica";

// // Creo una instancia de Usuario

// //const usuario = new Usuario("Ana", "ana@gmail.com","12345");
// //const usuario = new UsuarioClases("a","aa@gg.com","123");
// const usuario = new UsuarioFabrica("a","aa@gg.com","123")

// const app = document.getElementById("app");
// app.innerHTML = `
//     <h2>Gestion de Usuarios</h2>
//     <p>${usuario.getInfo()}</p>
//     <button id="btn-login"> Iniciar Sesion </button>
//     <button id="btn-actualizar-email" > Actualizar Email </button>
//     <div id="form-container" ></div>
//     `;

// // gestiono los evenetos.

// document.getElementById("btn-login")
//         .addEventListener("click",mostrarFormularioLogin);

// document.querySelector("#btn-actualizar-email")
//         .addEventListener("click",mostrarFormularioUpdateEmail);

// function mostrarFormularioLogin(){
//     const formContainer = document.getElementById("form-container");
//     formContainer.innerHTML = `
//         <input id="email-login" type="email" placeholder="Introduzca el email" />
//         <input id="password-login" type="password" placeholder="Contraseña" />
//         <button id="btn-enviar-login">Enviar</button>
//         `;
    
//     document.getElementById("btn-enviar-login")
//         .addEventListener("click", () => {
//         const email = document.getElementById("email-login").value.trim();
//         const password = document.getElementById("password-login").value.trim();
//         alert(usuario.login(email,password));   
//     })
// }

// function mostrarFormularioUpdateEmail () {
//     const formContainer = document.getElementById("form-container");
//     formContainer.innerHTML = `
//     <input id="nuevo-email" type="email" placeholder="Escriba su nuevo email" />
//     <button id="btn-update-email">Actualizar</button>
//     `;
//     document.getElementById("btn-update-email")
//             .addEventListener("click", () => {
//                 const newEmail = document.getElementById("nuevo-email").value.trim;
//                 alert(usuario.updateEmail(newEmail));
//             })
// };

// Ejercicio: implementar una funcion constructora que modele un producto, del producto quiero saber el nombre el precio el stock, urlImagen, los
// metodos son obtener informacion del producto y actualizar stock le paso una cantidad si es positiva le suma al stock y le resta si es negativa
// siempre que haya stock suficiente
// genera un array de productos renderizalos en el DOM(pintar) añade un boton a cada producto que permita actualizar el stock
// aplicar dos formas de la tres vistas en creacion de objetos

// Ejercicio 2 : sistema bancario: objetivo implementar una clase llamada cuentaBancaria que tenga una propiedad privada llamada saldo y que 
// me permita depositar una cantidad y retirar una cantidad siempre que sea posible.
// genera en el DOM dos contenendores uno para ingresar o retirar dinero a traves de un radio button y otro mostrar informacion de mi cuenta.
// una lista para selecionar un contenedor u otro. Aplicado de dos formas 
// Un numero de cuenta tiene 12 numeros



//const productos = [new Producto("queso","5€",20,"urlQueso"),new Producto("queso griego","6€",5,"urlQueso")];
// const productos = [new ProductoClases("queso","5€",20,"urlQueso"),new ProductoClases("queso griego","6€",5,"urlQueso")];

    const app = document.getElementById("app");
// app.innerHTML = "<h2>Gestion de Productos</h2>"; // Añadimos el título fuera del loop
// productos.forEach(producto => {
//     // Usamos += para añadir contenido sin reemplazar
//     app.innerHTML += `
//         <p>${producto.getInfoProducto()}</p>
//         <input id="cantidad-stock" type="number" placeholder="Introducir cantidad añadir o eliminar"/>
//         <button id="btn-actualizar-stock">Actualizar stock</button>
//     `;
// });
    
// document.getElementById("btn-actualizar-stock")
//         .addEventListener("click",() => {
//             const newStock = document.getElementById("cantidad-stock").value.trim();
//             productos.forEach(producto => {
//             producto.updateStock(newStock,producto.id);
//             alert(`Stock del producto actualizado: ${producto.stock}`);
//             })   
//         });

import { CuentaBancaria } from "./components/CuentaBancaria";
import { CuentaBancariaFabrica } from "./components/CuentaBancariaFabrica";

//const cuentaBancaria = new CuentaBancaria(100,123456789146);
const cuentaBancaria = new CuentaBancariaFabrica(1000,123456789123);
app.innerHTML = `
    <h1>Gestion de Cuenta Bancaria</h1>
    <form id="form-container">
        <label for="acciones-actualizarSaldo">
            <input type="radio" id="actualizarSaldo" name="opcion" value="Actualizar Saldo" required>
            Actualizar Saldo
        </label><br><br>

        <label for="acciones-getInfo">
            <input type="radio" id="getInfo" name="opcion" value="getInfo" required>
            Obtener informacion de la cuenta
        </label><br><br>
        </form>
`;

document.getElementById("actualizarSaldo")
        .addEventListener("click", () => {
            app.innerHTML += `
            <input id="cantidad-saldo" type="number" placeholder="Introducir cantidad añadir o retirar"/>
            <button id="btn-añadir-saldo">Añadir saldo</button>
            <button id="btn-quitar-saldo">Quitar saldo</button>
        `;
        document.getElementById("btn-añadir-saldo")
            .addEventListener("click",() => {
                const newSaldo = document.getElementById("cantidad-saldo").value.trim();
                cuentaBancaria.añadirSaldo(newSaldo,cuentaBancaria.numeroCuenta);
                alert(`Saldo añadido correctamente`);
                }); 
        document.getElementById("btn-quitar-saldo")
                .addEventListener("click",() => {
                    const newSaldo = document.getElementById("cantidad-saldo").value.trim();
                    cuentaBancaria.retirarSaldo(newSaldo,cuentaBancaria.numeroCuenta);
                    alert(`Saldo retirado correctamente`);
                    });
});
document.getElementById("getInfo")
        .addEventListener("click", () => {
        app.innerHTML += `
            ${cuentaBancaria.getInfo()}`;
})


// se pretende realizar una aplicacion que ejemplifique un carrito de la compra de la compra disponemos de las siguientes opciones:
// a) Agregar productos(Nombre cantidad precio),
// b) Editar protductos (Editas la cantidad)
// c) Eliminar productos
// d) Actualizar el total del carrito de forma dinammica
// e) usar clases
// f) Usar funciones constructoras/funciones
// g) Partimos de un div llamado app y  todo se genera dinamicamente
// Ampliacion: guardaremos en el local storage nuestro carrito de la compra

