import React from "react";

const About = async () => {
  let res = await fetch("https://fakestoreapi.com/products");
  let products = res.json();
  return (
    <div>
      <h1>This is about</h1>
    </div>
  );
};

export default About;
