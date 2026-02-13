//! const

// const a = 10
// a = 10  //? we can't re-assign the value of const variable

//*----------------------------------------------------------------

//! let

// let a = 10
// console.log(a)
// a = 20;
// console.log(a)


// let a = 10  //? global variable
// function f1() {
//     let a = 20  //? local variable to the function f1()
//     console.log(a)
// }
// f1()
// console.log(a)

//? let = is block level scope
// let a = 10; 
// function f1() {
//     let a = 20; 
//     if (3 > 1) {
//         let a = 30  //? local to this block
//         console.log(a)
//     }
//     console.log(a);
// }
// f1();
// console.log(a);

//*----------------------------------------------------------------

//! var

//? var = is function level scope
// var a = 10;
// function f1() {
//   var a = 20;
//   if (3 > 1) {
//     var a = 30; //? it will change (var a = 20) also into 30
//     console.log(a);
//   }
//   console.log(a);
// }
// f1();
// console.log(a);

//*----------------------------------------------------------------

// Employee employee = new Employee()

// firstName = "John" //? camel case
// first_name = "Amy"
// FirstName = "Jack"
