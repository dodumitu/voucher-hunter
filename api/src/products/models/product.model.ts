import { Schema, Document } from 'mongoose';

export const ProductSchema = new Schema(
  {
    // id: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    expireDate: { type: String, required: true },
    title: { type: String, required: true },
    discountCode: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    discountDetails: { type: String, required: true },
  },
  { collection: 'products' },
);

export interface Product extends Document {
  // id: string;
  brand: string;
  description: string;
  expireDate: string;
  title: string;
  discountCode: string;
  qty: number;
  price: number;
  discountDetails: string;
}
