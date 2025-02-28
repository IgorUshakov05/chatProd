import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { observer } from "mobx-react";
import { socketStore, chatStore } from "../../store";

function InputMessage() {
  // Обработчик для нажатия клавиши "Enter"
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && socketStore.message.trim().length > 0) {
      socketStore.sendMessage(chatStore.chatID);
      socketStore.clearInput();
    }
  }

  // Обработчик для клика по кнопке
  function handleClick() {
    if (socketStore.message.trim().length > 0) {
      socketStore.sendMessage(chatStore.chatID);
      socketStore.clearInput();
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Enter your message"
          value={socketStore.message}
          onKeyDown={handleKeyDown} // Обработчик нажатия клавиши "Enter"
          onInput={(e) => socketStore.typing(e.currentTarget.value)} // Обновление состояния
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button
          disabled={socketStore.message.length <= 0}
          className="disabled:opacity-30"
          onClick={handleClick}
        >
          {""}
          <PaperAirplaneIcon className="h-7 w-7 text-gray-500 cursor-pointer" />
        </button>
      </div>
    </div>
  );
}

export default observer(InputMessage);
