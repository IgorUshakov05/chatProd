import routerLogin from "./Login";
import routerRegistration from "./Registration";
import routerAuthentication from "./Authentication";

import { Router } from "express";
const router = Router();

export default router.use(
  "/auth",
  routerLogin,
  routerRegistration,
  routerAuthentication
);
