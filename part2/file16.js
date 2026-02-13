// 966 346 1934

let cart = [];
// Click on Add to Cart button in Iphone product
cart = [...cart, {name:"iphone",price:45000,qty:1}];
// console.log(cart);
// Click on Add to Cart button in Speaker product
cart = [...cart, {name:"speaker",price:1000,qty:1}];
console.log(cart);


const order = {
    email: "john@gmail.com",
    items: cart,
    orderValue: 46000,
    status: "pending",
    date: Date(),
}

// db.orders.insertOne(order)

//? Task
// create flipkart database
// create collection order > email, items, orderValue, status, orderDate
// create collection users > name, email, password, role
// insert seed data
// write aggregate query to display all the orders placed by a particular user
