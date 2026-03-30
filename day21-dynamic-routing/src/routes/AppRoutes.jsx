import React from "react";
import { Route, Routes } from "react-router";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import ProductDetails from "../screens/ProductDetails";
import More from "../components/More";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />}>
          <Route path="more" element={<More />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
