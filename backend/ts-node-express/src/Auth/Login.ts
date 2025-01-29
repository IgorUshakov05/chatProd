import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
const router = Router();
import { find_user } from "../database/Request/User";
import { create_jwt_token } from "../token/jwt";
router.post(
  "/login",
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
      const save_user = await find_user({ mail, password });
      if (!save_user.success) return res.status(404).json({ save_user });
      let token = create_jwt_token({
        mail: save_user.mail || "",
        id: save_user.id || "",
      });
      return res.status(201).json({ success: true, ...token });
    } catch (e) {
      console.error("Ошибка при регистрации в файле Registration.ts", e);
      return res.status(500).json({ success: false, error: "Ошибка сервера" });
    }
  }
);

export default router;
