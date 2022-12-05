import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { ResponseData } from 'src/common/response/ResponseData';
import { UpdateUserInfoDto } from '../dto/user.dto';
import { UserService } from '../services/user.service';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private userService: UserService) {}
  @UseGuards(AuthGuard())
  @Get('profile')
  async getProfile(@Req() req: any) {
    const data = req.user;

    return new ResponseData(HttpStatus.OK, data);
  }

  @UseGuards(AuthGuard())
  @Put('update-info')
  async updateInfo(@Req() req: any, @Body() updateUser: UpdateUserInfoDto) {
    const { id, user } = req.user;
    const data = await this.userService.updateInfo(id, updateUser);
    return new ResponseData(HttpStatus.OK, data);
  }
}
