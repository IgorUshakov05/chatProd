import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

function InputMessage() {
  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Enter your message"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        <PaperAirplaneIcon className="h-7 w-7 text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
}

export default InputMessage;
