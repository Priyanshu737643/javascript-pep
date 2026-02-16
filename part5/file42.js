function f1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is F1 function");
      resolve();
    }, 3000);
  });
}

function f2() {
  console.log("This is F2 function");
}

f1()
  .then(() => f2())
  .catch((err) => console.log(err));

//? Output:
// This is F1 function
// This is F2 function
