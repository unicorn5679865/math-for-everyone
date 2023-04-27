import mongoose from "mongoose";

interface TaskDocument extends mongoose.Document {
  practiceId: string;
  correctAnswer: string;
  options: string;
}

const TaskSchema = new mongoose.Schema({
    practiceId: {
        type: String,
        required: true,
    },

    correctAnswer: {
        type: Number,
        required: false,
    },

    options: {
        type: Array,
        required: false,
    },

    _id: String,
});

export default mongoose.model<TaskDocument>("Task", TaskSchema);