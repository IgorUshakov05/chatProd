import type { Socket } from "socket.io";
export default function Middleware(socket: Socket, next: any) {
  try {
    let token = get_bearer(socket.handshake.headers.authorization);
    if (!token) {
      let err = new Error("Authentication error");
      err.message = "Токен невалдиный";
      return next(err);
    }
    console.log(token, " токен");
    next();
  } catch (e) {
    console.log(e);
    let err = new Error("Server error");
    err.message = "Ошибка сервера";
    next(err);
  }
}

const get_bearer = (header: string | undefined): string | undefined => {
  try {
    return header?.split("Bearer")[1];
  } catch (e) {
    return undefined;
  }
};
