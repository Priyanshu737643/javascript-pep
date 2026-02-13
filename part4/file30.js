import add, { subtract } from "./calc.js";
import {name} from "./calc.js";

const result = add(4, 5);
console.log(result);

console.log(name);

const result2 = subtract(8, 4);
console.log(result2);

//? if we are not providing 'default' keyword, then we have to use {func} while importing.
