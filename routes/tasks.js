const express = require("express");

const { home, createTask } = require("../controller/tasksController");

const router = express.Router();

router.route("/").get(home).post(createTask);

module.exports = router;
