import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { ResponseData } from 'src/common/response/ResponseData';
import {
  CreateUserDto,
  LoginUserDto,
  UpdateUserInfoDto,
} from 'src/user/dto/user.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return {
      success: true,
      data: await this.authService.register(createUserDto),
    };
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return { success: true, data: await this.authService.login(loginUserDto) };
  }
  // @Put('update-info')
  // async updateInfo(@Req() req: any, @Body() userUpdate: UpdateUserInfoDto) {
  //   const { _id } = req.user;
  //   console.log('........ ID: ', _id);
  // }
  // @UseGuards(AuthGuard())
  // @Get('profile')
  // async getProfile(@Req() req: any) {
  //   const data = req.user;

  //   return new ResponseData(HttpStatus.OK, data);
  // }
}
