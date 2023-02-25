import { ICar } from "../interface/Car.ts";

class Car implements ICar {
  id: string;
  year: string;
  make: string;
  model: string;
  category: string;
  createAt: string;
  updateAt: string;

  constructor({
    id,
    year,
    make,
    model,
    category,
    createAt,
    updateAt,
  }: {
    id: string;
    year: string;
    make: string;
    model: string;
    category: string;
    createAt: string;
    updateAt: string;
  }) {
    this.id = id;
    this.year = year;
    this.make = make;
    this.model = model;
    this.category = category;
    this.createAt = createAt;
    this.updateAt = updateAt;
  }

  toJSON(): ICar {
    return Object.assign({}, this);
  }

  static fromJSON(json: ICar | string): Car {
    if (typeof json === "string") {
      return JSON.parse(json, Car.reviver);
    }
    let car = Object.create(Car.prototype);
    return Object.assign(car, json);
  }

  static reviver(key: string, value: any): any {
    return key === "" ? Car.fromJSON(value) : value;
  }
}

export default Car;
