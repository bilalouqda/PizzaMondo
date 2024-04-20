let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = '';
    cart.forEach(item => {
        orderSummary.innerHTML += `<p>${item.item} - ${item.price}dh</p>`;
    });
}

function processOrder(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    if (cart.length === 0) {
        alert('Please add items to your cart before placing an order.');
        return;
    }
    alert(`Thank you, ${name}! Your order will be delivered to ${address}.`);
    cart = [];
    updateOrderSummary();
}
