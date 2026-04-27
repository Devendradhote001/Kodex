import React, { useState } from "react";

const App = () => {
  console.log("app rendering...");

  let [count, setCount] = useState(0);
  const [obj, setObj] = useState({
    name: "Bhavya",
    age: 17,
    skills: "Smart",
  });

  let [arr, setArr] = useState(["Rahul", "Bhavya", "Sneha", "Sachin", "Rohit"]);

  console.log(arr);

  return (
    <div>
      <h1>Hello - {count}</h1>
      <h1>Name is -{obj.name}</h1>
      <h3>Age is -{obj.age}</h3>
      <button
        onClick={() => {
          setCount(5);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setObj({ ...obj, name: "Rohit", cat: 70 });
        }}
      > 
        Change name
      </button>

      <button
        onClick={() => {
          arr[2] = "Preeti";
          setArr([...arr]);
        }}
      >
        Change Array name
      </button>
    </div>
  );
};

export default App;
