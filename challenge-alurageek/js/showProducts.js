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
        openModal(id, img, name, price);
    });



    return product;
}

export async function showProducts() {
    try {
        const listAPI = await connectionAPI.fetchProducts();

        listAPI.forEach(product => {
            list.appendChild(createCard(product.img, product.name, product.price, product.id));
        });
    } catch {
        list.innerHTML = `<h2>Ha ocurrido un problema con la conexión :( <h2>`;
    }
}



// MODAL
function openModal(id, img, name, price) {
    // Asignar los valores actuales al formulario de edición
    editImgInput.value = img;
    editNameInput.value = name;
    editPriceInput.value = price;
  
    // Mostrar el modal
    modal.style.display = "flex";
  
    // Manejo del envío del formulario
    editForm.onsubmit = async (e) => {
      e.preventDefault();
      const updatedImg = editImgInput.value;
      const updatedName = editNameInput.value;
      const updatedPrice = editPriceInput.value;
  
      try {
        // Aquí llamamos a la API para actualizar el producto
        await connectionAPI.updateProduct(id, updatedImg, updatedName, updatedPrice);
        showSuccess("Producto actualizado exitosamente.");
        modal.style.display = "none"; // Cerrar el modal
        showProducts(); // Volver a mostrar la lista de productos
      } catch (error) {
        showError("Error al actualizar el producto.");
      }
    };
  }
  
  // Cerrar el modal cuando se haga clic en el botón de cancelar
  closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
  });