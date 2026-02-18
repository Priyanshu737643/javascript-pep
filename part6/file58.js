//! use strict
// not provided let, var, const
// duplicate parameter names
// leading zeroes
// octal literals

//* ----------------------------------------------------------------

//* not provided let, var, const (still works but not recommended)
// x = 10;  //? will not throw an error
// console.log(x);

//* strict mode (recommended)
// "use strict";
// x = 10; //? will throw an error
// console.log(x);

//* correct way
// "use strict";
// let x = 10;   //? will not throw an error
// console.log(x);

//* -----------------------------------------------------------------

//? will not throw an error
// function add(a, a) {
//     console.log(a + a);
// }
// add(4, 5);

//? will throw an error (duplicate para meters)
"use strict";
// function add(a, a) {
//   console.log(a + a);
// }
// add(4, 5);

//? correct way (not throw an error)
// function add(a, b) {
//   console.log(a + b);
// }
// add(4, 5);

//* -----------------------------------------------------------------

"use strict";
let x = 0o10; //? octal literal (base 8)
console.log(x);
