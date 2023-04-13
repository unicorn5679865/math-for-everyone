import mongoose from "mongoose";
import dotenv from "dotenv";
import Lesson from "../models/lesson.model"
dotenv.config();

mongoose.connect(`${process.env.MONGO_URI}`);

const lessons = [
    {
        name: "функция",
        link: "google.com"
    },
    {
        name: "trogometriya",
        link: "vk.com"
    }
]

const db = mongoose.connection;
db.once("open", async () => {
    console.log("Connected to Mongo DB!!");
    await Lesson.deleteMany({});
    for (let lesson of lessons) {
        // let existingLesson = await Lesson.findOne({name: lesson.name});
        // if (!existingLesson) {
            const newLesson = await new Lesson({
                name: lesson.name,
                link: lesson.link,
            });
            await newLesson.save();
            console.log('добавлено');
        // }
    }
    console.log('закончено')
    process.exit();
}
);
db.on("error", (error) => console.error(error));


