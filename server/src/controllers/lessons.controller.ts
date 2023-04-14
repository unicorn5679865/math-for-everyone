import express from "express";
import Lesson from "../models/lesson.model";

const router = express.Router();

router.get("/", async (req, res) => {
    return res.json({lessons: await Lesson.find({}), user: req.user});
})

export default router;