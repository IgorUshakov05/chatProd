import React, { useCallback, useReducer, useMemo } from "react";
import { Link } from "react-router-dom";
import InputForm from "../components/FormInput";
import { ActionType, InputData, InputType } from "../types/InputForm";
import { useAuthRegistration } from "../hook/Auth";
import Loader from "../components/Loader";
const JoinPage = () => {
  let [dataForm, dispatch] = useReducer(reducer, { mail: "", password: "" });
  let { mutate, isError, isLoading } = useAuthRegistration(dataForm);
  function reducer(state: InputData, action: ActionType) {
    console.log(state);
    switch (action.type) {
      case InputType.LOGIN:
        return { ...state, mail: action.payload };
      case InputType.PASSWORD:
        return { ...state, password: action.payload };
      default:
        return { ...state };
    }
  }
  const handleLoginChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ payload: e.target.value, type: InputType.LOGIN });
    },
    []
  );
  const loginProps = useMemo(
    () => ({
      current_value: dataForm.mail,
      handler_input: handleLoginChange,
      text: "Логин",
    }),
    [dataForm.mail, handleLoginChange]
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ payload: e.target.value, type: InputType.PASSWORD });
    },
    []
  );
  const passwordProps = useMemo(
    () => ({
      current_value: dataForm.password,
      handler_input: handlePasswordChange,
      text: "Пароль",
    }),
    [dataForm.password, handlePasswordChange]
  );
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="/WebHunt.png"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Регистрация
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {isError && (
          <h4 className="text-red-600">Пользователь уже существует</h4>
        )}
        <div className="space-y-6">
          <InputForm {...loginProps} />
          <InputForm {...passwordProps} />
          <div>
            {isLoading ? (
              <Loader />
            ) : (
              <button
                disabled={isLoading}
                style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                onClick={() => mutate()}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Создать
              </button>
            )}
          </div>
        </div>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Уже есть аккаунт?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Войти в аккаунт
          </Link>
        </p>
      </div>
    </div>
  );
};
export default JoinPage;
