import React from "react";
import { useNewChat } from "../../hook/NewChat";

function NewChat() {
  let { mutate } = useNewChat();
  return (
    <li>
      <button
        onClick={() => mutate()}
        className={`flex items-center border-2 border-blue-200 py-1.5 text-nowrap overflow-hidden px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-stone-600 hover:text-stone-800 dark:hover:text-white hover:bg-stone-200 focus:bg-stone-200 focus:text-stone-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70 w-full`}
      >
        Новый чат
      </button>
    </li>
  );
}

export default NewChat;
