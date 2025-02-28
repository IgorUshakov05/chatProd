export default interface Message {
  sender: "User" | "Bot";
  text: string
}

export enum From {
  Bot = "Bot",
  User = "User",
}

interface Text {
  sender: string;
  text: string;
  _id: string;
  timestamp: string;
}
export interface Chat {
  id: string;
  message: Text[];
}

export interface Response {
  success: boolean;
  message?: string;
  chats?: Chat[];
}

export interface SocketMessage {
  text: string;
  error: string;
  connection: boolean;
  room: string;
  from: "User" | "Bot";
  date_time: number;
}
