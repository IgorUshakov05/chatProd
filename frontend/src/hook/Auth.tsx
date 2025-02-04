import { useMutation } from "@tanstack/react-query";
import { login_user, registration_user } from "../api/Auth";
import { InputData } from "../types/InputForm";
import { useNavigate } from "react-router-dom";

export const useAuthRegistration = (data: InputData) => {
  const navigator = useNavigate();
  return useMutation(() => registration_user(data), {
    onError: (error: any) => {
      console.log("Ошибка:", error.response?.data.save_user.error);
    },
    onSuccess: (data) => {
      localStorage.setItem("access", data.data.access || "");
      localStorage.setItem("refresh", data.data.refresh || "");
      navigator(`/chat/${data.data.id_chat}`);
    },
  });
};

export const useAuthLogin = (data: InputData) => {
  const navigator = useNavigate();
  return useMutation(() => login_user(data), {
    onError: (error: any) => {
      console.log(error);
    },
    onSuccess: (data) => {
      localStorage.setItem("access", data.data.access || "");
      localStorage.setItem("refresh", data.data.refresh || "");
      navigator(`/chat/${data.data.id_chat}`);
    },
  });
};
