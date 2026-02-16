//? Destructure object in function parameter
function response({ name, email, role }) {
  console.log(name);
  console.log(role);
}
const user = {
  name: "John",
  email: "john@gmail.com",
  role: "user",
};
response(user);
