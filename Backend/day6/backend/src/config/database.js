import mongoose from "mongoose";

export let connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb connected");
  } catch (error) {
    console.log("Connection failed", error);
  }
};
