import { Request, Response, NextFunction  } from 'express';
import { createOrder, getOrders, calculateRevenue } from './order.service';

export const placeOrder = async (req: Request, res: Response) => {
  try {
    const { email, car, quantity } = req.body;
    const order = await createOrder(email, car, quantity);
    res.status(201).json({
      message: 'Order placed successfully',
      success: true,
      data: order,
    });
  } catch (error) {
    if (error instanceof Error) {
        next(error);
      } else {
        next(new Error('Unknown error occurred while creating the order'));
      }
  }
};

export const fetchOrders = async (req: Request, res: Response) => {
  try {
    const orders = await getOrders();
    res.status(200).json({
      message: 'Orders retrieved successfully',
      success: true,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching orders',
      success: false,
      error,
    });
  }
};

export const getRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await calculateRevenue();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: { totalRevenue },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error calculating revenue',
      success: false,
      error,
    });
  }
};
function next(arg0: Error) {
    throw new Error('Function not implemented.');
}

