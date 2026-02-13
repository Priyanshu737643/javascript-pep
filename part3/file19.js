//! map() function

const products = [
  { id: 1, name: "Product1", desc: "This is description 1", price: 100 },
  { id: 2, name: "product2", desc: "This is description 2", price: 120 },
  { id: 3, name: "Product3", desc: "This is description 3", price: 150 },
];

//! map() function

const cart = products.map((product) => {
  const obj = {
    ...product,
    qty: 1,
  };
  return obj;
});
console.log(cart);
