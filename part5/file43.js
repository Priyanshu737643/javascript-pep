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

//* method - 2  (mostly used)
async function main() {
    await f1();  //? f1() should run independently not asynchronous
    f2();
}
main();

//* will work but not recommended to use
// await f1();  //? async is already there by default 
// f2();

//? Output:
// This is F1 function
// This is F2 function
