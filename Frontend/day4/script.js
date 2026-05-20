// 7. Promise handlers
// 8. Fetch api
// 9. ES module

// --> Async / await

// Api calling ke liye -> fetch

let getData = fetch("https://fakestoreapi.com/products");

// getData.then((val) => val.json()).then((val) => console.log(val));

// let resolver = async () => {
//   let res = await getData;
//   let fres = await res.json();
//   console.log(fres);
// };

// resolver();

// let prom = async () => {
//   return 7;
// };

// console.log(prom());

let prom = new Promise((res, rej) => {
  return res("ok");
});

// prom.then((val) => console.log(val))
// .catch(err => console.log("this is error->",err))

// let resolver = async () => {
//   try {
//     let res = await prom;
//     console.log(res);
//   } catch (err) {
//     console.log("error ", err);
//   }
// };

// resolver();

// import a from "./app.js";

// console.log(a)

for (let i = 0; i <= 10000000; i++) {}
for (let i = 0; i <= 10000000; i++) {}

setTimeout(() => {
  console.log("Timer 1 done");
}, 200);


for (let i = 0; i <= 10000000; i++) {}


setTimeout(() => {
  console.log("Timer 2 done");
}, 0);

setTimeout(() => {
  console.log("Timer 3 done");
}, 100);
