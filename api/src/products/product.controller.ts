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
import { Product } from './product.entity';
import { User } from 'src/user/models/user.model';
import { RolesGuard } from 'src/user/roles/roles.guard';

@Controller('products')
@ApiTags('products')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get('/')
  @ApiOperation({ summary: 'get all products by client' })
  async getProducts(@Query() query: ExpressQuery): Promise<Product[]> {
    return this.productService.getAllProducts(query);
  }

  @Get('/price-down')
  @ApiOperation({ summary: 'sorting price to indicate descending order' })
  async getAllProductsPriceDown(
    @Query() query: ExpressQuery,
  ): Promise<Product[]> {
    return this.productService.getAllProductsPriceDown(query);
  }

  @Get('/price-up')
  @ApiOperation({ summary: 'sorting price to indicate ascending order' })
  async getAllProductsPriceUp(
    @Query() query: ExpressQuery,
  ): Promise<Product[]> {
    return this.productService.getAllProductsPriceUp(query);
  }

  @Get('/older')
  @ApiOperation({ summary: 'sorting expire date to indicate ascending order' })
  async getAllProductsOlder(@Query() query: ExpressQuery): Promise<Product[]> {
    return this.productService.getAllProductsOlder(query);
  }

  @Get('/admin')
  @ApiOperation({ summary: 'get all products by admin' })
  @Roles(Role.Admin)
  @UseGuards(AuthGuard(), RolesGuard)
  @UseGuards(RolesGuard)
  async getAllByAdmin(@Query() query: ExpressQuery) {
    const admin = await this.productService.getAllProducts(query);
    return { success: true, data: admin };
  }

  @Get('/admin/price-down')
  @ApiOperation({
    summary: 'admin: sorting price to indicate descending order',
  })
  @UseGuards(AuthGuard())
  @Roles(Role.Admin)
  async getAdminPricedown(@Query() query: ExpressQuery) {
    const admin = await this.productService.getAllProductsPriceDown(query);
    return { success: true, data: admin };
  }

  @Get('/admin/price-up')
  @ApiOperation({
    summary: 'admin: sorting price to indicate descending order',
  })
  @UseGuards(AuthGuard())
  @Roles(Role.Admin)
  async getAdminPriceUp(@Query() query: ExpressQuery) {
    const admin = await this.productService.getAllProductsPriceUp(query);
    return { success: true, data: admin };
  }

  @Get('/admin/newer')
  @ApiOperation({
    summary: 'admin: sorting price to indicate ascending order',
  })
  @UseGuards(AuthGuard())
  @Roles(Role.Admin)
  async getAdminNewer(@Query() query: ExpressQuery) {
    const admin = await this.productService.getAllProductsNewer(query);
    return { success: true, data: admin };
  }

  @Get('/admin/older')
  @ApiOperation({
    summary: 'admin: sorting price to indicate descending order',
  })
  @UseGuards(AuthGuard())
  @Roles(Role.Admin)
  async getAdminOlder(@Query() query: ExpressQuery) {
    const admin = await this.productService.getAllProductsOlder(query);
    return { success: true, data: admin };
  }

  @Get('/seller')
  @ApiOperation({ summary: 'get all products by seller' })
  @UseGuards(AuthGuard())
  @Roles(Role.Seller)
  async getSellerProducts(@Req() req: any, @Query() query: ExpressQuery) {
    const authorId = req.user.id;
    // console.log(authorId);
    const seller = await this.productService.findAllByAuthorId(authorId, query);
    return { success: true, data: seller };
  }

  @Get('/seller/price-down')
  @ApiOperation({
    summary: 'seller: sorting price to indicate descending order',
  })
  @UseGuards(AuthGuard())
  @Roles(Role.Seller)
  async findAllByAuthorPriceDown(
    @Req() req: any,
    @Query() query: ExpressQuery,
  ) {
    const authorId = req.user.id;
    // console.log(authorId);
    const seller = await this.productService.findAllByAuthorPriceDown(
      authorId,
      query,
    );
    return { success: true, data: seller };
  }

  @Get('/seller/price-up')
  @ApiOperation({
    summary: 'seller: sorting price to indicate descending order',
  })
  @UseGuards(AuthGuard())
  @Roles(Role.Seller)
  async findAllByAuthorPriceUp(@Req() req: any, @Query() query: ExpressQuery) {
    const authorId = req.user.id;
    // console.log(authorId);
    const seller = await this.productService.findAllByAuthorPriceUp(
      authorId,
      query,
    );
    return { success: true, data: seller };
  }

  @Get('/seller/newer')
  @ApiOperation({
    summary: 'seller: sorting expire date to indicate descending order',
  })
  @UseGuards(AuthGuard())
  @Roles(Role.Seller)
  async findAllByAuthorNewer(
    @Req() req: any,
    @Query() query: any,
  ): Promise<any> {
    const authorId: string = req.user.id;
    const products: Product[] = await this.productService.findAllByAuthorNewer(
      authorId,
      query,
    );
    return { success: true, data: products };
  }

  @Get('/seller/older')
  @ApiOperation({
    summary: 'seller: sorting expire date to indicate ascending order',
  })
  @UseGuards(AuthGuard())
  @Roles(Role.Seller)
  async findAllByAuthorOlder(@Req() req: any, @Query() query: ExpressQuery) {
    const authorId = req.user.id;
    console.log(authorId);
    const seller = await this.productService.findAllByAuthorOlder(
      authorId,
      query,
    );
    return { success: true, data: seller };
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
function expireDate(a: Product, b: Product): number {
  throw new Error('Function not implemented.');
}
