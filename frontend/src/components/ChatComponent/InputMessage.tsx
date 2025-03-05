import React, { useEffect, useRef } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { observer } from "mobx-react";
import { socketStore, chatStore } from "../../store";

function InputMessage() {
  const input = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, []);
  function handleKeyDown(e: React.KeyboardEvent) {
    if (
      e.key === "Enter" &&
      !e.shiftKey &&
      socketStore.message.trim().length > 0
    ) {
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
        <textarea
          placeholder="Enter your message"
          value={socketStore.message}
          ref={input}
          onKeyDown={handleKeyDown}
          onInput={(e) => socketStore.typing(e.currentTarget.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none max-h-12 resize-none"
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
