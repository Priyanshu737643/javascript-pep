const student = {
  name: "John",
    age: 21,
    city: "Jalandhar",
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
const { city="Amritsar"} = student;
console.log(city);

