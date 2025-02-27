import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { observer } from "mobx-react";
import { socketStore, chatStore } from "../../store";
import { From } from "../../types/ChatMessages";

function InputMessage() {
  function sendMessageInput() {
    socketStore.sendMessage();
    chatStore.setOneMessage({ text: socketStore.message, sender: From.User });
    socketStore.clearInput();
  }
  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Enter your message"
          value={socketStore.message}
          onInput={(e) => socketStore.typing(e.currentTarget.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button
          disabled={socketStore.message.length <= 0 ? true : false}
          className="disabled:opacity-30"
        >
          {}
          <PaperAirplaneIcon
            className="h-7 w-7 text-gray-500 cursor-pointer"
            onClick={sendMessageInput}
          />
        </button>
      </div>
    </div>
  );
}

export default observer(InputMessage);
