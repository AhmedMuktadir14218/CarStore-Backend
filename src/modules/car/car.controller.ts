import { Request, Response } from 'express';
import {
  createCar,
  getCars,
  getCarById,
  updateCar,
  deleteCar,
} from './car.service';

export const handleCreateCar = async (req: Request, res: Response) => {
  try {
    const car = await createCar(req.body);
    res.status(201).json({
      message: 'Car created successfully',
      success: true,
      data: car,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error creating car',
      success: false,
      error: error.message,
    });
  }
};

export const handleGetCars = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const cars = await getCars(searchTerm);
    res.status(200).json({
      message: 'Cars retrieved successfully',
      success: true,
      data: cars,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving cars',
      success: false,
      error: error.message,
    });
  }
};

export const handleGetCarById = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const car = await getCarById(carId);
    res.status(200).json({
      message: 'Car retrieved successfully',
      success: true,
      data: car,
    });
  } catch (error) {
    res.status(404).json({
      message: 'Car not found',
      success: false,
      error: error.message,
    });
  }
};

export const handleUpdateCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const car = await updateCar(carId, req.body);
    res.status(200).json({
      message: 'Car updated successfully',
      success: true,
      data: car,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error updating car',
      success: false,
      error: error.message,
    });
  }
};

export const handleDeleteCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    await deleteCar(carId);
    res.status(200).json({
      message: 'Car deleted successfully',
      success: true,
    });
  } catch (error) {
    res.status(404).json({
      message: 'Car not found',
      success: false,
      error: error.message,
    });
  }
};
