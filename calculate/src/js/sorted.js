// Функция сортировки по названию
function sortNameProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.sort((a, b) => a.name.localeCompare(b.name));
    localStorage.setItem('products', JSON.stringify(products));
    loadProducts();
}

// Функция сортировки по калориям
function sortCaloriesProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.sort((a, b) => a.calories - b.calories);
    localStorage.setItem('products', JSON.stringify(products));
    loadProducts();
}
