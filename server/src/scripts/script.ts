import mongoose from "mongoose";
import dotenv from "dotenv";
import Lesson from "../models/lesson.model";
import Topic from "../models/topic.model";
import Practice from "../models/practice.model";
import Task from "../models/task.model";

dotenv.config();

mongoose.connect(`${process.env.MONGO_URI}`);

const tasks= [
    {
        question: 'Выразите в радианах угл \\( 120^o \\) ',
        type: "SelectOne",
        options: [
          { text: '\\( {2 \\pi \\over 3}\\)', value: "0" },
          { text: '\\( {5 \\pi \\over 6}\\)', value: "1"},
          { text: '\\( {4 \\pi \\over 3}\\)',  value: "2" },
        ],
        correctAnswer: "0",
        _id: new mongoose.Types.ObjectId(),
      },
      {
        question: 'Выразите в радианах угл \\( 150^o \\)',
        type: "SelectOne",
        options: [
          { text: '\\( {5 \\pi \\over 3}\\)', value: "0" },
          { text: '\\( {5 \\pi \\over 6}\\)', value: "1"},
          { text: '\\( {7 \\pi \\over 6}.\\)',  value: "2" },
        ],
        correctAnswer: "1",
        _id: new mongoose.Types.ObjectId(),
      },
      {
        question: 'Выразите в градусах угол \\( { \\pi \\over 12}.\\) ',
        type: "TextAnswer",
        correctAnswer: "15",
        _id: new mongoose.Types.ObjectId(),
      },
      {
        question: 'Выразите в градусах угол \\( {5 \\pi \\over 2}.\\) ',
        type: "TextAnswer",
        correctAnswer: "450",
        _id: new mongoose.Types.ObjectId(),
      },
      {
        question: 'Выразите в градусах угол равный 3 рад',
        type: "TextAnswer",
        correctAnswer: "172",
        _id: new mongoose.Types.ObjectId(),
      },
      {
        question: 'Определите, углом какой четверти является угол равный \\( -189^о\\), если: ',
        type: "SelectOne",
        options: [
          { text: 'первой', value: "0" },
          { text: 'второй', value: "1"},
          { text: 'третьей',  value: "2" },
          { text: 'четвертой',  value: "2" },
        ],
        correctAnswer: "1",
        _id: new mongoose.Types.ObjectId(),
      },
      {
        question: 'Определите, углом какой четверти является угол равный \\( { 11 \\pi \\over 5}\\), если: ',
        type: "SelectOne",
        options: [
          { text: 'первой', value: "0" },
          { text: 'второй', value: "1"},
          { text: 'третьей',  value: "2" },
          { text: 'четвертой',  value: "2" },
        ],
        correctAnswer: "0",
        _id: new mongoose.Types.ObjectId(),
      },
      {
        question: 'Выразите в радианах угл \\( 150^o \\)',
        type: "SelectOne",
        options: [
            { text: '\\( { \\pi \\over 3}\\)', value: "0" },
            { text: '\\( { 5\\pi \\over 6}\\)', value: "1"},
            { text: '\\( { 5\\pi \\over 4}\\)', value: "2" },
        ],
        correctAnswer: "1",
        _id: new mongoose.Types.ObjectId(),
      },
      {
        question: 'Определите вид треугольника, если радианная мера двух его углов равна \\( { 2\\pi \\over 5}\\) и \\( { 3\\pi \\over 10}\\)',
        type: "SelectOne",
        options: [
          { text: 'равносторониий', value: "0" },
          { text: 'разносторнний', value: "1"},
          { text: 'равнобедренный', value: "2" },
        ],
        correctAnswer: "2",
        _id: new mongoose.Types.ObjectId(),
      },
    //   {
    //     question: 'Определите вид треугольника, если радианная мера двух его углов равна 2*π/5 и 3π/10.',
    //     type: "SelectMultiple",
    //     options: [
    //       { text: 'равносторониий', value: "0" },
    //       { text: 'разносторнний', value: "1"},
    //       { text: 'равнобедренный', value: "2" },
    //     ],
    //     correctAnswer: ["1", "2"],
    //     _id: new mongoose.Types.ObjectId(),
    //   },
]

