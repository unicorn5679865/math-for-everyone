import mongoose from "mongoose";

interface TopicDocument extends mongoose.Document {
  name: string;
  link: string;
}

const TopicSchema = new mongoose.Schema({
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

  _id: String,
});

export default mongoose.model<TopicDocument>("Topic", TopicSchema);