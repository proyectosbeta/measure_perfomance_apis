import carService from "../services/car-service.ts";

// @desc    Fetch all cars
// @route   GET /api/v1/cars
export const getCars = ({ response }: { response: any }) => {
  response.body = {
    data: carService.fetchCars(),
  };
};

// @desc    Fetch single car
// @route   GET /api/v1/cars/:id
export const getCar = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const car = carService.fetchCar(params.id);

  if (car === null) {
    response.status = 400;
    response.body = { msg: `Car with id: ${params.id} not found` };
    return;
  }

  response.status = 200;
  response.body = { data: car };
};

// @desc    Add  car
// @route   POST /api/v1/cars
export const addCar = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  if (!request.body()) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "The request must have a body",
    };
    return;
  }

  const data = await request.body().value;

  const car = carService.createCar(data);
  response.status = 200;
  response.body = {
    success: true,
    data: car,
  };
};
