import React from "react";
import style from "../style/Chat.module.css";

import InputMessage from "../components/ChatComponent/InputMessage";
import Setting from "../components/ChatComponent/Setting";
import ChatMessages from "../components/ChatComponent/ChatMessages";

function Chat() {
  return (
    <div className="h-lvh w-11/12 m-auto max-h-screen relative">
      <Setting />

      <div className={`${style.content} flex flex-col justify-between mx-auto`}>
        <div className={`${style.scroll} h-full overflow-y-scroll overflow-x-hidden`}>
          <ChatMessages />
        </div>
        <InputMessage />
      </div>
    </div>
  );
}

export default Chat;
