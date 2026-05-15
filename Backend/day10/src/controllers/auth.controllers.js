const UserModel = require("../models/user.model");

let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");

let registerController = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({
        message: "All fields are required",
      });

    let isExisted = await UserModel.findOne({
      email,
    });

    if (isExisted)
      return res.status(409).json({
        message: "Email already exists",
      });

    let hasPass = await bcrypt.hash(password, 10);

    let newUser = await UserModel.create({
      name,
      email,
      password: hasPass,
    });

    let token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token);

    return res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

let loginController = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({
        message: "Email and password are required",
      });

    let isExisted = await UserModel.findOne({
      email,
    });

    if (!isExisted)
      return res.status(404).json({
        message: "User not found",
      });

    let comparePass = await bcrypt.compare(password, isExisted.password);

    if (!comparePass)
      return res.status(401).json({
        message: "Invalid credentials",
      });

    let token = jwt.sign({ id: isExisted._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      sameSite: "lax",
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "user loggedin successfully",
      user: isExisted,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  registerController,
  loginController,
};
