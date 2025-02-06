import Chat from "../Schema/ChatSchema";
export const find_chat_by_id = async (id: string) => {
  try {
    let chat = await Chat.findOne({ id }).select("message");
    if (!chat) return { success: false, message: "Чат не найден" };
    return { success: true, chat, message: "Успех!" };
  } catch (e) {
    return { success: false, message: "Не удалось найти чат" };
  }
};
