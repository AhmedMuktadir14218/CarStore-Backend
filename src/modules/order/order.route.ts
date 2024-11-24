import { Router } from 'express';
import { placeOrder, fetchOrders, getRevenue } from './order.controller';

const router = Router();

router.post('/', placeOrder); // Place an order
router.get('/', fetchOrders); // Get all orders
router.get('/revenue', getRevenue); // Get total revenue

export default router;
