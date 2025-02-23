import { Server } from "socket.io";
import SocketMessage from "../../types/socket_message";
import get_answer_ai from "../../database/Request/AI";

const initSocket = (server: any) => {
  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log("Новое подключение:", socket.id);

    socket.on("chat message", async (data) => {
      console.log(data);
      let message: SocketMessage = JSON.parse(data);
      let ai_respond = await get_answer_ai(message.text);
      await io.emit("chat message", JSON.stringify(ai_respond));
    });

    socket.on("disconnect", () => {
      console.log("Клиент отключен:", socket.id);
    });
  });

  return io;
};
// get_answer_ai("напиши биографию дурова!");
export default initSocket;
