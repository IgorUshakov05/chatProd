import React from "react";
import { From } from "../../types/ChatMessages";
import UserMessage from "./UserMessageItem";
import BotMessage from "./BotMessageItem";
function ChatMessages() {
  return (
    <div className="flex gap-5 flex-col pt-5 pb-5">
      <UserMessage
        message="Heawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wd"
        sender={From.User}
      />
      <BotMessage
        message="Heawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wd"
        sender={From.User}
      />
      <UserMessage
        message="Heawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wd"
        sender={From.User}
      />
      <UserMessage
        message="Heawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wd"
        sender={From.User}
      />
      <UserMessage
        message="Heawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wd"
        sender={From.User}
      />
      <UserMessage
        message="Heawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wd"
        sender={From.User}
      />
    </div>
  );
}

export default ChatMessages;
