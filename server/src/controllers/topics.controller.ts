import express from "express";
import {Topic, UserAnswer} from "../models";
import {Lesson} from "../models";
import { PracticeDocument } from "../models/practice.model";

const router = express.Router();

router
    .get("/", async (req, res) => {
        const { withLessons, withFinalResults } = req.query;

        let topics;

        if (withLessons) {
            topics = await Topic.find({}).populate("lessons").exec();
        } else if (withFinalResults) {
            topics = await Topic.find({}).populate({path: "finalPractice", populate: {path: "userResults", match: { user: req.user!.id}}}).exec();
        } else {
            topics = await Topic.find({});
        }

        
        return res.json({topics: topics});
    })
    .get("/:topicId/lessons", async (req, res) => {
        console.log(req.params);
        const { topicId } = req.params; 
        

        return res.json(
            await Lesson.find({topicId})
        );
    })
    .get("/:topicId/final-practice", async (req, res) => {
        const { topicId } = req.params;

        const topicWithFinalPracticeWithTasks = await Topic.findById(topicId).populate<{finalPractice: PracticeDocument}>({path: "finalPractice", populate: {path: "tasks"}});

        return res.json(topicWithFinalPracticeWithTasks?.finalPractice);
    })

export default router;