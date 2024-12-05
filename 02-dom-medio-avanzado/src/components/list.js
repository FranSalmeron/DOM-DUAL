
export default function list () {
    const ulList = document.createElement("ul");
    ulList.id = "list";

    const liList1 = document.createElement("li");
    const liList2 = document.createElement("li");
    const liList3 = document.createElement("li");
    const liList4 = document.createElement("li");

      // Crear un botón para cada <li>
      const buttonLi1 = document.createElement("button");
      buttonLi1.className = "delete-btn";
      buttonLi1.textContent = "Eliminar";
  
      const buttonLi2 = document.createElement("button");
      buttonLi2.className = "delete-btn";
      buttonLi2.textContent = "Eliminar";
  
      const buttonLi3 = document.createElement("button");
      buttonLi3.className = "delete-btn";
      buttonLi3.textContent = "Eliminar";
  
      const buttonLi4 = document.createElement("button");
      buttonLi4.className = "delete-btn";
      buttonLi4.textContent = "Eliminar";

    liList1.appendChild(buttonLi1);
    liList2.appendChild(buttonLi2);
    liList3.appendChild(buttonLi3);
    liList4.appendChild(buttonLi4);

    ulList.append(liList1,liList2,liList3,liList4);

    return ulList;
}