import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  console.log(products)

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.log("error in api", error);
      }
    })();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-4">
      {products.map((elem) => {
        return <ProductCard key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default Home;
