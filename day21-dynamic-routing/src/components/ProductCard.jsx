import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { CartStore } from "../context/CartContext";

const ProductCard = ({ product }) => {
  let { setCartItems, cartItems } = useContext(CartStore);

  let navigate = useNavigate();

  let handleAddToCart = () => {
    setCartItems((prev) => [...prev, product]);
    alert("Items added in cart");
  };

  let isInCart = cartItems.find((elem) => elem.id === product.id);

  return (
    <div className=" p-5 h-fit flex flex-col gap-4 rounded-xl border-2 border-blue-600">
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="flex items-center"
      >
        <img width={300} src={product?.image} alt="" />
      </div>
      <div>
        <h1>{product.title}</h1>
        <h2>{product.category}</h2>
        <h3>${product.price}</h3>
      </div>
      <div className="w-full flex justify-between items-center">
        {isInCart ? (
          <div className="flex gap-4 items-center">
            <p className="px-2 bg-red-600 text-white">-</p>
            <p>1</p>
            <p className="px-2 bg-green-600 text-white">+</p>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="border-3 p-2 rounded-xl border-green-700"
          >
            Add to Cart
          </button>
        )}
        <button className="border-3 p-2 rounded-xl border-red-700">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
