import express from "express";
import { authenticateUser } from "../controllers/auth.controller";

const router = express.Router();

router.post("/auth", authenticateUser); // (This is actually /auth POST route)

export default router;