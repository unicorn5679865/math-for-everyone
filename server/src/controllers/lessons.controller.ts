import express from "express";
import {Lesson} from "../models";

const router = express.Router();

router
    .get("/", async (req, res) => {
        return res.json({lessons: await Lesson.find({}), user: req.user});
    })
    .get("/:lessonId", async (req, res) => {
        const { lessonId } = req.params; 

        return res.json(await Lesson.findById(lessonId).populate({path: "practices", populate: {path: "tasks"}}));
    })

export default router;