import { cookies } from "next/headers";
import { verifyJwt } from "./jwt";

export const currentUser = async () => {
  let cookieStore = await cookies();

  let token = cookieStore.get("token")?.value;

  if (!token) throw new Error("token not found");

  let decode = verifyJwt(token);

  if (!decode) throw new Error("Unauthorized user");

  return decode.userId;
};
