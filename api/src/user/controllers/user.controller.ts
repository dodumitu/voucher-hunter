import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Put,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { ApiTags } from '@nestjs/swagger';
import { extname } from 'path';
import { ResponseData } from 'src/common/response/ResponseData';
import { updateEmailDto } from '../dto/update-email.dto';
import { updatePasswordDto } from '../dto/update-password.dto';
import { UpdatePhoneDto } from '../dto/update-phone.dto';
import { UpdateUserInfoDto } from '../dto/updateUserInfoDto';
import { UserService } from '../services/user.service';

export const multerOptions = {
  // Enable file size limits
  limits: {
    fileSize: 200000,
  },
  // Check the mimetypes to allow for upload
  fileFilter: (req: any, file: any, cb: any) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|)$/)) {
      // Allow storage of file
      cb(null, true);
    } else {
      // Reject file
      cb(
        new HttpException(
          `Unsupported file type ${extname(file.originalname)}`,
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  },
};
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
  @UseInterceptors(FileInterceptor('file', multerOptions))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req) {
    const { id } = req.user;

    return this.userService.addAvatar(file, id);
  }
}
