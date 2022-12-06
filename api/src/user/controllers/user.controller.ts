import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
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
    const { id, user } = req.user;
    const updatedUser = await this.userService.updateInfo(id, updateUser);
    return {
      success: true,
      data: updatedUser,
    };
  }

  @UseGuards(AuthGuard())
  @Put('update-email')
  async updateEmail(@Req() req: any, @Body() updateEmail: updateEmailDto) {
    const { id, user } = req.user;
    const updatedUser = await this.userService.updateEmail(id, updateEmail);
    return {
      success: true,
      data: updatedUser,
    };
  }

  @UseGuards(AuthGuard())
  @Put('update-phone')
  async updatePhone(@Req() req: any, @Body() updatePhone: UpdatePhoneDto) {
    const { id, user } = req.user;
    const updatedUser = await this.userService.updatePhone(id, updatePhone);
    return {
      success: true,
      data: updatedUser,
    };
  }
  @UseGuards(AuthGuard())
  @Put('update-password')
  async updatePassword(
    @Req() req: any,
    @Body() updatePassword: updatePasswordDto,
  ) {
    const { id, user } = req.user;
    const updatedUser = await this.userService.updatePassword(
      id,
      updatePassword,
    );
    return {
      success: true,
      data: updatedUser,
    };
  }

  @UseGuards(AuthGuard())
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './profileimages',

        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  // eslint-disable-next-line @typescript-eslint/ban-types
  uploadFile(@UploadedFile() Image, @Req() req): Observable<Object> {
    const user: User = req.user;
    return from(
      this.userService.updateOne(user.id, { profileImage: Image.filename }),
    ).pipe(map((user: User) => ({ success: true, data: user })));
  }
  @Get('profile-image/:imagename')
  findProfileImage(
    @Param('imagename') imagename,
    @Res() res,
    // eslint-disable-next-line @typescript-eslint/ban-types
  ): Observable<Object> {
    return of(res.sendFile(join(process.cwd(), '/profileimages/' + imagename)));
  }
}
