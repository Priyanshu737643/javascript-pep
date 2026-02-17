//! Array
// const employees = ["John", "Cathy", "Mike"];

// for (let e of employees) {
//   console.log(e);  //? value
// }

//* -----------------------------------------------------------------

//! Object
const student = {
  name: "John",
  age: 23,
};

for (let s of Object.keys(student)) {
  console.log(s); //? key
  console.log(student[s]); //? value
}
