import { InputData } from "../types/InputForm";
import { RegistrationType } from "../types/RequestServer";
import axios from "./base";
const registration_user = async (data_user: InputData) => {
  let result = await axios.post<RegistrationType>(
    "/auth/registration",
    data_user
  );

  return result;
};

export default registration_user;
