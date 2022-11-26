import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.sevice';
import { MongooseModule } from '@nestjs/mongoose';
import { News, NewsSchema } from './news.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: News.name, schema: NewsSchema }]),
  ],
  controllers: [NewsController],
  providers: [NewsService],
  exports: [NewsService],
})
export class NewsModule {}
