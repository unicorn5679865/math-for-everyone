import mongoose from "mongoose";
import Practice from "./practice.model"

Practice.schema;
interface LessonDocument extends mongoose.Document {
  name: string;
  link: string;
  topicId: Number;
}

const LessonSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  topicId: {
    type: String,
    required: true, //TODO: Change to required later
  },

  practices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Practice' }]
});

export default mongoose.model<LessonDocument>("Lesson", LessonSchema);