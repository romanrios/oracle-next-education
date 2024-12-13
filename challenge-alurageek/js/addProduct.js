import { connectionAPI } from "./connectionAPI.js";
import { showProducts } from "./showProducts.js";
import { showSuccess, showError } from "./swalMessages.js";


const form = document.querySelector("[data-form]");

export async function addProduct(e) {

    e.preventDefault();

    const img = document.querySelector("[data-img]").value;
    const name = document.querySelector("[data-name]").value;
    let price = document.querySelector("[data-price]").value;

    // Asegurarse de que el precio tiene dos decimales
    price = formatPrice(price);


    try {
        await connectionAPI.createProduct(img, name, price);
        form.reset();
        showProducts();
        showSuccess("Producto cargado exitosamente.");
    } catch (e) {
        showError(`Error al cargar el producto: ${e}`);
    }
};



// Función para asegurar que el precio tenga dos decimales
function formatPrice(price) {

    // Convertir el valor a un número flotante
    let formattedPrice = parseFloat(price);

    // Verificar si el precio es un número válido
    if (isNaN(formattedPrice)) {
        return "0.00"; // Si no es un número válido, retornar 0.00
    }

    // Formatear el precio para tener siempre dos decimales
    return formattedPrice.toFixed(2); // Reemplazar punto por coma
}