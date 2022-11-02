import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  id: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  expireDate: { type: Date, required: true },
  title: { type: String, required: true },
  discountCode: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  discountDetails: { type: String, required: true },
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
