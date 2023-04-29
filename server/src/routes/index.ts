import express from "express";
import { authGuard } from "../auth";
import lessonsController from "../controllers/lessons.controller";
import topicsController from "../controllers/topics.controller";
import practicesController from "../controllers/practices.controller";
import passport from "passport";

const router = express.Router();

export const apiRoutes = [
    router.post("/auth", passport.authenticate("google-one-tap"), (req, res) => {
        res.json({user: req.user})
    }),
    router.use("/lessons",authGuard, lessonsController),
    router.use("/topics", authGuard, topicsController),
    router.use("/practices", authGuard, practicesController),
]