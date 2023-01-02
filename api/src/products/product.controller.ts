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
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { ProductService } from './product.service';
import { CreateProductDto } from './product.dto';
import { FilterProductDTO } from './product.filter.dto';
import { ApiTags } from '@nestjs/swagger';
import { PaginationParams } from 'src/paginationParams';
import { Roles } from 'src/user/roles/roles.decorator';
import { Role } from 'src/user/roles/role.enum';
import { AuthGuard } from '@nestjs/passport';

@Controller('products')
@ApiTags('products')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get('/')
  async getProducts(
    @Query()
    filterProductDTO: FilterProductDTO,
  ) {
    if (Object.keys(filterProductDTO).length) {
      const filteredProducts = await this.productService.getFilteredProducts(
        filterProductDTO,
      );
      return { success: true, filteredProducts };
    } else {
      const allProducts = await this.productService.getAllProducts();
      return { success: true, data: allProducts };
    }
  }

  @Get('/admin')
  @UseGuards(AuthGuard())
  @Roles(Role.Admin, Role.Seller)
  async getAdminProducts(
    @Query()
    filterProductDTO: FilterProductDTO,
  ) {
    if (Object.keys(filterProductDTO).length) {
      const filteredProducts = await this.productService.getFilteredProducts(
        filterProductDTO,
      );
      return { success: true, filteredProducts };
    } else {
      const allProducts = await this.productService.getAllProducts();
      return { success: true, data: allProducts };
    }
  }

  @Get('/seller')
  @UseGuards(AuthGuard())
  @Roles(Role.Seller)
  async getSellerProducts(
    @Req() req: any,
    @Query()
    filterProductDTO: FilterProductDTO,
  ) {
    const authorId = req.user.id;
    if (Object.keys(filterProductDTO).length) {
      const filteredProducts =
        await this.productService.getSellerFilteredProducts(
          authorId,
          filterProductDTO,
        );
      return { success: true, filteredProducts };
    } else {
      const allProducts = await this.productService.findAllByAuthorId(authorId);
      return { success: true, data: allProducts };
    }
  }
  @Get('/homeproduct')
  @UseGuards(AuthGuard())
  @Roles(Role.Admin)
  async getHome(@Req() request: Request) {
    const homeProduct = await this.productService.getHomeProduct();
    return { success: true, data: homeProduct };
  }

  @Get('/:id')
  async getProduct(@Param('id') id: string) {
    const product = await this.productService.getProduct(id);
    if (!product) throw new NotFoundException('Sản phẩm không tồn tại!');
    return { success: true, data: product };
  }

  @Post('/post/')
  @UseGuards(AuthGuard())
  @Roles(Role.Admin, Role.Seller)
  async addProduct(
    @Req() req: any,
    @Body() createProductDTO: CreateProductDto,
  ) {
    createProductDTO.authorId = req.user.id;
    const newProduct = await this.productService.addProduct(
      req,
      createProductDTO,
    );

    return { success: true, data: newProduct };
  }

  @Put('/update/:id')
  @UseGuards(AuthGuard())
  @Roles(Role.Admin, Role.Seller)
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
  @UseGuards(AuthGuard())
  @Roles(Role.Admin, Role.Seller)
  async deleteProduct(@Param('id') id: string) {
    const product = await this.productService.deleteProduct(id);
    if (!product) throw new NotFoundException('Sản phẩm không tồn tại');
    return 'Đã xoá ';
  }
}
