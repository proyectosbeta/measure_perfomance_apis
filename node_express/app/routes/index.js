const express = require("express");
const carRouter = require("./car.js");

const router = express.Router();

// Car router.
router.use(carRouter);

module.exports = router;
