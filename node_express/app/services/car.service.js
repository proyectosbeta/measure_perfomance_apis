const data = require("../../data/cars.json");

async function getCarsService() {
  return {
    data,
  };
}

module.exports = {
  getCarsService,
};
