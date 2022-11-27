const Task = require("../models/taskModel");

const home = (req, res) => {
  res.send("tasks here");
};

const createTask = async (req, res) => {
  try {
    // console.log(req.body);
    // const { title, task } = req.body;
    // if (!title || !task) {
    //   throw new Error("Title and Task are Required");
    // }
    const addTask = await Task.create(req.body);
    res.status(201).json({
      success: true,
      message: "Task is created successfully",
    });
  } catch (error) {
    res.status(503).json({
      status: "503",
      message: "Internal server error",
      erorr: error,
    });
  }
};

module.exports = {
  home,
  createTask,
};
