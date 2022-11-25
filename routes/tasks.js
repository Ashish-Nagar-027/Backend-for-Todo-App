const express = require("express");

const { home } = require("../controller/tasksController");

const router = express.Router();

router.get("/", home);

module.exports = router;
