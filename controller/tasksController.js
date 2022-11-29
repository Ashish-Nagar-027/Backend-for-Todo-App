const Task = require("../models/taskModel");

const home = (req, res) => {
  res.send("tasks here");
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(201).json({ tasks });
  } catch (error) {
    res.status(503).json({
      status: "503",
      message: "Internal server error",
      erorr: error,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, task } = req.body;
    if (!title || !task) {
      throw new Error("Title and Task are Required");
    }
    const addTask = await Task.create(req.body);
    res.status(201).json({
      success: true,
      message: "Task is created successfully",
      addTask,
    });
  } catch (error) {
    res.status(503).json({
      status: "503",
      message: "Internal server error",
      erorr: error,
    });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.find({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(503).json({
      status: "503",
      message: "Internal server error",
      erorr: error,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ id: taskID, data: req.body });
  } catch (error) {}
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });
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
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
};
