import express from "express";
import Lesson from "../models/lesson.model";

const router = express.Router();

router
    .get("/", async (req, res) => {
        return res.json({lessons: await Lesson.find({}), user: req.user});
    })
    .get("/:lessonId", async (req, res) => {
        const { lessonId } = req.params;

        return res.json(await Lesson.findById(lessonId));
    });

export default router;