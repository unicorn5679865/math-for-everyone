import mongoose from "mongoose";
import dotenv from "dotenv";
import Lesson from "../models/lesson.model";
import Topic from "../models/topic.model";

dotenv.config();

mongoose.connect(`${process.env.MONGO_URI}`);

const lessons = [
    {
        name: "функция",
        link: "google.com"
    },
    {
        name: "trogometriya",
        link: "vk.com",
        topicId: "2"
    }
];

const topics = [
    {
        _id: "1",
        name: "функция",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "topic1.jpg"
    },
    {
        _id: "2",
        name: "функция2",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "topic2.jpg"
    },
    {
        _id: "3",
        name: "функция3",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "topic3.jpg"
    },
    {
        _id: "4",
        name: "функция4",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "topic4.jpg"
    },
    {
        _id: "5",
        name: "функция",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "topic5.jpg"
    },
]

const db = mongoose.connection;

const importLessons = async () => {
    await Lesson.deleteMany({});

    for (let lesson of lessons) {
        const newLesson = new Lesson(lesson);
        await newLesson.save();
        console.log('добавлено');
    }
};

const importTopics = async () => {
    await Topic.deleteMany({});

    for (let topic of topics) {
        const newTopic = new Topic(topic);
        await newTopic.save();
        console.log('добавлено');
    }
};

db.once("open", async () => {
    console.log("Connected to Mongo DB!!");

    await importTopics();
    await importLessons();

    console.log('закончено')
    process.exit();
}
);
db.on("error", (error) => console.error(error));


