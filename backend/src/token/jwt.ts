import jwt from "jsonwebtoken";
import { create_jwt, token } from "../types/create_jwt";
export const create_jwt_token = ({ mail, id }: create_jwt): token => {
  const access = jwt.sign({ mail, id }, process.env.ACCESS_SECRET || "", {
    algorithm: "HS256",
    expiresIn: "1h",
  });

  const refresh = jwt.sign({ mail, id }, process.env.ACCESS_SECRET || "", {
    algorithm: "HS256",
    expiresIn: "1m",
  });
  return { access, refresh };
};



