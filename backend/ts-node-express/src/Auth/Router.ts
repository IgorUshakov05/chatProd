import routerLogin from "./Login";
import { Router } from "express";
const router = Router();

export default router.use("/auth", routerLogin);
