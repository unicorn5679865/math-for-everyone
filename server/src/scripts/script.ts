import mongoose from "mongoose";
import dotenv from "dotenv";
import Lesson from "../models/lesson.model";
import Topic from "../models/topic.model";
import Practice from "../models/practice.model";
import Task from "../models/task.model";

dotenv.config();

mongoose.connect(`${process.env.MONGO_URI}`);

const topics = [
    {
        _id: "1",
        name: "Функция",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "topic1.jpg"
    },
    {
        _id: "2",
        name: "Тригонометрия",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "topic2.jpg"
    },
    {
        _id: "3",
        name: "Степень с рациональным показателем. Степенная функция",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "topic3.jpg"
    },
    {
        _id: "4",
        name: "Введение в стереометрию",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "topic4.jpg"
    },
    {
        _id: "5",
        name: "Перпендикулярность прямых и плоскостей",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "topic5.jpg"
    },
    {
        _id: "6",
        name: "Параллельность прямых и плоскостей",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "topic6.jpg"
    }
]

const tasks= [
    {
        question: 'Что означает аббревиатура HTML?',
        type: "SelectOne",
        options: [
          { text: 'HyperText Markup Language', value: "0" },
          { text: 'HyperText Makeup Language', value: "1"},
          { text: 'HyperText Model Language',  value: "2" },
        ],
        correctAnswer: "0",
        _id: new mongoose.Types.ObjectId(),
      },
      {
        question: 'Какой тег используется для создания заголовка на веб-странице?',
        type: "TextAnswer",
        correctAnswer: "<title>",
        _id: new mongoose.Types.ObjectId(),
      },
      {
        question: 'Какая функция JavaScript используется для создания объектов?',
        type: "SelectMultiple",
        options: [
          { text: 'Object.create()', value: "0" },
          { text: 'Object.new()', value: "1"},
          { text: 'Object.build()', value: "2" },
        ],
        correctAnswer: ["1", "2"],
        _id: new mongoose.Types.ObjectId(),
      }
]

const practices = [
    {
        name: "Практика к уроку 1",
        _id: new mongoose.Types.ObjectId(),
        tasks: [
            ...tasks.map(t => t._id)
        ]
    }
];

const lessons = [
    {
        name: "Определение числовой функции и способы ее задания ",
        link: "google.com",
        topicId: topics[0]._id,
        _id: new mongoose.Types.ObjectId(),
        practices: [practices[0]._id]
    },
    {
        name: "Четность и нечетность функции. Периодичность",
        link: "google.com",
        topicId: topics[0]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Возрастание и убывание, точки максимума и минимума; максимум и минимум, наибольшее и наименьшее значения функции на промежутке",
        link: "google.com",
        topicId: topics[0]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Преобразования графиков функции",
        link: "google.com",
        topicId: topics[0]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Бесконечно убывающая геометрическая прогрессия как функция натурального аргумента. Сумма членов бесконечно убывающей геометрической прогрессии",
        link: "google.com",
        topicId: topics[0]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Единичная окружность.Градусное и радианное измерения произвольных углов",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/план-конспект.pdf",
        topicId: topics[1]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Синус и косинус произвольного угла",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/план-конспект.pdf",
        topicId: topics[1]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Тангенс и котангенс произвольного угла",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/план-конспект.pdf",
        topicId: topics[1]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Соотношения между синусом, косинусом,тангенсом и котангенсом одного и того же угла",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/план-конспект.pdf",
        topicId: topics[1]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Функции y = sinx и y = cosx. Их свойства и графики. Функция y = tgx. Её свойства и график.",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/план-конспект.pdf",
        topicId: topics[1]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Понятия арксинуса, арккосинуса, арктангенса и арккотангенса",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/план-конспект.pdf",
        topicId: topics[1]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Простейшие тригонометрические уравнения sin(x) = a, cos(x) = a, tg(x) = a ",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/план-конспект.pdf",
        topicId: topics[1]._id,
        _id: new mongoose.Types.ObjectId(),
    },
];



const db = mongoose.connection;

const importLessons = async () => {
    await Lesson.deleteMany({});

    for (let lesson of lessons) {
        const newLesson = new Lesson(lesson);
        await newLesson.save();
        console.log('added');
    }
};

const importTopics = async () => {
    await Topic.deleteMany({});

    for (let topic of topics) {
        const newTopic = new Topic(topic);
        await newTopic.save();
        console.log('added');
    }
};

const importPractice = async () => {
    await Practice.deleteMany({});

    for (let practice of practices) {
        const newPractice = new Practice(practice);
        await newPractice.save();
        console.log('added');
    }
};

const importTasks = async () => {
    await Task.deleteMany({});

    for (let task of tasks) {
        const newTask = new Task(task);
        newTask.markModified('correctAnswer');
        await newTask.save();
        console.log('added');
    }
};

db.once("open", async () => {
    console.log("Connected to Mongo DB!!");

    await importTopics();
    await importLessons();
    await importPractice();
    await importTasks();

    console.log('completed')
    process.exit();
}
);
db.on("error", (error) => console.error(error));


