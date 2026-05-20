import { axiosInstance } from "../config/axiosInstance";

export let getAllProducts = async () => {
  try {
    let res = await axiosInstance.get("/products");
    console.log("api hitted");

    return res.data.products;
  } catch (error) {
    console.log("error in Products api");
  }
};
