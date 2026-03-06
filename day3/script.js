// rest operator
// 5. Event loop
// 6. Promises
// 7. Promise handlers
// 8. Fetch api
// 9. ES module

// REST operator

// let fn = (a, b, c, ...rest) => {
//   console.log(a, b, c, rest);
// };

// fn(4, 6, 7, 6, 4, 5, 3, 4, { name: "Rahul" });

// Asynchronous js

// console.log("hello");

// setTimeout(() => {
//   console.log("i m in timeout");
// }, 0);

// console.log("bye");

// console.log("finally bye...");

// promises javascript ka own class hai

// promises

let prom = new Promise((res, rej) => {
  let party = true;
  if (party) {
    return res({
      destination: "Taj hotel bhopal wala",
    });
  }
  return rej("no party, paise nahi hai.");
});

prom.then((val) => console.log(val)).catch((err) => console.log(err));

console.log("hello");
console.log(prom);

setTimeout(() => {
  console.log("yepppp");
}, 0);

console.log("byee");
