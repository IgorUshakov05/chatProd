import { Router, Request, Response } from "express";
import { find_chat_by_id } from "../database/Request/Chat";
const router = Router();

router.post("/:id", async (req: Request, res: Response) => {
  try {
  } catch (e) {
    console.log(e);
  }
});
export default router.get(
  "/:id",
  async (req: Request, res: Response): Promise<any> => {
    try {
      let id: string = req.params.id;
      if (!id)
        return res
          .status(404)
          .json({ success: false, message: "Чат не найден" });
      let chat = await find_chat_by_id(id);
      return res.status(201).json(chat);
    } catch (e) {
      console.log(e);
      return res
        .status(404)
        .json({ success: false, message: "Не удалось найти чат" });
    }
  }
);
