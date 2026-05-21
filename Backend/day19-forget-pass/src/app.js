require("dotenv").config();

const express = require("express");
let path = require("path");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/api/auth", authRoutes);

module.exports = app;
