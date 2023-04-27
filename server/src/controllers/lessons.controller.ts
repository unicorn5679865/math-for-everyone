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
    })
    // .post("/:lessonId/:practiceId/check", async (req, res) => {
    //     const { lessonId, practiceId } = req.params;

    //     const userAnswers = req.body
    //     const questions =  await Question.find({practiceId})

    //     const isEverythingCorrect = questions.every((question, index) => question.correctAnswer === userAnswers[index] );

    //     if(!isEverythingCorrect) return res.send("Learn Math!")

    //     return res.send("Well Done");
    // });

export default router;