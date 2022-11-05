import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  brand: string;
  description: string;
  expireDate: Date;
  title: string;
  discountCode: string;
  qty: number;
  price: number;
  discountDetails: string;
  categories: [string];
}

export class UpdateProductDto {
  @IsNotEmpty()
  brand: string;
  description: string;
  expireDate: Date;
  title: string;
  discountCode: string;
  qty: number;
  price: number;
  discountDetails: string;
  categories: [string];
}
