import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from '../products/product.entity';
import { News, NewsDocument } from '../news/news.entity';
import { ProductService } from 'src/products/product.service';
import { NewsService } from 'src/news/news.sevice';

@Injectable()
export class HomeService {
  constructor(
    private readonly productService: ProductService,
    private readonly newsService: NewsService,
  ) {}

  async getHome() {
    const products = await this.productService.getAllProducts();
    const slideProduct = [];
    for (let i = 0; i < 5; i++) {
      const idx = Math.floor(Math.random() * products.length);
      slideProduct.push(products[idx]);
      products.splice(idx, 1);
    }
    const featureProduct = [];
    for (let i = 0; i < 5; i++) {
      const idx = Math.floor(Math.random() * products.length);
      featureProduct.push(products[idx]);
      products.splice(idx, 1);
    }
    const news = await this.newsService.getAllNews();

    const newsestNews = news.slice(0, 5);
    return {
      '5 sản phẩm admin: ': slideProduct,
      '5 sản phẩm nổi bật: ': featureProduct,
      '5 tin tức mới nhất: ': newsestNews,
      'tất cả sản phẩm': products,
    };
  }
}
