// function add(a, b) {
//   console.log(a);
//   console.log(b);
// }
// add(4, 5);

//* ----------------------------------------------------

// function add() {
//   console.log(arguments);
//   console.log(arguments.length);
//   console.log(arguments[0]);
//   console.log(arguments[0] + arguments[1]);
// }
// add(7, 5, 8, 9);

//* ----------------------------------------------------
//? rest operator
// sum of arr elements
function add(...arr) {
    let sum = arr.reduce((total, num) => {
        return total + num;
    })
    return sum;
}
const result = add(7, 5, 8, 9);
console.log(result);
