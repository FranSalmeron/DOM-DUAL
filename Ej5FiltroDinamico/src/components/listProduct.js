
export default function listProduct (data) {
    if(!Array.isArray(data)){
        throw new Error("La data no es valida");
    }
    const divList = document.createElement("div");
    const ulList = document.createElement("ul");

    const labelProduct = document.createElement("label");
    labelProduct.textContent = "Filtrar producto por nombre";

    const inputProduct = document.createElement("input");
    inputProduct.id = "product";
    inputProduct.type = "text";
    inputProduct.name = "product";
    inputProduct.placeholder = "Escribe el nombre del producto que quieras buscar";

    inputProduct.addEventListener("input", () => {
        while (ulList.firstChild) {
            ulList.removeChild(ulList.firstChild);
        }
        const filteredData = data.filter(product => product.toLowerCase().includes(inputProduct.value));
        console.log(filteredData);
        filteredData.forEach(product => {
            const liList = document.createElement("li");
            liList.textContent = product;
            ulList.appendChild(liList);
        });
    });

    divList.append(labelProduct,inputProduct,ulList);
    return divList;
};