import React from "react";
import Message from "../../types/ChatMessages";

function UserMessage(MessageInfo: Message) {
  return (
    <div className="flex justify-end">
      <div className="max-w-xs md:max-w-sm lg:max-w-md bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
        {MessageInfo.message}
      </div>
    </div>
  );
}

export default UserMessage;
