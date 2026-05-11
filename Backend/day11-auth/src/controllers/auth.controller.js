const UserModel = require("../models/user.model");

let registerController = async (req, res) => {
  try {
    let { name, password, email, mobile } = req.body;

    if (!email || !password)
      return res.status(400).json({
        message: "All fields are required",
      });

    let isExisted = await UserModel.findOne({ email });

    if (isExisted)
      return res.status(409).json({
        message: "Email already registered",
      });

    let newUser = await UserModel.create({
      name,
      email,
      password,
      mobile,
    });

    let token = newUser.generateJWT();

    res.cookie("token", token);

    return res.status(201).json({
      message: "user registered successfully",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

let loginController = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({
        message: "All fields are required",
      });

    let isExisted = await UserModel.findOne({ email });

    if (!isExisted)
      return res.status(404).json({
        message: "user not found",
      });

    let comparePass = isExisted.comparePassword(password);

    if (!comparePass)
      return res.status(401).json({
        message: "Invalid credentials",
      });

    let token = isExisted.generateJWT();

    res.cookie("token", token);

    return res.status(200).json({
      message: "User loggedIn successfully",
      user: isExisted,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  loginController,
  registerController,
};
