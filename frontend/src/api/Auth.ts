import { InputData } from "../types/InputForm";
import { ResponseAuth } from "../types/RequestServer";
import axios from "./base";
export const registration_user = async (data_user: InputData) =>
  axios.post<ResponseAuth>("/auth/registration", data_user);

export const login_user = async (data_user: InputData) =>
  axios.post<ResponseAuth>("/auth/login", data_user);
