import express from "express";
import {Lesson, Practice, UserAnswer} from "../models";
import { PracticeDocument } from "../models/practice.model";

const router = express.Router();

router
    .get("/", async (req, res) => {
        return res.json({lessons: await Lesson.find({}), user: req.user});
    })
    .get("/:lessonId", async (req, res) => {
        const { lessonId } = req.params;

        const lessonWithTasks = await Lesson.findById(lessonId).populate<{practices: PracticeDocument[]}>({path: "practices", populate: {path: "tasks"}});

        return res.json(lessonWithTasks);
    })
    .get("/:lessonId/progress", async (req, res) => {
        const { lessonId } = req.params;

        const lesson = await Lesson.findById(lessonId);

        const userAnswers = (await UserAnswer.find({
            user: req.user!.id,
            practiceId: {$in: lesson!.practices},
        })).reduce((acc, userAnswer) => {
            acc[userAnswer.practiceId] = userAnswer.result 
            return acc;
        }, {});

        return res.json(userAnswers);
    })

export default router;