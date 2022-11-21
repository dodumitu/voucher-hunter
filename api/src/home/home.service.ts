import { Injectable } from '@nestjs/common';
import { NewsService } from '../news/news.sevice';
import { ProductService } from '../products/product.service';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from '../products/product.entity';
import { News, NewsDocument } from '../news/news.entity';

@Injectable()
export class HomeService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
    @InjectModel(News.name)
    private readonly newsModel: Model<NewsDocument>,
  ) {}
  async getHome() {
    const products = await this.productModel.find().exec();
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
    const news = await this.newsModel.find().exec();

    const newsestNews = news.slice(0, 5);
    return (
      '5 sản phẩm admin: ' +
      slideProduct +
      '5 sản phẩm nổi bật: ' +
      featureProduct +
      '5 tin tức mới nhất: ' +
      newsestNews
    );
  }
}
