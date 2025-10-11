import { Router } from "express";
import { CRegister, CLogin, CMe } from "../controllers/auth.controller.js";
import { MAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", CRegister);
router.post("/login", CLogin);
router.get("/me", MAuth, CMe);

export default router