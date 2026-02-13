//! forEach loop

const products = [
  { id: 1, name: "Product1", desc: "This is description 1", price: 100 },
  { id: 2, name: "product2", desc: "This is description 2", price: 120 },
  { id: 3, name: "Product3", desc: "This is description 3", price: 150 },
];

let cart = [];

// products.forEach((product) => console.log(product));

products.forEach((product) => {
  // product.qty = 1;
  // product.total = product.qty * product.price;
  // cart.push(product)
  const obj = {
    ...product,
    qty: 1,
  };
  cart = [...cart, obj];
});

console.log(cart);
