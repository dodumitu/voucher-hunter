import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Collection, Document } from 'mongoose';

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
  categories: [string];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
