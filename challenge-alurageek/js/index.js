import { showProducts } from "./showProducts.js";
import { addProduct } from "./addProduct.js";


const form = document.querySelector("[data-form]");

form.addEventListener("submit", e => addProduct(e));

showProducts();