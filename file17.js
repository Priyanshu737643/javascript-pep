//! forEach loop

const products = ["product1", "product2", "product3"];

// for (let i = 0; i < products.length; i++){
//     console.log(products[i])
// }

//! forEach loop
//* products.forEach(()=>{})
products.forEach((product) => {
  console.log(product);
});
// products.forEach((product) => console.log(product));

//? ---------------------------------------------------

// function controller(f) {
//     console.log(f);
// }
// controller(10);

// function controller(f) {
//     f();
// }
// controller(() => console.log("Hello World"));

//? ----------------------------
// let a = 10;
// // a()       //! not valid
// let name = "James";
// // name()    //! not valid
// const f1 = () => console.log("Hello World");
// f1()      //! valid
//? ----------------------------

// function greet() {
//     console.log("Hello World");
// }
// const f1 = () => greet();
// f1();

//? ----------------------------

// function greet(f) {
//     f();
// }
// greet(() => console.log("Hello World"));
