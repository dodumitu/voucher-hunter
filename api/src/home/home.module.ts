import { Module } from '@nestjs/common';
import { NewsService } from 'src/news/news.sevice';
import { ProductService } from 'src/products/product.service';
import { HomeController } from '../home/home.cotroller';
import { HomeService } from '../home/home.service';
@Module({
  controllers: [HomeController],
  providers: [HomeService, ProductService, NewsService],
})
export class HomeModule {}
