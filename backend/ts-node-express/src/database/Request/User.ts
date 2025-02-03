import UserSchema from "../Schema/UserSchema";
import { v4 } from "uuid";
import { Create_User, result_Create_User } from "../../types/create_user";
import User from "../Schema/UserSchema";
import Chat from "../Schema/ChatSchema";
import { encryptPassword, verifyPassword } from "../../secret/HashPassword";
export const create_user = async ({
  mail,
  password,
}: Create_User): Promise<result_Create_User> => {
  try {
    let find_user = await User.findOne({ mail });
    if (find_user)
      return { success: false, error: "Пользователь уже существует" };
    let current_user = await UserSchema.create({
      mail,
      hash_password: encryptPassword(password),
    });
    let new_chat = await Chat.create({});
    await current_user.chatList.push({ id: new_chat.id });
    await current_user.save();
    return { success: true, id: current_user.id, mail, id_chat: new_chat.id };
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
    console.log(find_user.chatList);
    let find_last_chat = await Chat.findOne({
      id: find_user.chatList[0].id,
    });
    if (!find_last_chat) {
      let new_chat = await Chat.create({});
      await find_user.chatList.push({ id: new_chat.id });
      await find_user.save();
      return { success: true, id: find_user.id, mail, id_chat: new_chat.id };
    }
    return {
      success: true,
      id: find_user.id,
      mail,
      id_chat: find_last_chat.id,
    };
  } catch (e) {
    console.log(e);
    return { success: false, error: "Ошибка при регистрации" };
  }
};
