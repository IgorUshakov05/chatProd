import React from "react";
import Message from "../../types/ChatMessages";

function UserMessage(
  MessageInfo: Message & { ref: React.Ref<HTMLDivElement> }
) {
  const date = new Date(MessageInfo.timestamp);
  const formattedDate = `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="flex justify-end" ref={MessageInfo.ref}>
      <div className="max-w-xs md:max-w-sm lg:max-w-md bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-lg">
        <pre>{MessageInfo.text}</pre>
        <div className="text-xs text-gray-200 mt-1">{formattedDate}</div>
      </div>
    </div>
  );
}

export default UserMessage;
