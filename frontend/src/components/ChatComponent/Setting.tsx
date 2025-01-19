import React, { useState } from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

function Setting() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute w-full">
      {/* Иконка настроек */}
      <div className="pt-4 cursor-pointer" onClick={toggleMenu}>
        <Cog6ToothIcon className="h-6 w-6 text-gray-500 hover:text-gray-700" />
      </div>

      {/* Выпадающий список */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-4/5 left-0 m-auto bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Настройка 2
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Настройка 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Setting;
