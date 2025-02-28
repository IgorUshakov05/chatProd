import { Response, From } from "../types/ChatMessages";
import axios from "./base";
export const get_messages_on_chat = async (chatID: string) => {
  let { data, status } = await axios.get<{
    success: boolean;
    chat: {
      message: [{ _id: String; timestamp: String; sender: From; text: string }];
    };
  }>(`/chat/${chatID}`);
  return { success: data.success, messages: data.chat?.message, status };
};

export const get_all_chats = async () => {
  let { data } = await axios.get<Response>("/chat");
  if (!data.success) throw Error("Ошибка");
  return { success: data.success, chats: data.chats };
};
