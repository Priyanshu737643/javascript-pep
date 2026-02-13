numbers = [5, 3, 6, 1];

//* -----------------------------------------------------------------------
//! forEach()

//? numbers.forEach(()=>{})
// used to loop through an array

//* loop through numbers array
// numbers.forEach((number) => {
//   console.log(number);
// });

//* -----------------------------------------------------------------------
//! map()

//? numbers.map(() => { })
//? const newArray = numbers.map(() => { });
// used to transform the array in the new array (same length)

//* map() can also be used in place of forEach for looping the array
// numbers.map((number) => {
//   console.log(number);
// });

//* modified array
// const newArray = numbers.map((number) => {
//     return number + 1;
// })
// console.log(newArray);

//* -----------------------------------------------------------------------
//! filter()

//? numbers.filter(() => { })
//? const evenNumbers = numbers.filter(() => { })
// used to loop through an array and gives new array based on condition
// gives array

//* filter returns true or false
// const evenNumbers = numbers.filter((number) => {
//     return number % 2 == 0;
// });
// console.log(evenNumbers);

//* -----------------------------------------------------------------------
//! find()

//? numbers.find(() => { })
//? const result = numbers.find(() => { })
// used to loop through an array and gives first element based on condition
// gives object

//* gives first element only
// const result = numbers.find((number) => {
//     // return number === 3;
//     return number > 3;
// });
// console.log(result);

//* -----------------------------------------------------------------------
//! reduce()

//? numbers.reduce(()=>{})
//? const result = numbers.reduce(() => { })
// used to loop through an array and gives only 1 value based on condition

//* sum of all numbers of the array
// const result = numbers.reduce((sum, number) => {
//     return sum + number;
// });
// console.log(result);

//* -----------------------------------------------------------------------
//! some()

//? numbers.some(()=>{})
//? const result = numbers.some(() => { })
// used to check if any element of the array satisfies the condition
// gives boolean

//* checks if any number is greater than 1
// const result = numbers.some((number) => {
//     return number > 1;
// })
// console.log(result);

//* if mark > 80 in atleast 1 subject then PASS
// let marks = [78, 50, 90, 20];
// const result = marks.some((mark) => {
//   return mark > 80;
// });
// if (result) console.log("Pass");
// else console.log("Fail");

//* -----------------------------------------------------------------------
//! every()

//? numbers.every(() => { })
//? const result = numbers.every(() => { })
// used to check if all element of the array satisfies the condition
// gives boolean

//* checks if all numbers are greater than 1 
const result = numbers.every((number) => {
  return number > 2;
});
console.log(result);

