//! Object

const student = {
  name: "John",
  age: 21,
};
// console.log(student);
// console.log(student.name);
// console.log(student.age);
// student.city = "NYC";  //? assigned new property "city"
// console.log(student)
// student.city = "Miami"  //? keys will not repeat it will overwrite or create new
// console.log(student)


//* Spread Operator
//? ...student = means all existing values of student and city
const obj = { ...student, city: "NYC" }
console.log(obj);

const cart = {}
// iphone
// desktop
const items = {...cart,"desktop":1}