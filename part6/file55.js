//! Error Handling

try {
  console.log(num);
} catch (err) {
  // console.log(err);  //? error
  // console.log(err.name); //? ReferenceError
  // console.log(err.message); //? num is not defined
  console.log("Something went wrong"); //? Something went wrong
}
