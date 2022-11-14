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
} from '@nestjs/common';
import { Request } from 'express';
import { ProductService } from './product.service';
import { CreateProductDto } from './product.dto';
import { ProductFilterDTO } from './product.filter.dto';
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/all')
  async getAllProducts() {
    const allProducts = await this.productService.getAllProducts();
    return allProducts;
  }

  @Get('/get/:id')
  async getProduct(@Param('id') id: string) {
    const product = await this.productService.getProduct(id);
    if (!product) throw new NotFoundException('Sản phẩm không tồn tại!');
    return product;
  }

  @Post('/')
  async addProduct(@Body() createProductDTO: CreateProductDto) {
    const product = await this.productService.addProduct(createProductDTO);
    return product;
  }

  @Put('/:id')
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

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string) {
    const product = await this.productService.deleteProduct(id);
    if (!product) throw new NotFoundException('Sản phẩm không tồn tại');
    return 'Đã xoá ' + product.title;
  }

  @Get('/search')
  async search(@Req() req: Request) {
    let options = {};

    if (req.query.s) {
      options = {
        $or: [
          { title: new RegExp(req.query.s.toString(), 'i') },
          { description: new RegExp(req.query.s.toString(), 'i') },
        ],
      };
    }

    const query = this.productService.find(options);

    const data = await query;

    return data;
  }
}
