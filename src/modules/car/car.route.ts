import { Router } from 'express';
import {
  handleCreateCar,
  handleGetCars,
  handleGetCarById,
  handleUpdateCar,
  handleDeleteCar,
} from './car.controller';

const router = Router();

router.post('/', handleCreateCar); // Create a car
router.get('/', handleGetCars); // Get all cars (with optional searchTerm)
router.get('/:carId', handleGetCarById); // Get a specific car by ID
router.put('/:carId', handleUpdateCar); // Update a car by ID
router.delete('/:carId', handleDeleteCar); // Delete a car by ID

export default router;
