import React from "react";
import { useAuthorization } from "./Auth";
import { Navigate } from "react-router-dom";
import LoginPage from "../components/ChatComponent/Loading";
import userStore from "../store";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  let { isLoading, isError, data, isSuccess } = useAuthorization();
  console.log(userStore.chatID);
  console.log(isLoading, isError, isSuccess, data);
  if (isLoading) {
    return <LoginPage />;
  }
  if (!isSuccess) {
    return <Navigate to={"/login"} />;
  }
  return <h1>{children}</h1>;
}
