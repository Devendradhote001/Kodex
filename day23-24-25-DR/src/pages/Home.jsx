import React from "react";

import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";

const Home = () => {
  console.log("home rendering...");

  let products = useLoaderData();
  console.log("products jo home me achuke hai->", products);

  return (
    <div className="grid min-h-full grid-cols-5 gap-6">
      {products?.map((elem) => {
        return <ProductCard product={elem} key={elem.id} />;
      })}
    </div>
  );
};

export default Home;
