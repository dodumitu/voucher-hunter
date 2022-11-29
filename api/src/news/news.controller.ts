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
} from '@nestjs/common';
import { Request } from 'express';
import { NewsService } from './news.sevice';
import { CreateNewsDto } from './news.dto';
@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}
  // @Get('/')
  // async getHomeNews() {
  //   const homeNews = await this.newsService.getHomeNews();
  //   return { homeNews };
  // }
  @Get('/')
  async getAllNews() {
    const allNews = await this.newsService.getAllNews();
    return allNews;
  }

  @Get('/homenews')
  async getHomeNews() {
    const homeNews = await this.newsService.getHomeNews();
    return {
      success: true,
      data: homeNews,
    };
  }

  @Get('/:id')
  async getNews(@Param('id') id: string) {
    const news = await this.newsService.getNews(id);
    if (!news) throw new NotFoundException('Tin tức không tồn tại!');
    return news;
  }

  @Post('/post/')
  async addNews(@Body() CreateNewsDto: CreateNewsDto) {
    const news = await this.newsService.addNews(CreateNewsDto);
    return news;
  }

  @Put('/update/:id')
  async updateNews(
    @Param('id') id: string,
    @Body() createnewsDTO: CreateNewsDto,
  ) {
    const news = await this.newsService.updateNews(id, createnewsDTO);
    if (!news) throw new NotFoundException('Tin tức không tồn tại');
    return news;
  }

  @Delete('/delete/:id')
  async deleteNews(@Param('id') id: string) {
    const news = await this.newsService.deleteNews(id);
    if (!news) throw new NotFoundException('Sản phẩm không tồn tại');
    return 'Đã xoá ' + news.title;
  }
}
