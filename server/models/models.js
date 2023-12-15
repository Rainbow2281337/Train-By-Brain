import mongoose from "mongoose";

const TopicsSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const InterviewsSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
    reference: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Topics = mongoose.model("Topics", TopicsSchema);
const Interviews = mongoose.model("Interviews", InterviewsSchema);

export { Topics, Interviews };
