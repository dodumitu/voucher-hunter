// import {
//   Controller,
//   Product,
//   Body,
//   Get,
//   Param,
//   Patch,
//   Delete,
// } from '@nestjs/common';
// import { ProductsService } from '../services/product.service';
// @Controller('products')
// export class ProductsController {
//   constructor(private readonly productsService: ProductsService) {}

//   @Product()
//   async addProduct(
//     @Body('id') prodId: string,
//     @Body('brand') prodBrand: string,
//     @Body('description') prodDesc: string,
//     @Body('expire date') prodDate: Date,
//     @Body('title') prodTitle: string,
//     @Body('discountCode ') prodCode: string,
//     @Body('quantity') prodQty: number,
//     @Body('discountDetail') prodDetail: string,
//   ) {
//     const generatedId = await this.productsService.insertProduct(
//       prodId,
//       prodBrand,
//       prodDesc,
//       prodDate,
//       prodTitle,
//       prodCode,
//       prodQty,
//       prodDetail,
//     );

//     return { id: generatedId };
//   }

//   @Get()
//   async getAllProducts() {
//     return await this.productsService.getAllProducts();
//   }

//   @Get(':id')
//   getProduct(@Param('id') id: string) {
//     return this.productsService.getProduct(id);
//   }

//   @Patch(':id')
//   async updateProduct(
//     @Param('id') id: string,
//     @Body('brand') Brand: string,
//     @Body('description') description: string,
//     @Body('expire date') expireDate: Date,
//     @Body('title') title: string,
//     @Body('discountCode ') discountCode: string,
//     @Body('quantity') quantity: number,
//     @Body('discount detail') discountDetail: string,
//   ) {
//     await this.productsService.updateProduct(
//       id,
//       Brand,
//       description,
//       expireDate,
//       title,
//       discountCode,
//       quantity,
//       discountDetail,
//     );
//     return null;
//   }

//   @Delete(':id')
//   async removeProduct(@Param('id') id: string) {
//     await this.productsService.removeProduct(id);
//     return null;
//   }
// }
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { ProductService } from '../services/product.service';
import { ExceptionLoggerFilter } from '../../utils/exceptionLogger.filter';
import { HttpExceptionFilter } from '../../utils/httpException.filter';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetProductQuery } from '../queries/getProduct.query';
import { CreateProductCommand } from '../commands/createProduct.command';
import { AuthGuard } from '@nestjs/passport';
// import { CreateProductCommand } from '../commands/createProduct.command';
// import { GetProductQuery } from '../queries/getProduct.query';

@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get(':id')
  @UseFilters(HttpExceptionFilter)
  // @UseFilters(ExceptionLoggerFilter)
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Get(':id/get-by-query')
  async getDetailByQuery(@Param('id') id: string) {
    return this.queryBus.execute(new GetProductQuery(id));
  }

  // @Post()
  // @UseGuards(AuthGuard('jwt'))
  // async createPost(@Req() req: any, @Body() post: CreatePostDto) {
  //   return this.postService.createPost(req.user, post);
  // }

  @Post('create-by-command')
  // @UseGuards(AuthGuard('jwt'))
  async createByCommand(@Req() req: any, @Body() product: CreateProductDto) {
    return this.commandBus.execute(new CreateProductCommand(product));
  }

  @Put(':id')
  async replaceProduct(
    @Param('id') id: string,
    @Body() product: UpdateProductDto,
  ) {
    return this.productService.replaceProduct(id, product);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    await this.productService.deleteProduct(id);
    return true;
  }

  @Get('get/category')
  async getByCategory(@Query('category_id') category_id) {
    return await this.productService.getByCategory(category_id);
  }

  @Get('get/categories')
  async getByCategories(@Query('category_ids') category_ids) {
    return await this.productService.getByCategories(category_ids);
  }

  @Get('get/array')
  async getByArray() {
    return this.productService.getByArray();
  }
}
