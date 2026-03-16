import React from "react";

const ProductCard = ({ product, deleteProduct }) => {
    console.log("product rendering...")
  return (
    <div className="w-[15%] border p-4 rounded-xl flex flex-col gap-6">
      <div className="w-full h-[60%]">
        <img
          className="h-50 w-full rounded-xl object-cover"
          src={product.image}
          alt=""
        />
      </div>
      <div className="text-sm">
        <p>{product.title}</p>
        <p className="text-2xl text-green-700 font-bold">${product.price}</p>
        <p>{product.category}</p>
      </div>
      <button
        onClick={() => deleteProduct(product.id)}
        className="py-2 bg-red-700 text-white rounded-xl"
      >
        Remove
      </button>
    </div>
  );
};

export default ProductCard;
