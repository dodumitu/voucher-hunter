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
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetProductQuery } from '../queries/getProduct.query';
import { CreateProductCommand } from '../commands/createProduct.command';
import { AuthGuard } from '@nestjs/passport';
// import { CreateProductCommand } from '../commands/createProduct.command';
// import { GetProductQuery } from '../queries/getProduct.query';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get(':id')
  // @UseFilters(HttpExceptionFilter)
  // @UseFilters(ExceptionLoggerFilter)
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Get(':id/get-by-query')
  async getDetailByQuery(@Param('id') id: string) {
    return this.queryBus.execute(new GetProductQuery(id));
  }

  @Post()
  async createProduct(@Body() product: CreateProductDto) {
    return this.productService.createProduct(product);
  }

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

  @Get('get/all')
  async getByArray() {
    return this.productService.getByArray();
  }
}
