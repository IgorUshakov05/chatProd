import React from "react";
import style from "../style/Chat.module.css";
function Chat() {
  return (
    <div className={`${style.content} flex flex-col justify-between mx-auto pb-3`}>
      <div className="h-100 bg-white">
        <input />
      </div>
      <div><input
  type="text"
  placeholder="Enter your message"
  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
</div>
    </div>
  );
}

export default Chat;
