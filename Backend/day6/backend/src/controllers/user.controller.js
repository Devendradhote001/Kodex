import { UserModel } from "../models/user.model.js";

export let registerController = async (req, res) => {
  let { name, email, mobile, password } = req.body;

  if (!name || !email || !mobile || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  let newUser = await UserModel.create({
    name,
    email,
    mobile,
    password,
  });

  return res.status(201).json({
    message: "User registered",
    user: newUser,
  });
};

export let getAllUserController = async (req, res) => {
  try {
    let allUsers = await UserModel.find();

    return res.status(200).json({
      message: "User fetched successfully",
      users: allUsers,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error ",
    });
  }
};
