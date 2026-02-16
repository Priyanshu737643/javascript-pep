//! Hoisting

//! Regular function is hoisted but arrow function is not hoisted

//? Hoisting with let
// console.log(name);  //? it will not give error but it will give undefined
// var name = "John";  //* var

//* backend logic of above code
// var name;
// console.log(name);
// var name = "John";

//? Hoisting with let and const
//* it is good to use
// console.log(name);  //? it will give error because of TDZ
// let name = "John";  //* let

//! TDZ (Temporal Dead Zone)

//* backend logic of above code
// let name;
// console.log(name);
// name = "John";

//? Because of hoisting, we can call the function before defining it
//* Regular Functions are fully hoisted
// greet();
// function greet() {
//     console.log("Hello World");
// }

//? in case of let and const, we have to define the function before calling it
//* Arrow Functions not hoisted
// greet();
// const greet = () => {
//   console.log("Hello World");
// };

const greet = () => {
  console.log("Hello World");
};
greet();
