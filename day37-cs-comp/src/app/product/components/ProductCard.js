"use client";

import React, { use } from "react";

const ProductCard = ({ products }) => {
  console.log("client component...");

  let pro = use(products);
  return (
    <>
      {pro.map((elem) => (
        <div key={elem.id} className="p-4 border-2 border-white rounded ">
          <h1 onClick={() => console.log("hello")}>{elem.title}</h1>
          <p>{elem.price}</p>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
