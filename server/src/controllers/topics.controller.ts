import express from "express";
import {Topic} from "../models";
import {Lesson} from "../models";

const router = express.Router();

router
    .get("/", async (req, res) => {
        return res.json({topics: await Topic.find({}), user: req.user});
    })
    .get("/:topicId/lessons", async (req, res) => {
        console.log(req.params);
        const { topicId } = req.params; 
        

        return res.json(
            await Lesson.find({topicId})
        );
    })

export default router;