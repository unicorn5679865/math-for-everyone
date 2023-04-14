import mongoose from "mongoose";

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
    required: false, //TODO: Change to required later
  },
});

export default mongoose.model<LessonDocument>("Lesson", LessonSchema);