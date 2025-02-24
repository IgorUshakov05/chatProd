import { Server } from "socket.io";
import SocketMessage from "../../types/socket_message";
import get_answer_ai from "../../database/Request/AI";

const initSocket = (server: any) => {
  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log(socket.handshake.headers);
    socket.on("joinRoom", ({ room }) => {
      socket.join(room);
      console.log("Пользователь подключился");
      socket.emit("message", {
        text: `Вы присоединились к комнате ${room}`,
        room,
      });
    });

    socket.on("leaveRoom", ({ room }) => {
      socket.leave(room);
      socket.emit("message", { text: `Вы покинули комнату ${room}`, room });
    });

    socket.on("message", (data) => {
      console.log(data);
      io.to(data.room).emit("message", { text: data.text, room: data.room }); // Отправляем сообщение в указанную комнату
    });

    socket.on("disconnect", () => {
      console.log("Пользователь отключился");
    });
  });

  return io;
};

export default initSocket;
