import Car from './car.model';
import { ICar } from './car.interface';

export const createCar = async (carData: ICar) => {
  const car = await Car.create(carData);
  return car;
};

export const getCars = async (searchTerm?: string) => {
  const query = searchTerm
    ? {
        $or: [
          { brand: { $regex: searchTerm, $options: 'i' } },
          { model: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
        ],
      }
    : {};
  return await Car.find(query);
};

export const getCarById = async (carId: string) => {
  const car = await Car.findById(carId);
  if (!car) throw new Error('Car not found');
  return car;
};

export const updateCar = async (carId: string, updateData: Partial<ICar>) => {
  const car = await Car.findByIdAndUpdate(carId, updateData, {
    new: true,
    runValidators: true,
  });
  if (!car) throw new Error('Car not found');
  return car;
};

export const deleteCar = async (carId: string) => {
  const car = await Car.findByIdAndDelete(carId);
  if (!car) throw new Error('Car not found');
  return car;
};
