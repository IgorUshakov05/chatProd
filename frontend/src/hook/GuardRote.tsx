import React from "react";
import { useAuthorization } from "./Auth";
import { Navigate } from "react-router-dom";
import LoginPage from "../components/ChatComponent/Loading";
import { authStore } from "../store";
import { observer } from "mobx-react";
function AuthGuard({ children }: { children: React.ReactNode }) {
  let { isLoading, data, isSuccess } = useAuthorization();
  authStore.setAuth(data?.success);
  if (isLoading) {
    return <LoginPage />;
  }
  if (!isSuccess) {
    return <Navigate to={"/login"} />;
  }
  return <>{children}</>;
}

export default observer(AuthGuard);
