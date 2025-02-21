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

export const insert_message_to_chat_on_id = async (
  id: string,
  isBot: string = "Bot",
  message: string
) => {
  try {
    let chat = await Chat.findOne({ id });
    if (!chat) {
      return { success: false, message: "Чат не найден" };
    }
    chat.message.push({ sender: isBot, text: message });
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


