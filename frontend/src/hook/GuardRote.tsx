import React from "react";
import { useAuthorization } from "./Auth";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  let { isLoading, isError, data, isSuccess } = useAuthorization();
  console.log(isLoading)
  return isSuccess && <h1>{children}</h1>;
}
