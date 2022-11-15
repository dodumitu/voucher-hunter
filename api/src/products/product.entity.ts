import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  brand: string;

  @Prop()
  description: string;

  @Prop()
  expireDate: string;

  @Prop()
  title: string;

  @Prop()
  qty: number;

  @Prop()
  discountCode: string;

  @Prop()
  price: number;

  @Prop()
  discountDetails: string;

  @Prop()
  category: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
