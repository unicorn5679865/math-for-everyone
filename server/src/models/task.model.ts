import mongoose from "mongoose";

export interface TaskDocument extends mongoose.Document {
  practiceId: string;
  correctAnswer: string;
  options: string;
}

const TaskSchema = new mongoose.Schema({
    question: { type: String, required: true },
    type: { type: String, required: true },
    options: [
        new mongoose.Schema({ text:  { type: String, required: true }, value:  { type: String, required: true } }),
    ],
    correctAnswer: {},
});

export default mongoose.model<TaskDocument>("Task", TaskSchema);