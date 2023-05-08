import mongoose from "mongoose";

interface TopicDocument extends mongoose.Document {
  name: string;
  startDate: Date;
  endDate: Date;
}

const TopicSchema = new mongoose.Schema({
  endDate: {
    type: Date,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
  finalPractice: { type: mongoose.Schema.Types.ObjectId, ref: 'Practice' },
  _id: String,
}, { toJSON: { virtuals: true }, toObject: { virtuals: true }
});

TopicSchema.virtual("lessons", {
  ref: 'Lesson',
  localField: '_id',
  foreignField: 'topicId'
})

export default mongoose.model<TopicDocument>("Topic", TopicSchema);