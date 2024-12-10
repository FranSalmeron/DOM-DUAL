import { ProductList } from "./components/ProductList";

const urlAPI = "http://localhost:4000/products";
const productList = new ProductList(urlAPI);
productList.init();


