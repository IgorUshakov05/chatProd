"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const initSocket = (server) => {
    const io = new socket_io_1.Server(server);
    io.on("connection", (socket) => {
        console.log("Новое подключение:", socket.id);
        socket.on("message", (data) => {
            console.log("Получено сообщение:", data);
            io.emit("message", data);
        });
        socket.on("disconnect", () => {
            console.log("Клиент отключен:", socket.id);
        });
    });
    return io;
};
exports.default = initSocket;
