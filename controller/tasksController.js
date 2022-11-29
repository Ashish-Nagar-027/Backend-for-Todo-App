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
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
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

// https://www.youtube.com/watch?v=Wc1ciwSNUfM&ab_channel=B2Tech
// https://www.youtube.com/watch?v=686pbLyBbGI&ab_channel=B2Tech

module.exports = {
  home,
  createTask,
  getAllTasks,
  getTask,
  deleteTask,
};
