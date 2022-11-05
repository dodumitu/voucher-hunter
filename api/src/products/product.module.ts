import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductRepository } from './repositories/product.repository';

import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { ProductSchema } from './models/product.model';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateProductHandler } from './handler/createProduct.handler';
import { GetProductHandler } from './handler/getProduct.handler';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    CqrsModule,
  ],
  controllers: [ProductController],
  providers: [
    ProductService,
    ProductRepository,
    CreateProductHandler,
    GetProductHandler,
  ],
})
export class ProductModule {}
