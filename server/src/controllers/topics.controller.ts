import express from "express";
import {Topic} from "../models";
import {Lesson} from "../models";

const router = express.Router();

router
    .get("/", async (req, res) => {
        const { withLessons } = req.query;

        let topics;

        if (withLessons) {
            topics = await Topic.find({}).populate("lessons").exec();
        } else {
            topics = await Topic.find({})
        }
        
        return res.json({topics: topics, user: req.user});
    })
    .get("/:topicId/lessons", async (req, res) => {
        console.log(req.params);
        const { topicId } = req.params; 
        

        return res.json(
            await Lesson.find({topicId})
        );
    })

export default router;