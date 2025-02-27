import { Server } from "socket.io";
import SocketMessage from "../../types/socket_message";
import get_answer_ai from "../../database/Request/AI";
import Middleware from "./Middleware_Auth";

const initSocket = (server: any) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
  // io.use(Middleware);
  io.on("connection", (socket) => {
    console.log(`⚡ Новый пользователь подключился: ${socket.id}`);
    socket.on("joinRoom", ({ room }) => {
      socket.join(room);
      console.log(`Пользователь ${socket.id} вошёл в комнату ${room}`);
      socket.emit("message", {
        text: `Вы присоединились к комнате ${room}`,
        room,
      });
    });

    socket.on("leaveRoom", ({ room }) => {
      socket.leave(room);
      socket.emit("message", { text: `Вы покинули комнату ${room}`, room });
    });

    socket.on("message", async (data: SocketMessage) => {
      console.log(data);
      io.to(data.room).emit("message", {
        text: data.text,
        room: data.room,
        from: "User",
      });
      // let messageAI = await get_answer_ai(data.text);
      // console.log(messageAI);
      // io.to(data.room).emit("message", {
      //   text: messageAI.message,
      //   error: messageAI.error,
      //   room: data.room,
      //   from: "Bot",
      // });
    });

    socket.on("disconnect", () => {
      console.log(`❌ Пользователь ${socket.id} отключился`);
    });
  });

  return io;
};

export default initSocket;
