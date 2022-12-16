import { IsDate, IsDateString, IsNotEmpty, Length } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  brand: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  @Length(8, 8)
  @IsDateString({
    message:
      'nhập ngày tháng theo thứ tự năm tháng ngày viết liền. ví dụ: ngày 30 tháng 12 năm 2022: 20221230',
  })
  expireDate: string;
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

export class UpdateProductDto {
  @IsNotEmpty()
  brand: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  @IsDateString({
    message:
      'nhập ngày tháng theo thứ tự năm tháng ngày viết liền. ví dụ: ngày 30 tháng 12 năm 2022: 20221230',
  })
  expireDate: string;
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
