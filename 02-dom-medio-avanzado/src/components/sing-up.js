
// inicio de sesión
export default function singUp() {
    const divFormLogin = document.createElement("div");
    divFormLogin.classList.add("form-container-login");
    divFormLogin.id = "form-container-login";

    // crear un formulario
    const formEmail = document.createElement("form");
    formEmail.id = "form-login";

    // label username
    const labelUsername = document.createElement("label");
    labelUsername.textContent = "Username: ";
    
    // input username
    const inputUsername = document.createElement("input");
    inputUsername.id = "username"
    inputUsername.type="text";
    inputUsername.name="username";
    inputUsername.placeholder="Escribe tu username";

    //label password
    const labelPassword = document.createElement("label");
    labelPassword.textContent = "Password: ";

    //input password
    const inputPassword = document.createElement("input");
    inputPassword.id = "password";
    inputPassword.type="password";
    inputPassword.name="password";
    inputPassword.placeholder="Escribe tu password";

    //label Repeatpassword
    const repeatLabelPassword = document.createElement("label");
    repeatLabelPassword.textContent = "RepeatPassword: ";

    //input Repeatpassword
    const repeatInputPassword = document.createElement("input");
    repeatInputPassword.id = "Repeatpassword";
    repeatInputPassword.type="password";
    repeatInputPassword.name="Repeatpassword";
    repeatInputPassword.placeholder="Escribe otra vez tu password";

    // creo el label de verificacion de contraseña
    const pPasswordCheck = document.createElement("p");
    pPasswordCheck.id = "password-check";
    pPasswordCheck.textContent = "La contraseña no coincide";
    pPasswordCheck.style.color = "red";
    pPasswordCheck.style.display = "none";
    formEmail.appendChild(pPasswordCheck); // <-- pPasswordCheck inyectado

    // añadir evento al input
    repeatInputPassword.addEventListener("input", () => {
        // si la contraseña es igual a la otra
        const isValidPassword =  inputPassword.value == repeatInputPassword.value;
        pPasswordCheck.style.display = isValidPassword ? "none" : "block";
    });

    //button
    const button = document.createElement("button");
    button.id ="button-login";
    button.type="submit";
    button.textContent="Iniciar Sesion";

    // añadimos TODOS los elementos al formulario
    formEmail.append(labelUsername,inputUsername,labelPassword,inputPassword,repeatLabelPassword,repeatInputPassword,button);

    // añadimos el formulario al contenedor
    divFormLogin.appendChild(formEmail);

    // exportamos el contenedor
    return divFormLogin;

}
