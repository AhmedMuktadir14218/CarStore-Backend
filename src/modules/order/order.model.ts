import mongoose, { Schema } from 'mongoose';
import { IOrder } from './order.interface';

const OrderSchema: Schema = new Schema(
  {
    email: { type: String, required: true, match: /.+\@.+\..+/ },
    car: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IOrder>('Order', OrderSchema);
