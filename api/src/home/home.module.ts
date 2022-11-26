import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NewsModule } from 'src/news/news.module';
import { NewsService } from 'src/news/news.sevice';
import { ProductModule } from 'src/products/product.module';
import { ProductService } from 'src/products/product.service';
import { HomeController } from './home.cotroller';
import { HomeService } from './home.service';
import 'dotenv/config';

@Module({
  imports: [
    ProductModule,
    NewsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [HomeService, ProductService, NewsService],
  controllers: [HomeController],
})
export class HomeModule {}
