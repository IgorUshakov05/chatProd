import UserSchema from "../Schema/UserSchema";
import { v4 } from "uuid";
import { Create_User, result_Create_User } from "../../types/create_user";
import User from "../Schema/UserSchema";
import { encryptPassword } from "../../secret/HashPassword";
const create_user = async ({
  mail,
  password,
}: Create_User): Promise<result_Create_User> => {
  try {
    let find_user = await User.findOne({ mail });
    if (find_user)
      return { success: false, error: "Пользователь уже существует" };
    let id = v4();
    await UserSchema.create({
      id,
      mail,
      hash_password: encryptPassword(password),
    });
    return { success: true, id };
  } catch (e) {
    console.log(e);
    return { success: false, error: "Ошибка при регистрации" };
  }
};

export default create_user;
