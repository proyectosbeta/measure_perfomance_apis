const data = require("../../data/cars.json");

async function fetchCars() {
  return {
    data,
  };
}

module.exports = {
  fetchCars,
};
