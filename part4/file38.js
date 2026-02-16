//! Date

// let d = new Date();
// console.log(d)

//? get methods
// console.log(d.getDate());
// console.log(d.getMonth());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getDay());
// console.log(d.getTime());  //* 1/1/1970 = first day the counting started
// console.log(Date.now());  //* 1/1/1970

//? set methods
// let d2 = new Date(2026,0,1,10,10,10);
// console.log(d2)

// let d = new Date("February 7, 2020 10:10:10");
// console.log(d);
// console.log(d.getMonth());

const d = new Date();
// d.setFullYear(2020);
// d.setMonth(1);
// d.setDate(7);
// d.setHours(10);
// d.setMinutes(10);
// d.setSeconds(10);
// d.setMilliseconds(1);
// d.setTime(1);   //? 1970-01-01T00:00:00.001Z  // 1st Jan 1970 = first day
d.setTime(999900000);   //? 1970-01-12T13:45:00.000Z
console.log(d);  