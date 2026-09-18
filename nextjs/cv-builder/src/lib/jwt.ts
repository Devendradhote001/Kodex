import { JWTPayload } from "@/types/user.types";
import jwt from "jsonwebtoken";

export const generateJWT = (payload: JWTPayload): string => {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
};

export const verifyJwt = (token: string): any => {
  return jwt.verify(token, process.env.JWT_SECRET!);
};
