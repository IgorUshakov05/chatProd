import { Router, Request, Response } from "express";
const router = Router();

router.post("/login", async (req: Request, res: Response) => {
  try {
    res.status(201).json({ message: "Hello world" });
  } catch (e) {
    res.status(401).json({ message: "Igor" });
    console.log("Ошика при логине в файле Login.ts", e);
  }
});

export default router;
