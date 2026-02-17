// getStudentInfo() should return object name, email and age

function getStudentInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const stud = { name: "John", email: "john@gmail.com", age: 24 };
      resolve(stud);
    }, 2000);
  });
}

async function main() {
  try {
    const result = await getStudentInfo();
    console.log(result);
    console.log("Program Completed Successfully");
  } catch (err) {
    console.log(err);
  }
}

main();