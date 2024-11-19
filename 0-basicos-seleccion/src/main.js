//# Ejercicios básicos de selección del DOM

// ### Ejercicio 1:

 //Selecciona el elemento `h1` por su ID.
const elementH1 = document
    .getElementById("contenedorPrincipal")
    .querySelector("h1");

    elementH1.style.color = "red"; // <-- estilos en linea
    elementH1.textContent = "Hola mundo"; // <-- contenido del elemento
    console.log(elementH1);


// ### Ejercicio 2:

// Selecciona todos los párrafos con la clase "parrafo" dentro del `contenedorPrincipal`.
const elementsParrafo = document.querySelectorAll("#contenedorPrincipal .parrafo");
      
console.log(elementsParrafo);


// ### Ejercicio 3:

// Selecciona el elemento `img` por su atributo `src`.
const img = document.querySelector("img[src='imagen.png']")

console.log(img);



// ### Ejercicio 4:

// Selecciona todos los elementos `<span>` dentro del `contenedorSecundario`.
const spans = document.querySelectorAll("#contenedorSecundario span");

console.log(spans);

// ### Ejercicio 5:

// Selecciona el primer párrafo con la clase "importante".
const elementImportant = document.querySelector(".parrafo.importante");

console.log(elementImportant);

// ### Ejercicio 6:

// Selecciona todos los párrafos que están dentro de un elemento con el `id` "contenedorPrincipal".
const parrafoContenedorPrincipal = document.querySelectorAll("#contenedorPrincipal p");

console.log(parrafoContenedorPrincipal);

// ### Ejercicio 7:

// Selecciona todos los elementos que tienen el atributo `data-atributo` con valor "valor1".
const elementDivDataAtributo = document.querySelectorAll("[data-atributo='valor1']");

console.log(elementDivDataAtributo);

// ### Ejercicio 8:

// Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".
const elementParrafoImportantes = document.querySelectorAll(".parrafo.importante");
const segundoParrafoImportante = elementParrafoImportantes.length>1 ? elementParrafoImportantes[1] : null;

console.log(segundoParrafoImportante);

// ### Ejercicio 9:

// Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase "contenedor".
const elementContSpan = document.querySelectorAll(".contenedor span");

console.log(elementContSpan);

// ### Ejercicio 10:

// Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase "parrafo".
const elementParrafos = document.querySelectorAll("#contenedorPrincipal .parrafo");
const TercerParrafo = elementParrafoImportantes.length>2 ? elementParrafos[2] : null;

console.log(TercerParrafo);

// ENUNCIADOS 2:

// ### Ejercicio 1:

// Añade un evento de clic a todos los elementos `<span>` dentro del `contenedorSecundario`. Cuando se haga clic, cambia el color de fondo del elemento al azar.
const clic = document.querySelectorAll('#contenedorSecundario span').forEach(span => {
    span.addEventListener('click', () => {
      const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      span.style.backgroundColor = randomColor;
    });
  });

//   ### Ejercicio 2:

//   Crea una función que muestre una alerta con el contenido de cualquier párrafo que tenga la clase "parrafo" cuando se haga doble clic en él.
  document.querySelectorAll('.parrafo').forEach(parrafo => {
  parrafo.addEventListener('dblclick', () => {
    alert(parrafo.textContent);
  });
});

//   ### Ejercicio 3:
  
//   Añade un evento de cambio a un `<select>` que está fuera del `contenedorPrincipal`. Cuando se cambie el valor, actualiza el texto del elemento `h1` al nuevo valor seleccionado.
document.querySelector('select').addEventListener('change', (event) => {
    document.querySelector('h1').textContent = event.target.value;
});
    

//   ### Ejercicio 4:
  
//   Crea una función que cambie el contenido de todos los párrafos dentro del `contenedorSecundario` cuando se presione la tecla "Enter". El nuevo contenido debe ser un texto aleatorio (por ejemplo, "Nuevo contenido").
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      document.querySelectorAll('#contenedorSecundario p').forEach(p => {
        p.textContent = 'Nuevo contenido';
      });
    }
  });
    

//   ### Ejercicio 5:
  
//   Añade un evento de clic a cualquier elemento con la clase "etiqueta". Cuando se haga clic, elimina el elemento del DOM.
document.querySelectorAll('.etiqueta').forEach(etiqueta => {
    etiqueta.addEventListener('click', () => {
        etiqueta.remove();
    });
  });

//   ### Ejercicio 6:
  
//   Crea una función que cambie el color de todos los elementos `<span>` dentro del `contenedorSecundario` cuando se mueva el mouse sobre ellos. El nuevo color debe ser azul.
document.querySelectorAll('#contenedorSecundario span').forEach(span => {
    span.addEventListener('mouseover', () => {
        span.style.color = 'blue';
    });
});

//   ### Ejercicio 7:
  
//   Añade un evento de carga a la página. Cuando la página se cargue, muestra una alerta con el texto "Página cargada".
window.addEventListener('load', () => {
  alert('Página cargada');
});  

//   ### Ejercicio 8:
  
//   Crea una función que cambie el tamaño del texto de todos los párrafos dentro del `contenedorPrincipal` cuando se haga clic en el elemento `img`. El nuevo tamaño debe ser el doble del tamaño actual.
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
        document.querySelectorAll('#contenedorPrincipal p').forEach(p => {
            let currentSize = parseInt(window.getComputedStyle(p).fontSize);
            p.style.fontSize = (currentSize * 2) + 'px';
        })
    });
});

//   ### Ejercicio 9:
  
//   Añade un evento de teclado a la página. Cuando se presione cualquier tecla, muestra una alerta con el código de la tecla presionada.
document.addEventListener('keydown', (event) => {
        alert(event.key);
})

//   ### Ejercicio 10:
  
//   Crea una función que cambie el color de fondo del `contenedorPrincipal` cuando se haga clic en cualquier elemento dentro de él. El nuevo color debe ser verde.
const contenedor = document.querySelector('#contenedorPrincipal')
    contenedor.addEventListener('click', () => {
        contenedor.style.backgroundColor = 'green';
});
  


