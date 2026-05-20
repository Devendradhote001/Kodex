const express = require("express");
const cors = require("cors");
const ProductModel = require("./models/product.model");

const app = express();

// middleware for Cors(cross origin resource sharing) policy
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.post("/create-product", async (req, res) => {
  try {
    let { name, description, amount, currency, category, stock } = req.body;

    if (!name || !amount || !stock)
      return res.status(400).json({
        message: "All fields are required",
      });

    let newProduct = await ProductModel.create({
      productName: name,
      description,
      price: {
        amount,
        currency,
      },
      category,
      stock,
    });

    return res.status(201).json({
      message: "Product Created Successfully",
      product: newProduct,
    });
  } catch (error) {
    console.log("errror in create api", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = app;
