import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/models/user.model';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  brand: string;

  @Prop()
  brandIcon: string;

  @Prop()
  productImage: string[];

  @Prop()
  description: string;

  @Prop()
  expireDate: Date;

  @Prop()
  title: string;

  @Prop()
  qty: number;

  @Prop()
  discountCode: string;

  @Prop()
  price: number;

  @Prop()
  uses: string;

  @Prop()
  userManual: string;

  @Prop()
  policies: string;

  @Prop()
  conditions: string;

  @Prop()
  category: string;

  @Prop()
  authorId: User;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
