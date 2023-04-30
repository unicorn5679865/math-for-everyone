import express from "express";
import {Practice} from "../models";
import { TaskDocument } from "../models/task.model";
import deepEqual from "deep-equal";

const answerIsCorrect = (userAnswer, correctAnswer) => {
    if (typeof correctAnswer === 'string' || typeof correctAnswer === 'number') {
        return userAnswer === correctAnswer;
    }

    if (Array.isArray(correctAnswer)) {
        if (correctAnswer.length !== userAnswer.length) {return false;}

        return correctAnswer.every(answer => userAnswer.includes(answer));
    }

    return false;
};

const router = express.Router();

router
    .get("/", async (req, res) => {
        return res.json({lessons: await Practice.find({}), user: req.user});
    })
    .get("/:practiceId", async (req, res) => {
        const { practiceId } = req.params; 

        return res.json(await Practice.findById(practiceId).populate("tasks"));
    })
    .post("/:practiceId/check", async (req, res) => {
        const { practiceId } = req.params; 
        const answers = req.body
        const practice = await Practice.findById(practiceId).populate<{tasks: TaskDocument[]}>("tasks");
    
        let mark = "";
        if (practice?.tasks) {
            const { tasks } = practice;

            const results = tasks.map(({correctAnswer}, index) => answers[index] && answerIsCorrect(answers[index], correctAnswer));

            mark = Number(results.filter(Boolean).length / tasks.length).toFixed(1);
        }

        return res.json({result: Number(mark) * 10});
    })


export default router;