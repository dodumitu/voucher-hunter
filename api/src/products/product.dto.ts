import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  brand: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  expireDate: Date;
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  discountCode: string;
  @IsNotEmpty()
  qty: number;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  discountDetails: string;
  @IsNotEmpty()
  category: string;
  authorId: string;
}

export class UpdateProductDto {
  @IsNotEmpty()
  brand: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  expireDate: Date;
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  discountCode: string;
  @IsNotEmpty()
  qty: number;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  discountDetails: string;
  @IsNotEmpty()
  category: string;
}
