import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  removeFromCart,
} from "../features/cartSlice";
import { useLocation } from "react-router";

const ProductCard = ({ product, quantity }) => {
  let dispatch = useDispatch();

  let { pathname } = useLocation();

  return (
    <div className="w-72 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {product.description}
        </p>

        {/* Price + Rating */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-green-600">
            ₹{product.price}
          </span>

          <span className="text-yellow-500 text-sm">⭐ {product.rate}</span>
        </div>

        {/* Button */}
        {pathname === "/cart" ? (
          <div>
            <p>Quantity - {quantity}</p>
            <button
              onClick={() => dispatch(removeFromCart(product))}
              className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Remove from cart
            </button>
          </div>
        ) : quantity ? (
          <div className="flex gap-6 items-center">
            <p
              onClick={() => dispatch(decrementQuantity(product))}
              className="p-2 bg-red-500"
            >
              -
            </p>
            <p className="text-xl">{quantity}</p>
            <p
              onClick={() => dispatch(addToCart(product))}
              className="p-2 bg-green-500"
            >
              +
            </p>
          </div>
        ) : (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
