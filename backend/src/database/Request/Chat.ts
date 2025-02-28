import Chat from "../Schema/ChatSchema";
import User from "../Schema/UserSchema";

export const find_chat_by_id = async (id: string) => {
  try {
    let chat = await Chat.findOne({ id }).select("message");
    if (!chat) return { success: false, message: "Чат не найден" };
    return { success: true, chat, message: "Успех!" };
  } catch (e) {
    return { success: false, message: "Не удалось найти чат" };
  }
};

export const find_all_chat_of_user = async (userID?: string) => {
  try {
    if (!userID) return { success: false, message: "ID не указан" };
    let chats = await User.findOne({ id: userID });
    if (!chats) return { success: false, message: "Пользователь не найден!" };
    if (!chats?.chatList.length)
      return { success: false, message: "Чатов нет!" };
    let chatList = chats.chatList.map((chat) => chat.id);
    let get_caht = await Chat.find({ id: { $in: chatList } });
    return { success: true, chats: get_caht, message: "Успех!" };
  } catch (e) {
    return { success: false, message: "Не удалось найти чат" };
  }
};
export const insert_message_to_chat_on_id = async (
  id: string = "",
  isBot: "User"|"Bot" = "Bot",
  message: string,
  user_time?: number,
) => {
  try {
    let chat = await Chat.findOne({ id });
    if (!chat) {
      return { success: false, message: "Чат не найден" };
    }
    chat.message.push({ sender: isBot, text: message, timestamp: user_time });
    await chat.save();

    return { success: true, message: "Сообщение успешно добавлено" };
  } catch (error) {
    console.error("Ошибка при добавлении сообщения:", error);
    return {
      success: false,
      message: "Произошла ошибка при добавлении сообщения",
    };
  }
};
