import { Document } from 'mongoose';

export interface IOrder extends Document {
  email: string;
  car: string; // Reference to Car (ObjectId)
  quantity: number;
  totalPrice: number;
}
