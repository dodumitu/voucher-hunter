import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  brand: string;

  @IsNotEmpty()
  brandIcon: string;

  @IsNotEmpty()
  brandproductImage: string[];

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
  uses: string;

  @IsNotEmpty()
  userManual: string;

  @IsNotEmpty()
  policies: string;

  @IsNotEmpty()
  conditions: string;

  @IsNotEmpty()
  category: string;

  authorId: string;
}

export class UpdateProductDto {
  brand: string;
  brandIcon: string;
  productImage: string[];
  description: string;
  expireDate: Date;
  title: string;
  discountCode: string;
  qty: number;
  price: number;
  uses: string;
  userManual: string;
  policies: string;
  conditions: string;
  category: string;
}
