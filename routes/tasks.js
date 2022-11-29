const express = require("express");

const {
  createTask,
  getAllTasks,
  getTask,
  deleteTask,
} = require("../controller/tasksController");

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).delete(deleteTask);

module.exports = router;
