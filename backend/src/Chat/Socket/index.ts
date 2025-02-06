import { Server } from "socket.io";
import SocketMessage from "../../types/socket_message";

const initSocket = (server: any) => {
  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log("Новое подключение:", socket.id);

    socket.on("chat message", (data) => {
      console.log(data);
      let message: SocketMessage = JSON.parse(data);
      io.emit("chat message", message.text);
    });

    socket.on("disconnect", () => {
      console.log("Клиент отключен:", socket.id);
    });
  });

  return io;
};

export default initSocket;
