import express from "express";
import Topic from "../models/topic.model";
import Lesson from "../models/lesson.model";

const router = express.Router();

router
    .get("/", async (req, res) => {
        return res.json({topics: await Topic.find({}), user: req.user});
    })
    .get("/:topicId/lessons", async (req, res) => {
        console.log(req.params);
        const { topicId } = req.params; 

        console.log( await Lesson.find({}));
        

        return res.json(
            await Lesson.find({topicId})
        );
    })

export default router;