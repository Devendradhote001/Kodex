import React from "react";

const About = async () => {
  let res = await fetch("https://fakestoreapi.com/products");
  let products = await res.json();

  return (
    <div>
      <h1>This is about</h1>

      {products.map((elem) => (
        <a key={elem.id} href={`/about/${elem.id}/ol/name/age`}>
          <h1>{elem.title}</h1>
        </a>
      ))}
    </div>
  );
};

export default About;
