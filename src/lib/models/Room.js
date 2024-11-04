// models/Room.js
const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  image: {
    type: String, // URL or path to the image
    required: [true, "Please add image for the post"],
  },
  title: {
    type: String,
    required: [true, "Please provide a title for the post"],
  },
  description: {
    type: String,
    required: [true, "Please provide description for the post"],
  },
  sleeps: {
    type: String, // Number of guests the room can accommodate
    required: [true, "Please add sleeps for the post"],
  },
  beds: {
    type: String, // Number of beds in the room
    required: [true, "Please add beds for the post"],
  },
});

export default mongoose.models.Room || mongoose.model("Room", roomSchema);
