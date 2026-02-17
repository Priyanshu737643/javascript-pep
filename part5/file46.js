//! Promise.all()

function getStudentInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userObj = { name: "John", email: "john@gmail.com", age: 21 };
      resolve(userObj);
    }, 2000);
  });
}

function getExamInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Exam Info resolved");
    }, 2000);
  });
}

function getAttendanceInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Attendance Info resolved");
    }, 3000);
  });
}

async function main() {
  const result = await Promise.all([
    getStudentInfo(),
    getAttendanceInfo(),
    getExamInfo(),
  ]);
  //? this will only run after running all the promisses
  console.log(result);
  console.log("Student has been promoted");
}
main();


// getStudentInfo() should return object name, email and age
