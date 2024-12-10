export class ProductList {
    #products;
    #apiUrl;
    constructor(apiUrl) {
        this.#apiUrl = apiUrl;
        this.#products = [];
        // donde renderizar
        this.appContainer = document.getElementById("app");
    }

    // método para inicializar
    async init(){
        try {
            this.#products = await this.#fetchDataProducts();
            this.#renderProducts();
        } catch (error) {
            this.renderError(error);
        }
    }

    // método privado para obtener los productos
    async #fetchDataProducts() {
        try {
            const response = await fetch(this.#apiUrl);
            if(!response.ok) {
                throw new Error("Error al obtener los productos");
            }
            return await response.json();
        } catch (error) {
            throw new Error("Error: ", error);
        }
    }
    changeColor() {
        const p = document.getElementById("categoria");
        p.style.color = "green";
    };

    // metodo para renderizar los productos
    #renderProducts() {
        if(this.#products.length === 0) {
            this.renderError("No hay productos que mostrar");
        }
        const productsHTML = this.#products.map((product,index) => {
            
            return `
            <div class="product-card" data-id="${index}">
            <h3>${product.name}</h3>
            <p>Precio: ${product.price}</p>
            <p>Description: ${product.description}</p>
            <p data-id="${index}">Categoria: ${product.category}</p>
            </div>
            `;
        }).join("");
        //dos formas:
        // CON inerHTML
        this.appContainer.innerHTML = `
        <div class="product-list">
        ${productsHTML};
        </div>        `;
        // creando clase y añadiendo el texto
        // const myDiv= document.createElement("div");
        // myDiv.className = "prodcut-list";
        // myDiv.innerHTML=productsHTML;
        // this.appContainer.appendChild(myDiv);
        
        const listaProductos = document.querySelector(".product-list");
        console.log(listaProductos);
        listaProductos.addEventListener("click", (e) => {
            if(e.target.dataset.id){
                // poner de color verde la tarjeta seleccionada
                const productCart = document.querySelector(`[data-id="${e.target.dataset.id}"]`);
                productCart.style.backgroundColor = productCart.style.backgroundColor === "" ? "green" : "";
            }   
        });
    }

    // metodo para renderizar errores
    renderError(message) {
        this.appContainer.innerHTML = `
        <div class="error" >
        <p>Error: ${message}</p>
        </div>
       `;
    }

    #validateData(prodcut){
        const { name, price, description, category} = prodcut;
        if(!name || !price || !description || !category) {
            return false;
        }
        return true;
    }

    // getter
    get apiUrl() {
        return this.#apiUrl;
    }
    // setter
    set addProduct(prodcut) {
        if(this.#validateData(prodcut)){
            this.#opFetchProductData(prodcut, "post");
            
        }
        throw new Error("Datos del producto incorrectos");
    }

    // metodo para (post,patch,delete,put) productos
    async #opFetchProductData(product, method) {
        try {
            switch(method){
                case "post":
                const responsePost = await fetch(this.#apiUrl, {
                    method: "POST",
                    body: JSON.stringify(product),
                    headers: {
                        "Content-type": "application/json",
                    },
                })
                break;
                case "delete":
                    const id = product.id;
                    const responseDelete = await fetch(`${this.#apiUrl}/${id}`, {
                        method: "DELETE",
                    });
                    if(!responseDelete.ok) {
                        throw new Error("Error al obtener los productos");
                    }
                    console.log("Borrado correctamente");
                break;
                case "put":
                    const responsePut = await fetch(`${this.#apiUrl}/${product.id}`, {
                        method: "PUT",
                        body: JSON.stringify(product),
                        headers: {
                            "Content-type": "application/json",
                        },
                    });
                break;
                case "patch":

                break;
                case "get":
                    const responseGet = await fetch(this.#apiUrl);
                break;
                default: 

            }
        } catch (error) {
            
        }
    }
}