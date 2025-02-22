import { From } from "../types/ChatMessages";
import axios from "./base";
export const get_messages_on_chat = async (chatID: string) => {
  let { data } = await axios.get<{
    success: boolean;
    chat: {
      message: [{ _id: String; timestamp: String; sender: From; text: string }];
    };
  }>(`/chat/${chatID}`);
  console.log(data);
  return { success: data.success, messages: data.chat?.message };
};
