import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { News, NewsDocument } from './news.entity';
import { CreateNewsDto } from './news.dto';
@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News.name)
    private readonly newsModel: Model<NewsDocument>,
  ) {}

  async getAllNews(): Promise<News[]> {
    const news = await this.newsModel.find().exec();
    return news;
  }

  async getHomeNews() {
    const news = await this.newsModel.find().exec();

    const newsestNews = news.slice(0, 5);
    return {
      success: true,
      data: newsestNews,
    };
  }

  async getNews(id: string): Promise<News> {
    const product = await this.newsModel.findById(id).exec();
    return product;
  }

  async addNews(createProductDTO: CreateNewsDto): Promise<News> {
    const newProduct = await this.newsModel.create(createProductDTO);
    return newProduct.save();
  }

  async updateNews(id: string, createProductDTO: CreateNewsDto): Promise<News> {
    const updatedProduct = await this.newsModel.findByIdAndUpdate(
      id,
      createProductDTO,
      { new: true },
    );
    return updatedProduct;
  }

  async deleteNews(id: string): Promise<any> {
    const deletedProduct = await this.newsModel.findByIdAndRemove(id);
    return deletedProduct;
  }
}
