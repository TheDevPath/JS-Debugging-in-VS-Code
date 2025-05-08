async function calculateCartTotal(cart) {
  let total = 0;
  for (const item of cart) {
    total += item.price * item.quantity;
    await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate async work
  }
  return total.toFixed(2);
}

const cart = [
  { name: 'Laptop', price: 999.99, quantity: 1 },
  { name: 'Mouse', price: 29.99, quantity: 2 },
  { name: 'Keyboard', price: '59.99', quantity: 1 },
];

calculateCartTotal(cart).then((total) => {
  console.log(`Cart Total: $${total}`);
});
