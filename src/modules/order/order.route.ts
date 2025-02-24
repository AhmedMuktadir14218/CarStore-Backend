import { Router } from 'express';
import { placeOrder, fetchOrders, getRevenue } from './order.controller';
import { authenticateJWT, authorizeRole } from '../../middleware/authMiddleware';

const router = Router();

router.post('/', authenticateJWT, authorizeRole(['user']), placeOrder);
router.get('/', authenticateJWT, authorizeRole(['admin']), fetchOrders);
router.get('/revenue', authenticateJWT, authorizeRole(['admin']), getRevenue);

export default router;
