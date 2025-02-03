import "dotenv/config";
import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import chat_router from "./Chat/routes";
import auth_router from "./Auth//Router";
import cors from "cors";
dotenv.config();
const app: Express = express();
app.use(cors({ origin: ["http://localhost:3000"] }));
const port = process.env.PORT;
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("TypeScript Server");
});

app.use(auth_router, chat_router);
const start = async () => {
  try {
    let database = await mongoose.connect(process.env.DATABASE_URL || "");
    console.log("Подключение к бд");
    await app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
