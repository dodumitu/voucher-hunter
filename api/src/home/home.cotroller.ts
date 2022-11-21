import {
  Controller,
  Request,
  Get,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';

import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private homeService: HomeService) {}
  @Get('/')
  async getHome() {
    const allNews = await this.homeService.getHome();
    return allNews;
  }
}
