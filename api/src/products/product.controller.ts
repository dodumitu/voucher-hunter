import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
  Req,
  Query,
} from '@nestjs/common';
import { Request } from 'express';
import { ProductService } from './product.service';
import { CreateProductDto } from './product.dto';
import { FilterProductDTO } from './product.filter.dto';
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/')
  async getProducts(@Query() filterProductDTO: FilterProductDTO) {
    if (Object.keys(filterProductDTO).length) {
      const filteredProducts = await this.productService.getFilteredProducts(
        filterProductDTO,
      );
      return filteredProducts;
    } else {
      const allProducts = await this.productService.getAllProducts();
      return allProducts;
    }
  }

  @Get('/:id')
  async getProduct(@Param('id') id: string) {
    const product = await this.productService.getProduct(id);
    if (!product) throw new NotFoundException('Sản phẩm không tồn tại!');
    return product;
  }

  @Post('post/')
  async addProduct(@Body() createProductDTO: CreateProductDto) {
    const product = await this.productService.addProduct(createProductDTO);
    return product;
  }

  @Put('update/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() createProductDTO: CreateProductDto,
  ) {
    const product = await this.productService.updateProduct(
      id,
      createProductDTO,
    );
    if (!product) throw new NotFoundException('Sản phẩm không tồn tại');
    return product;
  }

  @Delete('delete/:id')
  async deleteProduct(@Param('id') id: string) {
    const product = await this.productService.deleteProduct(id);
    if (!product) throw new NotFoundException('Sản phẩm không tồn tại');
    return 'Đã xoá ' + product.title;
  }
}
