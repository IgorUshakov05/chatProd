import { useMutation, useQuery } from "@tanstack/react-query";
import { login_user, registration_user, authentication } from "../api/Auth";
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
      localStorage.setItem("chat_id", data.data.id_chat || "");
      navigator(`/chat/${data.data.id_chat}`);
    },
  });
};

export const useAuthorization = () => {
  const { isLoading, isError, data, isSuccess } = useQuery<{
    success: boolean;
    message: string;
  }>({
    queryKey: ["auth"],
    queryFn: () => authentication(),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { isLoading, isError, data, isSuccess };
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
