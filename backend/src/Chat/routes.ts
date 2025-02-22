import { Router, Request, Response } from "express";
import {
  find_chat_by_id,
  insert_message_to_chat_on_id,
} from "../database/Request/Chat";
import { body, validationResult, check } from "express-validator";
const router = Router();

router.post(
  "/:id",
  [
    // Валидация параметра id из URL
    check("id").isUUID().withMessage("ID должен быть в формате UUID"),

    // Валидация поля message из тела запроса
    body("message").notEmpty().withMessage("Поле message не может быть пустым"),
    body("message").isString().withMessage("Поле message должно быть строкой"),
  ],
  async (req: Request, res: Response): Promise<any> => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
      }
      const { id } = <{ id: string }>req.params;
      console.log(req.params.id);
      const { message } = req.body;
      let insert_message = await insert_message_to_chat_on_id(
        id,
        "User",
        message
      );

      if (!insert_message.success) return res.status(500).json(insert_message);
      res.status(201).json({ success: false, message, from: "User" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, error: "Произошла ошибка на сервере" });
    }
  }
);

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
      if (!chat.success) return res.status(404).json(chat);
      return res.status(201).json(chat);
    } catch (e) {
      console.log(e);
      return res
        .status(404)
        .json({ success: false, message: "Не удалось найти чат" });
    }
  }
);
