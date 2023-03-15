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
import { query, Request } from 'express';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { FilterProductDTO } from './product.filter.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Roles } from 'src/user/roles/roles.decorator';
import { Role } from 'src/user/roles/role.enum';
import { AuthGuard } from '@nestjs/passport';
import { PaginationParams } from 'src/helper/paginationParams';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('products')
@ApiTags('products')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get('/')
  @ApiOperation({ summary: 'get all products by client' })
  async getProducts(
    @Query() filterProductDTO: FilterProductDTO,
    @Query() query: ExpressQuery,
  ) {
    if (Object.keys(filterProductDTO).length) {
      const filteredProducts = await this.productService.getFilteredProducts(
        filterProductDTO,
        query,
      );
      return { success: true, filteredProducts };
    }
    // else {
    //   const allProducts = await this.productService.getAllProducts(page);
    //   return { success: true, data: allProducts };
    // }
  }
  // @Get('/all')
  // async getAllProducts(@Query() page) {
  //   return await this.productService.getAllProducts(page);
  // }
  @Get('/admin')
  @ApiOperation({ summary: 'get all products by admin' })
  @UseGuards(AuthGuard())
  @Roles(Role.Admin, Role.Seller)
  async getAdminProducts(
    @Query() filterProductDTO: FilterProductDTO,
    @Query() query: ExpressQuery,
  ) {
    if (Object.keys(filterProductDTO).length) {
      const filteredProducts = await this.productService.getFilteredProducts(
        filterProductDTO,
        query,
      );
      return { success: true, filteredProducts };
    } else {
      const allProducts = await this.productService.getAllProducts(query);
      return { success: true, data: allProducts };
    }
  }

  @Get('/seller')
  @ApiOperation({ summary: 'get all products by seller' })
  @UseGuards(AuthGuard())
  @Roles(Role.Seller)
  async getSellerProducts(
    @Req() req: any,
    @Query() filterProductDTO: FilterProductDTO,
    // @Query() query: ExpressQuery,
  ) {
    const authorId = req.user.id;
    if (Object.keys(filterProductDTO).length) {
      const filteredProducts =
        await this.productService.getSellerFilteredProducts(
          authorId,
          filterProductDTO,
          // query,
        );
      return { success: true, filteredProducts };
    } else {
      const allProducts = await this.productService.findAllByAuthorId(
        authorId,
        // query,
      );
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
  @ApiOperation({ summary: 'create a products by logged in user' })
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
  @ApiOperation({ summary: 'update a product' })
  @UseGuards(AuthGuard())
  @Roles(Role.Admin, Role.Seller)
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProductDTO: UpdateProductDto,
  ) {
    const product = await this.productService.updateProduct(
      id,
      updateProductDTO,
    );
    if (!product) throw new NotFoundException('Sản phẩm không tồn tại');
    return { success: true, data: product };
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: 'delete a products' })
  @UseGuards(AuthGuard())
  @Roles(Role.Admin, Role.Seller)
  async deleteProduct(@Param('id') id: string) {
    const product = await this.productService.deleteProduct(id);
    if (!product) throw new NotFoundException('Sản phẩm không tồn tại');
    return 'Đã xoá ';
  }
}
