import mongoose from "mongoose";
import type { Document } from "mongoose";


export interface PracticeDocument extends Document {
  isCompleted?: boolean;
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
}, { toJSON: { virtuals: true }, toObject: { virtuals: true }});

PracticeSchema.virtual("userResult", {
  ref: 'UserAnswer',
  localField: '_id',
  foreignField: 'practiceId'
});

export default mongoose.model<PracticeDocument>("Practice", PracticeSchema);