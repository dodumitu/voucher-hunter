import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  @UseGuards(AuthGuard())
  @Get('profile')
  async getProfile(@Req() req: any) {
    return { success: true, data: req.user };
  }
}
