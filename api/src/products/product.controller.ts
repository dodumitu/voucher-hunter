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
import { ApiTags } from '@nestjs/swagger';

@Controller('products')
@ApiTags('products')
export class ProductController {
  constructor(private productService: ProductService) {}
  // @Get('/')
  // async getHomeProduct() {
  //   const homeProduct = await this.productService.getHomeProduct();
  //   return { homeProduct };
  // }
  @Get('/')
  async getProducts(@Query() filterProductDTO: FilterProductDTO) {
    if (Object.keys(filterProductDTO).length) {
      const filteredProducts = await this.productService.getFilteredProducts(
        filterProductDTO,
      );
      return { success: 1, filteredProducts };
    } else {
      const allProducts = await this.productService.getAllProducts();
      return { success: true, data: allProducts };
    }
  }
  @Get('/homeproduct')
  async getHome(@Req() request: Request) {
    const homeProduct = await this.productService.getHomeProduct();
    return { success: 1, data: homeProduct };
  }

  @Get('/:id')
  async getProduct(@Param('id') id: string) {
    const product = await this.productService.getProduct(id);
    if (!product) throw new NotFoundException('Sản phẩm không tồn tại!');
    return { success: true, data: product };
  }

  @Post('/post/')
  async addProduct(@Body() createProductDTO: CreateProductDto) {
    const product = await this.productService.addProduct(createProductDTO);
    return { success: true, data: product };
  }

  @Put('/update/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() createProductDTO: CreateProductDto,
  ) {
    const product = await this.productService.updateProduct(
      id,
      createProductDTO,
    );
    if (!product) throw new NotFoundException('Sản phẩm không tồn tại');
    return { success: true, data: product };
  }

  @Delete('/delete/:id')
  async deleteProduct(@Param('id') id: string) {
    const product = await this.productService.deleteProduct(id);
    if (!product) throw new NotFoundException('Sản phẩm không tồn tại');
    return 'Đã xoá ';
  }
}
