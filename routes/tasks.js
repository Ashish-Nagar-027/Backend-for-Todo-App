const express = require("express");

const {
  createTask,
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controller/tasksController");

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
