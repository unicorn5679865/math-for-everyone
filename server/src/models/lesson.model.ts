import mongoose from "mongoose";

interface LessonDocument extends mongoose.Document {
  name: string;
  link: string;
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
});

export default mongoose.model<LessonDocument>("Lesson", LessonSchema);