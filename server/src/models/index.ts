import mongoose from 'mongoose';

import Lesson from './lesson.model';
import Practice from './practice.model';
import Task from './task.model';
import Topic from './topic.model';
import User from './user.model';
import UserAnswer from './userAnswer.model';


const initDB = () => {
    mongoose.connect(`${process.env.MONGO_URI}`);

    const db = mongoose.connection;
    db.once("open", () => console.log("Connected to Mongo DB!!"));
    db.on("error", (error) => console.error(error));
};

export { initDB, User, Lesson, Practice, Task, Topic, UserAnswer};
