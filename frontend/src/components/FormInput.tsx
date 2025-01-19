import { observer } from "mobx-react";
import React from "react";

interface InputFormProps {
  text: string;
  handler_input: (text: string) => void;
  current_value: string;
}

const InputForm: React.FC<InputFormProps> = observer(({
  text,
  handler_input,
  current_value,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handler_input(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={text}
          className="block text-sm/6 font-medium text-gray-900"
        >
          {text}
        </label>
      </div>
      <div className="mt-2">
        <input
          id={text}
          name={text}
          type={text === "Пароль" ? "password" : "text"}
          onChange={handleChange}
          required
          value={current_value}
          autoComplete="current-password"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>
  );
})

export default InputForm;
