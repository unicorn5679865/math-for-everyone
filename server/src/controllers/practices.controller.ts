import express from "express";
import { Practice, UserAnswer } from "../models";
import { TaskDocument } from "../models/task.model";
import keyBy from "lodash/keyBy";

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
    .get("/stats", async (req, res) => {
        const userAnswers = await UserAnswer.find({user: req.user!.id});
        const userAnswersMap = keyBy(userAnswers.map(m => m.toObject()), 'practiceId');
        
        return res.json(userAnswersMap);
    })
    .get("/:practiceId", async (req, res) => {
        const { practiceId } = req.params; 

        return res.json(await Practice.findById(practiceId).populate("tasks"));
    })
    .post("/:practiceId/check", async (req, res) => {
        const { practiceId } = req.params; 
        const userAnswers = req.body
        const practice = await Practice.findById(practiceId).populate<{tasks: TaskDocument[]}>("tasks");

        let mark = 0
        if (practice?.tasks) {
            const { tasks } = practice;

            const resultsMap = tasks.reduce((acc, {correctAnswer, _id: questionId}) => ({
                ...acc,
                [questionId]: userAnswers[questionId] && answerIsCorrect(userAnswers[questionId], correctAnswer),
            }), {});

            mark = Number(
                (Object.values(resultsMap).filter(Boolean).length / Object.keys(resultsMap).length).toFixed(1)
            ) * 10;

            await UserAnswer.updateOne({ user: req.user?.id, practiceId }, {$set: {result: mark}}, {upsert: true});

            return res.json({mark, results: resultsMap});
        }

        return res.sendStatus(202);
    })


export default router;