import { Router, Request, Response } from "express";
import { find_chat_by_id } from "../database/Request/Chat";
const router = Router();
export default router.get(
  "/chat/:id",
  async (req: Request, res: Response): Promise<any> => {
    try {
      let id = req.params.id;
      if (!id)
        return res
          .status(404)
          .json({ success: false, message: "Чат не найден" });
      let chat = await find_chat_by_id(id);
      return res.status(201).json(chat);
    } catch (e) {}
  }
);
