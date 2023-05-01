import express from "express";
import { Practice, UserAnswer } from "../models";
import { TaskDocument } from "../models/task.model";

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
    
        let mark = 0;
        if (practice?.tasks) {
            const { tasks } = practice;

            const results = tasks.map(({correctAnswer, _id: id}) => answers[id] && answerIsCorrect(answers[id], correctAnswer));

            mark = Number((results.filter(Boolean).length / tasks.length).toFixed(1)) * 10;
        }

        await UserAnswer.updateOne({ user: req.user?.id, practiceId }, {$set: {result: mark}}, {upsert: true});

        return res.json({result: mark});
    })


export default router;