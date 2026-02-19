//! add to cart (practice)

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
    price: 150,
    category: "Desktop",
  },
  {
    id: 3,
    name: "Product3",
    desc: "This is description 3",
    price: 200,
    category: "Laptop",
  },
  {
    id: 4,
    name: "Product4",
    desc: "This is description 4",
    price: 150,
    category: "Desktop",
  },
  {
    id: 5,
    name: "Product5",
    desc: "This is description 5",
    price: 300,
    category: "Laptop",
  },
  {
    id: 6,
    name: "Product6",
    desc: "This is description 6",
    price: 150,
    category: "Desktop",
  },
];

const cart = [];
//? addToCart
function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  cart.push({ ...product, quantity: 1 });
}

//? increment
function increment(productId) {
  const item = cart.find((product) => product.id === productId);
  item.quantity++;
}

//? decrement
function decrement(productId) {
  const item = cart.find((product) => product.id === productId);
  item.quantity--;
}

//? calculateTotal
const userEmail = "john@gmail.com";
function calculateTotal() {
  cart.reduce((sum, item) => sum + item.price * item.quantity);
}

//? placeOrder
function placeOrder() {
  if (cart.length === 0) {
    console.log("Cart is empty");
    return;
  }
  const total = calculateTotal();

  const order = {
    email: userEmail,
    items: cart,
    orderValue: total,
  };
  console.log(`Order placed successfully by ${order.email}`);
  order.items.forEach((item) => {
    console.log(
      `${item.id} - ${item.name} - ${item.desc} - ${item.quantity} - ${item.price} - ${item.price * item.quantity}`,
    );
  });
}

//? start

console.log("*** Flipkart ***");
products.forEach((product) => {
  console.log(
    `${product.id} ${product.name} ${product.desc} - ${product.price}`,
  );
});

console.log("------------------------------------------------");
addToCart(1);
addToCart(3);
addToCart(5);
// console.log(cart);
increment(1);
increment(5);
// console.log(cart);
decrement(1);
// console.log(cart);
// decrement(1);
// console.log(cart);
placeOrder();
