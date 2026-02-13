// export default function add(a, b) {
//   return a + b;
// }

// export const name = "John";

// export function subtract(a, b) {
//     return a - b;
// }


function add(a, b) {
  return a + b;
}

const name = "John";

function subtract(a, b) {
  return a - b;
}

export default add;
export { name, subtract };


//? if we are not providing 'default' keyword, then we have to use {func} while importing.
