const express = require("express");
const rest = require("./routes/index.js");

const app = express();

// Add data parsing to express.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register the API REST routes.
app.use("/api/", rest);

module.exports = app;
