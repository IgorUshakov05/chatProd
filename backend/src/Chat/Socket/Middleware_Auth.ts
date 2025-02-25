import type { Socket } from "socket.io";
export default function Middleware(socket: Socket, next: () => void) {
  try {
    let token = socket.handshake.headers.authorization;
    console.log(token, " middleware");
    next();
  } catch (e) {
    console.log(e);
    next();
  }
}
