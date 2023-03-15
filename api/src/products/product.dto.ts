import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
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
