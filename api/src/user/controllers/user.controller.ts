import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Req,
  Res,
  StreamableFile,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import path, { extname, join } from 'path';
import { ApiTags } from '@nestjs/swagger';
import { ResponseData } from 'src/common/response/ResponseData';
import { updateEmailDto } from '../dto/update-email.dto';
import { updatePasswordDto } from '../dto/update-password.dto';
import { UpdatePhoneDto } from '../dto/update-phone.dto';
import { UpdateUserInfoDto } from '../dto/updateUserInfoDto';
import { UserService } from '../services/user.service';
import { createReadStream } from 'fs';
import { Response } from 'express';
import { User } from '../models/user.model';
import { map, Observable, tap, from, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
@Controller('user')
@ApiTags('user')
export class UserController {
  SERVER_URL = 'http://localhost:5400/';
  constructor(
    private userService: UserService, // private readonly localFilesService: LocalFilesService,
  ) {}
  @UseGuards(AuthGuard())
  @Get('profile')
  async getProfile(@Req() req: any) {
    const data = req.user;

    return new ResponseData(HttpStatus.OK, data);
  }

  @UseGuards(AuthGuard())
  @Put('update-info')
  async updateInfo(@Req() req: any, @Body() updateUser: UpdateUserInfoDto) {
    const { id } = req.user;
    return {
      success: true,
      data: await this.userService.updateInfo(id, updateUser),
    };
  }

  @UseGuards(AuthGuard())
  @Put('update-email')
  async updateEmail(@Req() req: any, @Body() updateEmail: updateEmailDto) {
    const { id } = req.user;
    return {
      success: true,
      data: await this.userService.updateEmail(id, updateEmail),
    };
  }

  @UseGuards(AuthGuard())
  @Put('update-phone')
  async updatePhone(@Req() req: any, @Body() updatePhone: UpdatePhoneDto) {
    const { id } = req.user;
    return {
      success: true,
      data: await this.userService.updatePhone(id, updatePhone),
    };
  }
  @UseGuards(AuthGuard())
  @Put('update-password')
  async updatePassword(
    @Req() req: any,
    @Body() updatePassword: updatePasswordDto,
  ) {
    const { id } = req.user;
    return {
      success: true,
      data: await this.userService.updatePassword(id, updatePassword),
    };
  }

  @UseGuards(AuthGuard())
  @Put('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req) {
    const { id } = req.user;

    return this.userService.addAvatar(file, id);
  }
}
