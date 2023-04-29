import express from "express";
import {Practice} from "../models";
import { TaskDocument } from "../models/task.model";
import deepEqual from "deep-equal";

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

        let isEverythingCorrect = false;
    
        if (practice?.tasks) {
            const { tasks } = practice;
            console.log(tasks);
            isEverythingCorrect = tasks.every(({correctAnswer}, index) => {
                console.log(correctAnswer, answers[index]);

                return deepEqual(correctAnswer, answers[index])
            });
        }

        const resultMsg = isEverythingCorrect ? "Красавчик" : "Два в дневник";

        return res.json({result: resultMsg});
    })


export default router;