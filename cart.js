function calculateCartTotal(cart) {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total.toFixed(2);
}

const cart = [
  { name: 'Laptop', price: 999.99, quantity: 1 },
  { name: 'Mouse', price: 29.99, quantity: 2 },
  { name: 'Keyboard', price: '59.99', quantity: 1 },
];

console.log(`Cart Total: $${calculateCartTotal(cart)}`);
