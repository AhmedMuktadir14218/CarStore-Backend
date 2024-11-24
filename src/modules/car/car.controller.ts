import { Request, Response, NextFunction } from 'express';
import { createCar, getCarById, getCars, updateCar, deleteCar } from './car.service';

export const handleCreateCar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const car = await createCar(req.body);
    res.status(201).json({
      message: 'Car created successfully',
      success: true,
      data: car,
    });
  } catch (error) {
    if (error instanceof Error) {
      next(error);
    } else {
      next(new Error('Unknown error occurred while creating a car'));
    }
  }
};

export const handleGetCars = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const searchTerm = req.query.searchTerm as string | undefined;
    const cars = await getCars(searchTerm);
    res.status(200).json({
      message: 'Cars retrieved successfully',
      success: true,
      data: cars,
    });
  } catch (error) {
    if (error instanceof Error) {
      next(error);
    } else {
      next(new Error('Unknown error occurred while retrieving cars'));
    }
  }
};

export const handleGetCarById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const car = await getCarById(req.params.carId);

    if (!car) {
      const error = new Error('Car not found');
      (error as any).statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: 'Car retrieved successfully',
      success: true,
      data: car,
    });
  } catch (error) {
    if (error instanceof Error) {
      next(error);
    } else {
      next(new Error('Unknown error occurred while retrieving the car'));
    }
  }
};

export const handleUpdateCar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedCar = await updateCar(req.params.carId, req.body);

    if (!updatedCar) {
      const error = new Error('Car not found');
      (error as any).statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: 'Car updated successfully',
      success: true,
      data: updatedCar,
    });
  } catch (error) {
    if (error instanceof Error) {
      next(error);
    } else {
      next(new Error('Unknown error occurred while updating the car'));
    }
  }
};

export const handleDeleteCar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deletedCar = await deleteCar(req.params.carId);

    if (!deletedCar) {
      const error = new Error('Car not found');
      (error as any).statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: 'Car deleted successfully',
      success: true,
    });
  } catch (error) {
    if (error instanceof Error) {
      next(error);
    } else {
      next(new Error('Unknown error occurred while deleting the car'));
    }
  }
};
