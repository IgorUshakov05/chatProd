import UserSchema from "../Schema/UserSchema";
import { v4 } from "uuid";
import { Create_User, result_Create_User } from "../../types/create_user";
import User from "../Schema/UserSchema";
import { encryptPassword, verifyPassword } from "../../secret/HashPassword";
export const create_user = async ({
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
    return { success: true, id, mail };
  } catch (e) {
    console.log(e);
    return { success: false, error: "Ошибка при регистрации" };
  }
};

export const find_user = async ({
  mail,
  password,
}: Create_User): Promise<result_Create_User> => {
  try {
    let find_user = await User.findOne({ mail });
    if (!find_user) return { success: false, error: "Пользователь не найден" };
    if (!find_user.hash_password) {
      return { success: false, error: "Пароль не найден" };
    }
    let split_password = find_user.hash_password.split("|");
    let verify_password = await verifyPassword(
      password,
      split_password[0],
      split_password[1]
    );
    if (!verify_password) return { success: false, error: "Пароль неверный" };
    return { success: true, id: find_user.id, mail: find_user.mail || "" };
  } catch (e) {
    console.log(e);
    return { success: false, error: "Ошибка при регистрации" };
  }
};
