import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
import ProductCard from "../components/Productcard";
import { useSelector } from "react-redux";

const Shop = () => {
  const [products, setProducts] = useState([]);
  let { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    (async () => {
      try {
        let res = await axiosInstance.get("/products");
        console.log(res);
        setProducts(res.data);
      } catch (error) {
        console.log("Error in products api", error);
      }
    })();
  }, []);

  return (
    <div className="grid grid-cols-4">
      {products.map((elem) => {
        let cartItem = cartItems.find((val) => val.id === elem.id);

        return (
          <ProductCard
            product={elem}
            key={elem.id}
            quantity={cartItem?.quantity}
          />
        );
      })}
    </div>
  );
};

export default Shop;
