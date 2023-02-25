import { Router } from "./deps.ts";
import { getCars, getCar, addCar } from "./app/controllers/car-controller.ts";

const router = new Router();

router
  .get("/api/v1/cars", getCars)
  .get("/api/v1/cars/:id", getCar)
  .post("/api/v1/cars", addCar);

export default router;
