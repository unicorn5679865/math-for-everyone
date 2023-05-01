import mongoose from "mongoose";
import { UserDocument } from "./user.model";
import { PracticeDocument } from "./practice.model";

export interface UserAnswersDocument extends mongoose.Document {
  user: string;
  practiceId: string;
  result: string;
  createdAt: Date,
  updatedAt: Date,
}

const UserAnswersSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  practiceId: { type: String, required: true},
  result: { type: Number, required: true },

}, { timestamps: true });

export default mongoose.model<UserAnswersDocument>("UserAnswer", UserAnswersSchema);