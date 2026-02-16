//! Array

// const names = ["Priyanshu", "Ayush", "Roshan", "Sudhanshu"];
const names = new Array("Priyanshu", "Ayush", "Roshan", "Sudhanshu");

// names.push("Abhishek");  //? add at last
// names.pop();  //? remove from last
// names.shift();  //? remove from start
// names.unshift("Abhishek");  //? add at start

//? shift and unshift is slower because of rearrangement  //avoid using it

// console.log(names);
// console.log(names.sort());
// console.log(names.reverse());

const numbers = [15, 2, 1, 8, 3, 2];
// console.log(numbers.sort((a, b) => a - b));  //? for ascending order
// console.log(numbers.sort((a, b) => b - a));  //? for decending order
// console.log(numbers.indexOf(2));  //? gives index of first occurence
// console.log(numbers.lastIndexOf(2));  //? gives last index of occurence
// console.log(numbers.includes(3)); //? cheks the existance of the number
console.log(numbers.slice(2, 5));  //? slice the array