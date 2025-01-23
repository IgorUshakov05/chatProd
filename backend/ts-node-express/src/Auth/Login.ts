import { Router, Request, Response } from "express";
const router = Router();
interface ResponseJSON {
  success: boolean;
  message?: string;
}
router.post("/login", async (req: Request, res: Response) => {
  try {
    res.json({ message: "Hello world" });
  } catch (e) {
    console.log("Ошика при логине в файле Login.ts", e);
  }
});

export default router;
