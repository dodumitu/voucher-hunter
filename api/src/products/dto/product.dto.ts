import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  brand: string;
  description: string;
  expireDate: string;
  title: string;
  discountCode: string;
  qty: number;
  price: number;
  discountDetails: string;
  // categories: [string];
}

export class UpdateProductDto {
  @IsNotEmpty()
  brand: string;
  description: string;
  expireDate: string;
  title: string;
  discountCode: string;
  qty: number;
  price: number;
  discountDetails: string;
  // categories: [string];
}
