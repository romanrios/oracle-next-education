import { fetchProducts } from "./connection.js";

const list = document.querySelector("[data-list]");

export function createCard(img, name, value) {
    const product = document.createElement("li");
    product.className = "products_card";
    product.innerHTML = `
                    <img class="products_card_img" src=${img} alt=${name} />
                    <div class="products_card_info">
                        <p class="products_card_name">${name}</p>
                        <div class="products_card_subcontainer">
                            <p class="products_card_value">$ ${value}</p>
                            <img class="products_card_trash" src="./assets/trash_icon.svg" />
                        </div>
                    </div> `
    return product;
}

export async function showProducts() {
    try {
        const listAPI = await fetchProducts();

        listAPI.forEach(product => {
            list.appendChild(createCard(product.img, product.name, product.value));
        });
    } catch {
        list.innerHTML = `<h2>Ha ocurrido un problema con la conexión :( <h2>`
    }
}

