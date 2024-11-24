import express from 'express';
import cors from 'cors';
import carRoutes from './modules/car/car.route';
import orderRoutes from './modules/order/order.route';
import { errorHandler } from './middleware/errorHandler';

const app = express();

// Middleware for JSON parsing and enabling CORS
app.use(cors());
app.use(express.json());

// Route Handlers
app.use('/api/cars', carRoutes); // Routes for car operations
app.use('/api/orders', orderRoutes); // Routes for order operations


app.get('/', (req, res) => {
    res.send('Welcome to Car Store APP');
  });
// Global Error Handler Middleware
app.use(errorHandler);

export default app;
