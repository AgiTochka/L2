function loadProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    const products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `${product.name} - ${product.calories} калорий <button onclick="deleteProduct(${product.id})">Удалить</button>`;
        productList.appendChild(li);
    });
}


function updateTotalCalories() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const totalCalories = products.reduce((total, product) => total + product.calories, 0);
    document.getElementById('totalCalories').textContent = totalCalories;
}

function addProduct() {
    const productName = document.getElementById('productName').value;
    const calories = parseInt(document.getElementById('calories').value);

    if (productName && calories) {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        const newProduct = { id: Date.now(), name: productName, calories: calories };
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));

        document.getElementById('productName').value = '';
        document.getElementById('calories').value = '';

        loadProducts();
        updateTotalCalories();
        updateChart();
    }
}
function deleteProduct(id) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products = products.filter(product => product.id !== id);
    localStorage.setItem('products', JSON.stringify(products));

    loadProducts();
    updateTotalCalories();
    updateChart();
}

function setTargetCalories() {
    const targetCalories = parseInt(document.getElementById('targetCalories').value);
    localStorage.setItem('targetCalories', targetCalories);
    updateChart();
}

function clearData() {
    localStorage.removeItem('products');
    localStorage.removeItem('targetCalories');
    loadProducts();
    updateTotalCalories();
    updateChart();
}