import React from "react";
interface InputFormProps {
  text: string;
  handler_input: (data: any) => void;
  current_value: string;
}

const InputForm = React.memo(
  ({ text, handler_input, current_value }: InputFormProps) => {
    return (
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor={text === "Логин" ? "login" : "password"}
            className="block text-sm/6 font-medium text-gray-900"
          >
            {text}
          </label>
        </div>
        <div className="mt-2">
          <input
            id={text === "Логин" ? "login" : "password"}
            name={text === "Логин" ? "login" : "password"}
            type={text === "Логин" ? "email" : "password"}
            onChange={handler_input}
            required
            value={current_value}
            autoComplete={text === "Логин" ? "login" : "password"}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>
    );
  }
);

export default InputForm;
