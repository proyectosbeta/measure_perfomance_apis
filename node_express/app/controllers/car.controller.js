const { getCarsService } = require("../services/car.service");

const getCars = async (req, res) => {
  try {
    const cars = await getCarsService();
    res.json(cars);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getCars };
