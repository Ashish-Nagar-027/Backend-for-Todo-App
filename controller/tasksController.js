const Task = require("../models/taskModel");

const home = (req, res) => {
  res.send("tasks here");
};

const createTask = async () => {
  try {
    const { title, task } = req.body;
    if (!title || !task) {
      throw new Error("Title and Task are Required");
    }
    const addTask = await Task.create();
    res.status(201).json({
      success: true,
      message: "Task is created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  home,
};
