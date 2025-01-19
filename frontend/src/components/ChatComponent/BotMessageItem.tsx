import React from "react";

import Message from "../../types/ChatMessages";

function BotMessage(message: Message) {
  return <pre>{message.message}</pre>;
}

export default BotMessage;
