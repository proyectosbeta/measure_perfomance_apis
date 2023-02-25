import Car from "../models/car-model.ts";
import { ICar } from "../interface/Car.ts";
import { readJSON } from "../utils/json-helper.ts";

class CarService {
  cars: Array<ICar> = [];

  constructor() {
    this.loadData();
  }

  // load json data from file
  loadData = () => {
    const carJSON = readJSON("./data/cars.json");
    const cars = Car.fromJSON(carJSON);
    this.cars = Object.values(cars);
  };

  // returns all cars or not
  fetchCars = () => {
    return this.cars;
  };

  fetchCar = (id: string) => {
    const result = this.cars.find(
      (car) => car.objectId === id
    );
    return result;
  };

  createCar = (car: ICar) => {
    const newCar = Object.values(car);
    const [first] = newCar;
    this.cars.push(first);
    return this.cars;
  };
}

export default new CarService();
