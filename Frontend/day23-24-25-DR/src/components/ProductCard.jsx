import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  let navigate = useNavigate();

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-indigo-200 max-w-sm mx-auto">
      {/* Product Image */}
      <div
        onClick={() => navigate(`/dashboard/product/detail/${product.id}`)}
        className="relative h-64 bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden"
      >
        <img
          src={product.images[0]}
          alt="Product"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-md">
          New
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <span className="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
            {product.category}
          </span>
          <h3 className="text-xl line-clamp-1 font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {product.title}
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-600">
            ${product.price}
          </span>
          <span className="text-sm text-gray-500 line-through">$129.99</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-xl hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-200 transition-all duration-200 transform hover:-translate-y-1 active:scale-95">
            Add to Cart
          </button>
          <button className="p-3 bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-700 rounded-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-200 transition-all duration-200 transform hover:-translate-y-1 active:scale-95">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
