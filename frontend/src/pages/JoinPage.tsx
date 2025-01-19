import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import UserStore from "../store/index";
import InputForm from "../components/FormInput";
const JoinPage = observer(() => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="/WebHunt.png"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Регистрация аккаунта
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <InputForm
            text={"Логин"}
            handler_input={UserStore.setLogin}
            current_value={UserStore.user.login}
          />

          <InputForm
            text={"Пароль"}
            handler_input={UserStore.setPassword}
            current_value={UserStore.user.password}
          />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Создать
            </button>
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
});

export default JoinPage;
