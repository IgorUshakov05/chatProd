import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
const router = Router();
import create_user from "../database/Request/User";
router.post(
  "/registration",
  [
    body("mail").isEmail().withMessage("Некорректный email").normalizeEmail(),
    body("password")
      .isLength({ min: 8, max: 30 })
      .withMessage("Пароль должен быть не менее 8, не более 30 символов"),
  ],
  async (req: Request, res: Response): Promise<any> => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res
          .status(400)
          .json({ success: false, errorList: errors.array() });
      const { mail, password } = req.body;
      const save_user = await create_user({ mail, password });
      if (!save_user.success) return res.status(401).json({ save_user });
      res.status(201).json(save_user);
    } catch (e) {
      console.error("Ошибка при регистрации в файле Registration.ts", e);
      return res.status(500).json({ success: false, error: "Ошибка сервера" }); // Серверная ошибка
    }
  }
);

export default router;
