import { showProducts } from "./showProducts.js";
import { addProduct } from "./addProduct.js";


const form = document.querySelector("[data-form]");

form.addEventListener("submit", e => addProduct(e));

showProducts();



const priceInput = document.querySelector("[data-price]");

priceInput.addEventListener("input", () => {
    // Eliminar cualquier carácter no numérico, coma o punto
    let value = priceInput.value.replace(/[^0-9,\.]/g, "");

    // Reemplazar el primer coma por punto
    value = value.replace(",", ".");

    // Limitar a dos decimales
    const decimalIndex = value.indexOf(".");
    if (decimalIndex !== -1) {
        // Obtener solo dos decimales después del punto
        value = value.slice(0, decimalIndex + 3);
    }

    // Asignar el valor al input
    priceInput.value = value;
});