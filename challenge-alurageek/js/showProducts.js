import { connectionAPI } from "./connectionAPI.js";
import { showSuccess, showError, confirmDelete } from "./swalMessages.js";

const list = document.querySelector("[data-list]");

// Selección del modal y el formulario
const modal = document.getElementById("edit-modal");
const closeModalButton = document.getElementById("close-modal");
const editForm = document.getElementById("edit-form");
const editImgInput = document.getElementById("edit-img");
const editNameInput = document.getElementById("edit-name");
const editPriceInput = document.getElementById("edit-price");

export function createCard(img, name, price, id) {
    const product = document.createElement("li");
    product.className = "products_card";
    product.innerHTML = `
        <img class="products_card_img" src=${img} alt=${name} />
        <div class="products_card_info">
            <p class="products_card_name">${name}</p>
            <div class="products_card_subcontainer">
                <p class="products_card_price">$ ${price}</p>
                <img class="products_card_edit" src="./assets/pencil-icon.svg" alt="Editar" />
                <img class="products_card_trash" src="./assets/trash_icon.svg" alt="Eliminar" />
            </div>
        </div>`;


    // Evento para eliminar el producto
    const trashIcon = product.querySelector(".products_card_trash");
    trashIcon.addEventListener("click", async () => {
        const confirm = await confirmDelete("¿Estás seguro de que quieres eliminar este producto?");
        if (confirm.isConfirmed) {
            try {
                await connectionAPI.deleteProduct(id);
                product.remove();
                showSuccess("Producto eliminado exitosamente.");
            } catch (error) {
                showError(`Error al eliminar el producto con id ${id}: `, error);
            }
        }
    });



    // Evento para editar el producto
    const editButton = product.querySelector(".products_card_edit");
    editButton.addEventListener("click", () => {
        openEditModal(id, img, name, price);
    });

    return product;

}


export async function showProducts() {
    try {
        const listAPI = await connectionAPI.fetchProducts();

        // eliminar todas las cards
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        };

        listAPI.forEach(product => {
            list.appendChild(createCard(product.img, product.name, product.price, product.id));
        });
    } catch {
        list.innerHTML = `<h2>Ha ocurrido un problema con la conexión :( <h2>`;
    }
}






async function openEditModal(id, img, name, price) {
    const { value: formValues } = await Swal.fire({
        title: 'Editar Producto',
        html: `      
            <label for="edit-name">Nombre del producto:</label>
            <input type="text" id="edit-name" class="swal2-input" maxlength="18" value="${name}" required>

            <label for="edit-price">Precio:</label>
            <input type="text" id="edit-price" class="swal2-input" maxlength="7" value="${price}" required>

            <label for="edit-img">URL de la imagen:</label>
            <input type="url" id="edit-img" class="swal2-input" maxlength="300" value="${img}" required>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Guardar cambios',
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
            const updatedImg = document.getElementById('edit-img').value;
            const updatedName = document.getElementById('edit-name').value;
            let updatedPrice = document.getElementById('edit-price').value;



            // Validación del precio: solo permite números, coma y punto
            const priceRegex = /^[0-9,\.]+$/; // Solo números, comas y puntos
            if (!updatedPrice.match(priceRegex)) {
                Swal.showValidationMessage('El precio solo puede contener números, coma y punto');
                return false;
            }



            if (!updatedImg || !updatedName || !updatedPrice) {
                Swal.showValidationMessage('Todos los campos son obligatorios');
                return false;
            }

            // Asegurarse de que el precio tiene dos decimales
            updatedPrice = formatPrice(updatedPrice);

            return { img: updatedImg, name: updatedName, price: updatedPrice };
        }
    });



    if (formValues) {
        try {
            await connectionAPI.updateProduct(id, formValues.img, formValues.name, formValues.price);
            showSuccess("Producto actualizado exitosamente.");
            showProducts(); // Refrescar lista de productos
        } catch (error) {
            showError("Error al actualizar el producto.");
        }
    }
}









// Función para asegurar que el precio tenga dos decimales
function formatPrice(price) {
    // Reemplazar la coma por punto para poder manipular el valor como número
    price = price.replace(",", ".");

    // Convertir el valor a un número flotante
    let formattedPrice = parseFloat(price);

    // Verificar si el precio es un número válido
    if (isNaN(formattedPrice)) {
        return NaN; // Si no es un número válido, retornar NaN
    }

    // Formatear el precio para tener siempre dos decimales
    return formattedPrice.toFixed(2).replace(".", ","); // Reemplazar punto por coma
}