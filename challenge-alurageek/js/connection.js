const URL = "https://6759e26f099e3090dbe33820.mockapi.io/products";

async function fetchProducts() {
    try {
        const response = await fetch(URL);
        const products = await response.json();
        return products
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
}
fetchProducts();

export { fetchProducts };