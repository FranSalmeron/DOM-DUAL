import { createLoadButton } from "./components/loadButton/loadButton.js";
import { createSpinner } from "./components/spinner/spinner.js";
import { getDataPrice } from "./helpers/getDataPrices.js";
// -------- Delcaracion de variables ------
const urlData = import.meta.env.VITE_HOUR_PRICES;

console.log(await getDataPrice(urlData));
// --------- Delcaracion de funciones -----
const handleClick = () => {
    
};



document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    const loadPricesBtn = createLoadButton();
    app.appendChild(loadPricesBtn);
    
    loadPricesBtn.addEventListener('click', handleClick); // para funcion que necesita parametros metodo, ()=>funcion(parametros);

});

/**
 * const app = document.getElementById("app"); // div#app del index.html
    const spinner = createSpinner(); //Crear el spinner
    app.appendChild(spinner); // Añadir el spinner al DOM // un div en realidad.
 */