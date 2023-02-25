const express = require("express");
const { getCars } = require("../controllers/car.controller.js");

const router = express.Router();

router.get("/v1/cars", getCars);

module.exports = router;
