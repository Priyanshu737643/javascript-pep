// function makePayment(f) {
//   setTimeout(() => {
//     console.log("Payment has been processed");
//     f(); //? here f() is the sendConfirmation function
//   }, 5000);
// }

// function sendConfirmation() {
//   console.log("Order has been placed successfully");
// }
// makePayment(sendConfirmation);

// //? Output:
// // Payment has been processed
// // Order has been placed successfully

//* -------------------------------------------------------------------

// function makePayment() {
//   return new Promise((resolve, reject) => {
//     // reject("Something went wrong");  //? Something went wrong
//     resolve(); //? Order has been placed successfully
//   });
// }

// function sendConfirmation() {
//   console.log("Order has been placed successfully");
// }
// makePayment()
//   .then(() => sendConfirmation())
//   .catch((err) => console.log(err));

// //? Output:


//* -------------------------------------------------------------------


function makePayment() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log("Payment has been recieved");
          resolve();
    },5000)
  });
}

function sendConfirmation() {
  console.log("Order has been placed successfully");
}
makePayment()
  .then(() => sendConfirmation())
  .catch((err) => console.log(err));

//? Output:
// Payment has been recieved
// Order has been placed successfully


