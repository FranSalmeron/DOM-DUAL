import { cardPrices } from "./components/cardPrices/cardPrices.js";
import { createdGraph } from "./components/grafico/chart.js";
import { createdHoursRanges } from "./components/hoursRangeSelect/hoursRangeSelect.js";
import { createLoadButton } from "./components/loadButton/loadButton.js";
import { createSpinner, hideSpinner, showSpinner } from "./components/spinner/spinner.js";
import { getDataPrice } from "./helpers/getDataPrices.js";
// -------- Delcaracion de variables ------
const urlData = import.meta.env.VITE_HOUR_PRICES;
let starHour = "";
let endHour = "";
let dataPrices = [];

// --------- Delcaracion de funciones -----
const hourRangeValue = (event) => {
    const selectedValue = event.target.value;  // Obtener el valor seleccionado del select o rango de horas
    [starHour, endHour] = selectedValue.split("-");
};

const handleClick = async() => {
    showSpinner(); // muestra el spinner de carga
    const data = await getDataPrice(urlData); //cogemos la data seleccionada
    dataPrices = data;
    const divPrice = cardPrices(dataPrices,starHour,endHour);
    const graph = createdGraph(starHour,endHour,await data.entries().next().value[1]);
    app.textContent = "";
    renderPagina();
    app.appendChild(await divPrice);
    app.appendChild(graph);
    hideSpinner(); // ocultamos el spinner de cargar
};

function renderPagina() {
    starHour = "00:00";
    endHour = "06:00";

    const app = document.getElementById("app");

    const spinner = createSpinner(); 
    
    const loadPricesBtn = createLoadButton();
    
    const selectHourRanges = createdHoursRanges();
        
    app.append(spinner,loadPricesBtn,selectHourRanges);

    selectHourRanges.addEventListener("change",hourRangeValue); 
    loadPricesBtn.addEventListener('click', handleClick); // para funcion que necesita parametros metodo, ()=>funcion(parametros);    
};

renderPagina();



