import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAllProducts } from "../api/productApis";
import { useLoaderData } from "react-router";

const Home = () => {
  console.log("home rendering...");

  

  let products = useLoaderData();
  console.log("products jo home me achuke hai->", products);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
