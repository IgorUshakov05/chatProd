import mongoose, { Schema } from "mongoose";
import { v4 } from "uuid";
const ChatSchema = new Schema({
  id: { type: String, unique: true, default: () => v4() },
  message: [
    {
      sender: {
        type: String,
        default: "Bot",
      },
      text: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

const Chat = mongoose.model("chats", ChatSchema);

export default Chat;
