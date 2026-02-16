const student = {
  name: "John",
  age: 21,
    marks: {
        math: 60,
        science:90,
  },
};

// console.log(student.name)
// console.log(student.age)

//? Destructuring
// const { name, age } = student;  //* can give property name only
// console.log(name);
// console.log(age);

//? assign new variable to name filed
// const { name: userName } = student;
// console.log(userName);

//? if already city given in student, then it will take that by default
// const { city = "Amritsar" } = student;
// console.log(city);

//? Nested Objects Destructuring
const { marks } = student;
console.log(marks);
const { marks: { math } } = student;
console.log(math);

