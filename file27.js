//? if-else statement
// let score = 90;
// let result;
// if (score > 50) {
//   result = "Pass";
// } else {
//   result = "Fail";
// }
// console.log(result);

//? ternary operator
// let score = 90;
// let result = score > 50 ? "Pass" : "Fail";
// console.log(result);

//? switch case
let score = 71;
switch (true) {
  case score >= 80:
    console.log("Grade A");
    break;

  case score >= 70:
    console.log("Grade B");
    break;

  case score >= 50:
    console.log("Grade C");
    break;

  default:
    console.log("Fail");
}

//? switch case
let subject = "2";
switch (subject) {
  case "1": {
    console.log("HyperText Markup Language");
    break;
  }
  case "2": {
    console.log("Java Script");
    break;
  }
  case "3": {
    console.log("Cascading Style Sheet");
    break;
  }
  default:
    console.log("default");
}

//? used in React Js
// let score = 90;
// let result = score > 50 && "Pass";
// console.log(result);

//? used in React Js
//* return 30 by-default if score value not given
// let score = 60;
// let score;
// let result = score || 30;
// console.log(result);
