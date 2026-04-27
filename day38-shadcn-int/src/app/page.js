import ProductCard from "@/components/local/ProductCard";
import Spinner from "@/components/local/Spinner";
import React, { Suspense } from "react";

const Home = async () => {
  let res = await fetch("https://fakestoreapi.com/products");
  let products = res.json();

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <ProductCard products={products} />
      </Suspense>
    </div>
  );
};

export default Home;
