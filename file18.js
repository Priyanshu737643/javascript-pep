// const products = ["product1", "product2", "product3"];

const products = [
  { id: 1, name: "Product1", desc: "This is description 1", price: 100 },
  { id: 2, name: "product2", desc: "This is description 2", price: 120 },
  { id: 3, name: "Product3", desc: "This is description 3", price: 150 },
];

let cart = [];

// products.forEach((product) => console.log(product));

products.forEach((product) => {
    product.qty = 1;
    product.total = product.qty * product.price;
    // cart.push(product)
    cart = [...cart, product];
});

cart.forEach((c) => console.log(c));


