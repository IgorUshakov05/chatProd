import routerLogin from "./Login";
import routerRegistration from "./Registration";

import { Router } from "express";
const router = Router();

export default router.use("/auth", routerLogin, routerRegistration);