const practices = [
    {
        name: "Практика к уроку 1",
        _id: new mongoose.Types.ObjectId(),
        tasks: [
            ...tasks.map(t => t._id)
        ]
    },
    {
        name: "Практика к уроку 1 - Повторение",
        _id: new mongoose.Types.ObjectId(),
        tasks: [
            ...tasks.map(t => t._id)
        ]
    },
    {
        name: "Контроль по теме 'тригонометрия'",
        _id: new mongoose.Types.ObjectId(),
        tasks: [
            ...tasks.map(t => t._id)
        ]
    },
];

const topics = [
    {
        _id: "1",
        name: "Тригонометрия",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "topic1.jpg",
        startDate: new Date(2023, 5, 1),
        endDate: new Date(2023, 6, 1),
        finalPractice: practices[2]._id,
    },
    {
        _id: "2",
        name: "Производная",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "topic2.jpg",
        startDate: new Date(2023, 6, 1),
        endDate: new Date(2023, 7, 1),
    },
    {
        _id: "3",
        name: "Степень с рациональным показателем. Степенная функция",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "topic3.jpg",
        startDate: new Date(2023, 7, 1),
        endDate: new Date(2023, 8, 1),
    },
    {
        _id: "4",
        name: "Введение в стереометрию",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "topic4.jpg",
        startDate: new Date(2023, 8, 1),
        endDate: new Date(2023, 9, 1),
    },
    {
        _id: "5",
        name: "Перпендикулярность прямых и плоскостей",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "topic5.jpg",
        startDate: new Date(2023, 9, 1),
        endDate: new Date(2023, 10, 1),
    },
    {
        _id: "6",
        name: "Параллельность прямых и плоскостей",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "topic6.jpg",
        startDate: new Date(2023, 10, 1),
        endDate: new Date(2023, 11, 1),
    }
]

const lessons = [
    {
        name: "Единичная окружность.Градусное и радианное измерения произвольных углов",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Единичная окружность. Градусная и радианная мера произвольного угла.pdf",
        topicId: topics[0]._id,
        _id: new mongoose.Types.ObjectId(),
        practices: [practices[0]._id, practices[1]._id]
    },
    {
        name: "Синус и косинус произвольного угла",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[0]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Тангенс и котангенс произвольного угла",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[0]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Соотношения между синусом, косинусом,тангенсом и котангенсом одного и того же угла",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[0]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Функции y = sinx и y = cosx. Их свойства и графики. Функция y = tgx. Её свойства и график.",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[0]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Понятия арксинуса, арккосинуса, арктангенса и арккотангенса",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[0]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Простейшие тригонометрические уравнения sin(x) = a, cos(x) = a, tg(x) = a ",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[0]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Определение производной функции",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[1]._id,
        _id: new mongoose.Types.ObjectId(),
        practices: [practices[0]._id, practices[1]._id]
    },
    {
        name: "Правила вычисления производных",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[1]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Геометрический смысл производной. Связь между знаком производной функции и ее возрастанием или убыванием",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[1]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Применение производной к исследованию функций",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[1]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Наибольшее и наименьшее значения функции",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[1]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    
    {
        name: "Корень n-й степени из числа а",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[2]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Свойства корней n-й степени",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[2]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Применение свойств корней n-й степени для преобразования выражений",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[2]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Свойства и график функции y = корень n-ой степени из x",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[2]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Иррациональные уравнения",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[2]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Пространственные фигуры",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[3]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Прямые и плоскости",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[3]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Построения сечений многогранников",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[3]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Взаимное расположение прямых в пространстве",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[4]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Взаимное расположение прямой и плоскости в пространстве",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[4]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Взаимное расположение плоскостей в пространстве ",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[4]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Перпендикулярность прямой и плоскости",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[5]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Расстояния",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[5]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Угол между прямой и плоскостью",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[5]._id,
        _id: new mongoose.Types.ObjectId(),
    },
    {
        name: "Перпендикулярность плоскостей ",
        link: "https://pub-d9e4b0a96273484eb6b699e01fd1a677.r2.dev/Теория для урока.pdf",
        topicId: topics[5]._id,
        _id: new mongoose.Types.ObjectId(),
    },


    // разые не должен ли topicId совпадать с topics[]

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


