const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: [25, "Name must be less than 20 Character"],
  },

  task: {
    type: String,
    required: true,
    trim: true,
    maxlength: [25, "Email is must "],
  },
});

module.exports = mongoose.model("Task", TaskSchema);
