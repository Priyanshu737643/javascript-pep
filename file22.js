const products = [
  {
    id: 1,
    name: "Product1",
    desc: "This is description 1",
    price: 100,
    category: "Laptop",
  },
  {
    id: 2,
    name: "Product2",
    desc: "This is description 2",
    price: 100,
    category: "Desktop",
  },
  {
    id: 3,
    name: "Product3",
    desc: "This is description 3",
    price: 100,
    category: "Laptop",
  },
  {
    id: 4,
    name: "Product4",
    desc: "This is description 4",
    price: 100,
    category: "Desktop",
  },
  {
    id: 5,
    name: "Product5",
    desc: "This is description 5",
    price: 100,
    category: "Laptop",
  },
  {
    id: 6,
    name: "Product6",
    desc: "This is description 6",
    price: 100,
    category: "Desktop",
  },
];

let cart = [];

function addToCart(id) {
    const obj = products.find((product) => product.id === id );
    cart = [...cart,obj];
}
addToCart(1);
addToCart(3);
addToCart(5);
console.log(cart)
