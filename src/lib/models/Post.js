import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  imageUrl: {
    type: String, // Store image URL here
    required: [true, "Please add image for the post"],
  },
  title: {
    type: String,
    required: [true, "Please provide a title for the post"],
  },
  content: {
    type: String,
    required: [true, "Please provide content for the post"],
  },
  category: {
    type: String,
    required: [true, "Please provide the category"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Use this schema only if it hasn't been compiled already
export default mongoose.models.Post || mongoose.model("Post", PostSchema);
