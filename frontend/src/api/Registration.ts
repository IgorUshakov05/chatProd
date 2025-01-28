import { InputData } from "../types/InputForm";
import { RegistrationType } from "../types/RequestServer";
import axios from "./base";
const registration_user = async (data_user: InputData) => {
  try {
    let { data } = await axios.post<RegistrationType>(
      "/auth/registration",
      data_user
    );
    console.log(data);
    return data;
  } catch (error) {
    return { success: false };
  }
};

export default registration_user;
