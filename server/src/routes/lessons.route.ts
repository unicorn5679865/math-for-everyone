import express from "express";
import { authGuard } from "../auth";
import lessonsController from "../controllers/lessons.controller";

const router = express.Router();

router.use(
    "/lessons",
    authGuard,
    lessonsController
);

export default router;