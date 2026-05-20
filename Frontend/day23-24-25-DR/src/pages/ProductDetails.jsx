import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../config/axiosInstance";

const ProductDetails = () => {
  let { id } = useParams();
  let [productDetail, setProductDetail] = useState({});

  let getSingleProductDetail = async () => {
    try {
      let res = await axiosInstance.get(`/products/${id}`);
      setProductDetail(res.data);
    } catch (error) {
      console.log("error in product api");
    }
  };

  useEffect(() => {
    if (id) {
      getSingleProductDetail();
    }
  }, [id]);

  if (!productDetail.id) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image Gallery */}
          <div className="space-y-6">
            <img
              src={productDetail.thumbnail}
              alt={productDetail.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="grid grid-cols-4 gap-3">
              {productDetail.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${productDetail.title} ${index + 1}`}
                  className="h-24 object-cover rounded-xl cursor-pointer hover:shadow-lg transition-shadow border-2 border-transparent hover:border-indigo-300"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                {productDetail.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 leading-tight">
                {productDetail.title}
              </h1>
              <div className="flex items-center mt-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-1.512a1 1 0 00-1.175 0l-2.8 1.512c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-lg font-semibold text-gray-600">
                  {productDetail.rating} ({productDetail.reviews?.length || 0}{" "}
                  reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-indigo-600">
                  ${productDetail.price}
                </span>
                {productDetail.discountPercentage > 0 && (
                  <span className="ml-4 text-xl text-gray-400 line-through">
                    $
                    {Math.round(
                      productDetail.price /
                        (1 - productDetail.discountPercentage / 100)
                    )}
                  </span>
                )}
              </div>
              <span className="text-green-600 font-semibold text-lg">
                Save {productDetail.discountPercentage?.toFixed(1)}%
              </span>
            </div>

            {/* Stock Status */}
            <div
              className={`p-3 rounded-xl ${
                productDetail.availabilityStatus === "In Stock"
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              <span
                className={`text-sm font-semibold ${
                  productDetail.availabilityStatus === "In Stock"
                    ? "text-green-800"
                    : "text-red-800"
                }`}
              >
                {productDetail.availabilityStatus} • {productDetail.stock} in
                stock
              </span>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 text-lg">
                Add to Cart
              </button>
              <button className="border-2 border-indigo-200 bg-white text-indigo-600 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl hover:border-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition-all duration-300 hover:-translate-y-1">
                Buy Now
              </button>
            </div>

            {/* Key Details */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <span className="text-gray-500">Brand</span>
                <span className="font-semibold">{productDetail.brand}</span>
              </div>
              <div className="space-y-2">
                <span className="text-gray-500">SKU</span>
                <span className="font-mono">{productDetail.sku}</span>
              </div>
              <div className="space-y-2">
                <span className="text-gray-500">Weight</span>
                <span>{productDetail.weight}g</span>
              </div>
              <div className="space-y-2">
                <span className="text-gray-500">Warranty</span>
                <span>{productDetail.warrantyInformation}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Description</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {productDetail.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
