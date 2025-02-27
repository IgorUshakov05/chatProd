import React from "react";
import { From } from "../../types/ChatMessages";
import UserMessage from "./UserMessageItem";
import { chatStore } from "../../store";
import BotMessage from "./BotMessageItem";
import { observer } from "mobx-react";
function ChatMessages() {
  return (
    <div className="flex gap-5 flex-col pt-5 pb-5">
      {chatStore.messages.map((message, index) => {
        if (message.sender === From.User) {
          return (
            <UserMessage
              key={index}
              text={message.text}
              sender={From.User}
            />
          );
        } else {
          return (
            <BotMessage text={message.text} key={index} sender={From.Bot} />
          );
        }
      })}
    </div>
  );
}

export default observer(ChatMessages);
