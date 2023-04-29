import mongoose from "mongoose";
import type { Document } from "mongoose";


export interface PracticeDocument extends Document {
  practiceId: string;
  correctAnswer: string;
  options: string;
}

const PracticeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],

    _id: String,
});

export default mongoose.model<PracticeDocument>("Practice", PracticeSchema);