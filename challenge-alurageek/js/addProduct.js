import { connectionAPI } from "./connectionAPI.js";
import { showProducts } from "./showProducts.js";
import { showSuccess, showError } from "./swalMessages.js";


const form = document.querySelector("[data-form]");

export async function addProduct(e) {

    e.preventDefault();

    const img = document.querySelector("[data-img]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;

    try {
        await connectionAPI.createProduct(img, name, price);
        form.reset();
        showProducts();
        showSuccess("Producto cargado exitosamente.");
    } catch (e) {
        showError(`Error al cargar el producto: ${e}`);
    }
};

