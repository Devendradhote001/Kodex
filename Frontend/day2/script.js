// functions

// es5

// 1. Function statement

// function abcd() {
//   console.log("hello");
// }

// abcd();

// 2. Function expression

// let abcd = function () {
//   console.log("function expression");
// };

// abcd();

// 3. Anonymous function
// function(){

// }

// es6

// 1. Fat arrow (arrow functions)

// let fatAF = () => {
//     console.log("Fat arrow function")
// }

// fatAF()

// 2. Fat arrow with implicit return

// let abcd = (a, b) => a+b;

// let res = abcd(40, 70);
// console.log(res);

// 3. fat arrow with implicit return with one param

// only works in single parameter
// let abcd = (a) => a;
// console.log(abcd(10));

// HOF - Higher order functions

// aese functions jo parameters me or return
//  me functions bheje ya accept kare

// abcd return a function
// let abcd = () => {
//     return () =>{
//         console.log("hello i m inner fn")
//         return 0
//     }
// }

// console.log(abcd()())

// let abcd = (a) => {
//   console.log(a());
// };

// console.log(abcd(() => {
//     console.log("param fn");
//   }))

// closures

// let bangdu = () => {
//   let a = 10;
//   return () => {
//     a = 90;
//     console.log(a);
//   };
// };

// console.log(bangdu()());

// impure and pure
// let a = 90;

// let fn = () => {
//   a = 100;
//   console.log(a);
// };

// fn();

// De-structuring on Objects

// let obj = {
//   name: "Rahul",
//   address: "Saket nagar",
//   empId: "SPL34",
//   company: "Sheryians private limites",
//   designation: "Developer",
//   projects: {
//     name: "e-commerce",
//   },
// };

// let {
//   address,
//   designation,
//   projects: { name },
// } = obj;

// console.log(address, designation, name);

// let team = [45, 10];

// let [score, counts] = team;

// console.log(score, counts)

// Spread operator

let obj = {
  name: "Santoor",
  category: "soap",
  colors: {
    name: "orange",
    quantity: 10,
  },
};

let obj2 = { ...obj };

obj2.name = "lifeboy";
obj2.colors.name = "red";

console.log("obj->", obj);
console.log("obj2->", obj2);

//  topic -> spread operations on objects with
//  shallow and (deep copy)

// find out the solution, how can we achieve
//  deep copy of our objects
