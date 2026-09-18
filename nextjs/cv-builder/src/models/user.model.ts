import { IUser } from "@/types/user.types";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Document from "next/document";

interface IUserDocument extends Document, IUser {
  comparePass(password: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<IUserDocument>(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "password is required"],
      minlength: [6, "Minimum 6 characters are required"],
    },
    mobile: {
      type: String,
      trim: true,
      minlength: [10, "Minimum 10 digits are required"],
      maxlength: [10, "Maximum 10 digits are required"],
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", function (): void {
  if (!this.isModified("password")) return;

  this.password = bcrypt.hashSync(this.password, 10);
});

userSchema.methods.comparePass = function (candidatePassword: string): boolean {
  return bcrypt.compareSync(candidatePassword, this.password);
};

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
export default UserModel;
