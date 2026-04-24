import React, { Suspense } from "react";
import ProductCard from "./components/ProductCard";

const Product = async () => {
  console.log("server component");

  let res = await fetch("https://fakestoreapi.com/products");
  let data = res.json();

  return (
    <div className="flex flex-col gap-4">
      <h1>This is Product</h1>
      <div className="grid grid-cols-5 gap-4">
        <Suspense fallback={<h1>Loading....</h1>}>
          <ProductCard products={data} />
        </Suspense>
      </div>
    </div>
  );
};

export default Product;
