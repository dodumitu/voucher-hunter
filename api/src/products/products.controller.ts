import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async addProduct(
    @Body('id') prodId: string,
    @Body('brand') prodBrand: string,
    @Body('description') prodDesc: string,
    @Body('expire date') prodDate: Date,
    @Body('title') prodTitle: string,
    @Body('discountCode ') prodCode: string,
    @Body('quantity') prodQty: number,
    @Body('discountDetail') prodDetail: string,
  ) {
    const generatedId = await this.productsService.insertProduct(
      prodId,
      prodBrand,
      prodDesc,
      prodDate,
      prodTitle,
      prodCode,
      prodQty,
      prodDetail,
    );

    return { id: generatedId };
  }

  @Get()
  async getAllProducts() {
    return await this.productsService.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productsService.getProduct(id);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body('brand') Brand: string,
    @Body('description') description: string,
    @Body('expire date') expireDate: Date,
    @Body('title') title: string,
    @Body('discountCode ') discountCode: string,
    @Body('quantity') quantity: number,
    @Body('discount detail') discountDetail: string,
  ) {
    await this.productsService.updateProduct(
      id,
      Brand,
      description,
      expireDate,
      title,
      discountCode,
      quantity,
      discountDetail,
    );
    return null;
  }

  @Delete(':id')
  async removeProduct(@Param('id') id: string) {
    await this.productsService.removeProduct(id);
    return null;
  }
}
