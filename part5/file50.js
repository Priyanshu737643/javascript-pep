//! Promise.race()
//? whichever promise is resolved or rejected first, that will be the result of Promise
//! Promise.allSettled()
//? it will wait for all promises to be either resolved or rejected and then it will give the result

function p1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P1 Success");
    }, 3000);
  });
}

function p2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("P2 Success");
      reject("P2 Failed");
    }, 1000);
  });
}

function p3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P3 Success");
    }, 2000);
  });
}

async function main() {
  try {
    // const result = await Promise.all([p1(), p2(), p3()]);
    // const result = await Promise.any([p1(), p2(), p3()]);
    // const result = await Promise.race([p1(), p2(), p3()]);
    const result = await Promise.allSettled([p1(), p2(), p3()]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

main();
