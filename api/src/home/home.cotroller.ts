import { Controller, Get } from '@nestjs/common';

import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private homeService: HomeService) {}
  @Get('/')
  async getHome() {
    const home = await this.homeService.getHome();
    return home;
  }
}
