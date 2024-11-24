import Order from './order.model';
import Car from '../car/car.model';

export const createOrder = async (email: string, carId: string, quantity: number) => {
  // Fetch car details
  const car = await Car.findById(carId);
  if (!car) throw new Error('Car not found');

  // Check stock availability
  if (car.quantity < quantity) throw new Error('Insufficient stock');

  // Calculate total price
  const totalPrice = car.price * quantity;

  // Update car stock
  car.quantity -= quantity;
  car.inStock = car.quantity > 0;
  await car.save();

  // Create order
  const order = await Order.create({ email, car: carId, quantity, totalPrice });
  return order;
};

export const getOrders = async () => {
  return await Order.find().populate('car');
};

export const calculateRevenue = async () => {
  const orders = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);

  return orders.length > 0 ? orders[0].totalRevenue : 0;
};
