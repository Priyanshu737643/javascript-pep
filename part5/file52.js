// const student = {
//     name: "John",
//     age:21,
// }

// console.log(student)  //? return object  { name: 'John', age: 21 }
// const result = JSON.stringify(student);  //* converting object to json
// console.log(result)  //? return json   { "name": "John", "age": 21 }

//* ----------------------------------------------------------------------

const student = '{ "name": "John", "age": 21 }';
console.log(student); //? return json  { "name": "John", "age": 21 }
const result = JSON.parse(student); //* converting json to object
console.log(result); //? return object  { name: 'John', age: 21 }
