const URL = "https://6759e26f099e3090dbe33820.mockapi.io/products";

async function fetchProducts() {
    try {
        const response = await fetch(URL);
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
}

fetchProducts();

async function createProduct(img, name, price) {
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ img, name, price }),
        });

        if (!response.ok) {
            throw new Error(`Error del servidor: ${response.status} ${response.statusText}`);
        }

        const product = await response.json();
        return product;
    } catch (error) {
        console.error('Error al crear producto:', error);
        throw error; // Lanza el error nuevamente
    }
}


async function deleteProduct(id) {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar el producto con id ${id}`);
        }

        return `Producto con id ${id} eliminado exitosamente`;
    } catch (error) {
        console.error('Error al eliminar producto:', error);
    }
}

async function updateProduct(id, img, name, price) {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: "PUT", // O "PATCH" si prefieres una actualización parcial
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                img: img,
                name: name,
                price: price,
            }),
        });

        if (!response.ok) {
            throw new Error("Error al actualizar el producto.");
        }

        const updatedProduct = await response.json();
        return updatedProduct;
    } catch (error) {
        console.error('Error al actualizar producto:', error);
        throw error; // Lanza el error para que sea manejado fuera de la función
    }
}

export const connectionAPI = { fetchProducts, createProduct, deleteProduct, updateProduct };