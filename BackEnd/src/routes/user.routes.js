import { Router } from "express";
import { registerUser } from "../controller/user.controller.js";
import upload from "../middleware/user.middleware.js";

const router = Router();

router.post("/register", upload.none(), registerUser);


export default router;