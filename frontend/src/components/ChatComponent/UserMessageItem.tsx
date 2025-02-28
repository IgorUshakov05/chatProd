import React from "react";
import Message from "../../types/ChatMessages";

function UserMessage(MessageInfo: Message & {ref:React.Ref<HTMLDivElement>}) {
  return (
    <div className="flex justify-end" ref={MessageInfo.ref}>
      <div className="max-w-xs md:max-w-sm lg:max-w-md bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
        {MessageInfo.text}
      </div>
    </div>
  );
}

export default UserMessage;
