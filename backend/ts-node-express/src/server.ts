import "dotenv/config";
import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import chat_router from "./Chat/routes";
import auth_router from "./Auth/Router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
app.use(auth_router);
app.use("/chat", chat_router);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("chat message", (msg: string) => {
    console.log(msg);
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const start = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL || "");
    console.log("Подключение к бд");

    server.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
