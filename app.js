require("dotenv").config();
const express = require("express");
const tasks = require("./routes/tasks");
const connectToDB = require("./config/db");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to database
connectToDB();

app.use("/api/v1/tasks", tasks);

module.exports = app;
