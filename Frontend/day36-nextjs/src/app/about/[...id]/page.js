import React from "react";

const ProductDetail = async ({ params }) => {
  let data = await params;
  console.log(data);

  return (
    <div>
      <h1>This is product detail page</h1>
    </div>
  );
};

export default ProductDetail;
