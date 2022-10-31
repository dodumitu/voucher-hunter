import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

export interface Product extends mongoose.Document {
  id: string;
  brand: string;
  description: string;
  expireDate: Date;
  title: string;
  discountCode: string;
  qty: number;
  price: number;
  discountDetails: string;
}
